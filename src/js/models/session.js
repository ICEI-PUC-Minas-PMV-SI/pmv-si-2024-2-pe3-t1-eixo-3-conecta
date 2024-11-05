import {getURL, makeRequest} from "../http.js";

export class Session {
    id;
    userId;
    token;
    expirationDate;
    active;
    userType;

    constructor(userId, userType) {
        this.userId = userId;
        this.token = crypto.randomUUID();
        // para fins acadêmicos, o token expira em 2 horas
        this.expirationDate = new Date(Date.now() + 7200000);
        this.active = true;
        this.userType = userType;
    }

    async create() {
        const data = {
            userId: this.userId,
            token: this.token,
            expirationDate: this.expirationDate,
            active: this.active,
            userType: this.userType
        }
        await makeRequest(getURL('sessions'), 'POST', data);
        return makeRequest(getURL(`sessions?token=${this.token}`), 'GET');
    }

}

export async function deleteSession(tokenId) {
    return await makeRequest(getURL(`sessions/${tokenId}`), 'DELETE');
}

export async function getSession(token) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: undefined
    };

    try {
        const response = await fetch(getURL(`sessions?token=${token}`), options);
        return await response.json();
    } catch (err) {
        console.error(err);
    }
}
