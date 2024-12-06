import { getURL, makeRequest } from '../http.js';

export class Candidacy {
    id;
    taskId;
    candidateId;
    status;
    text;

    async create() {
        const data = {
            taskId: this.taskId,
            candidateId: this.candidateId,
            status: 'Pendente',
            text: this.text,
        }

        return await makeRequest(getURL('candidacies'), 'POST', data);
    }

    async updateStatusById(id, status) {
        const data = {
            status
        }

        return await makeRequest(getURL(`candidacies/${id}`), 'PATCH', data);
    }

    async findAllByTaskId(taskId) {
        return await makeRequest(getURL(`candidacies?taskId=${taskId}&status_ne=Reprovado`), 'GET');
    }
}
