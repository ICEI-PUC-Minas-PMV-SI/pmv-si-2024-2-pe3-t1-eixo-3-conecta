import { getURL, makeRequest } from "../http.js";

export class Admin {
    id;
    email;
    password;

    async findById(id) {
        return await makeRequest(getURL(`admin/${id}`), 'GET');
    }

    async findByEmail(email) {
        return await makeRequest(getURL(`admin?email=${email}`), 'GET');
    }

}

export async function findById(id) {
    return await makeRequest(getURL(`admin/${id}`), 'GET');
}

export async function findByEmail(email) {
    return await makeRequest(getURL(`admin?email=${email}`), 'GET');
}
