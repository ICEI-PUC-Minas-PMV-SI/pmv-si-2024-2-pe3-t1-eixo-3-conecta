import { makeRequest, getURL } from '../http.js';
import { hashPassword } from "../utils.js";

export class Candidate {
    name;
    about;
    email;
    cpf;
    phone;
    password;

    async create() {
        const data = {
            name: this.name,
            email: this.email,
            about: this.about,
            cpf: this.cpf,
            phone: this.phone,
            password: await hashPassword(this.password),
        }

        const searchCPF = await makeRequest(getURL(`candidates?cpf=${this.cpf}`), 'GET');
        if(searchCPF.length > 0) throw new Error("CPF já cadastrado")

        const searchEmail = await makeRequest(getURL(`candidates?email=${this.email}`), 'GET');
        if(searchEmail.length > 0) throw new Error("Email já cadastrado")

        return await makeRequest(getURL('candidates'), 'POST', data);
    }

    async findById(id) {
        return await makeRequest(getURL(`candidates/${id}`), 'GET');
    }

    async findByEmail(email) {
        return await makeRequest(getURL(`candidates?email=${email}`), 'GET');
    }

    async findByCpf(cpf) {
        return await makeRequest(getURL(`candidates?cpf=${cpf}`), 'GET');
    }
    async findByStatus(status) {
        return await makeRequest(getURL(`candidates?status=${status}`), 'GET');
    }
    async findByTaskId(taskId) {
        return await makeRequest(getURL(`candidates?taskId=${taskId}`), 'GET');
    }
    async findAll() {
        return await makeRequest(getURL('candidates'), 'GET');
    }

    async updateById(id) {
        const data = {
            taskId: this.taskId,
            name: this.name,
            email: this.email,
            cpf: this.cpf,
            phone: this.phone,
            profile: this.profile,
            status: this.status,
            timestamp: this.timestamp,
        }

        return await makeRequest(getURL(`candidates/${id}`), 'PUT', data);
    }

    async updateStatusById(id, newStatus) {
        const data = {
            status: newStatus
        }

        return await makeRequest(getURL(`candidates/${id}`), 'PATCH', data);
    }

    async deleteById(id) {
        return await makeRequest(getURL(`candidates/${id}`), 'DELETE');
    }
}
