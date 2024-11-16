import { getURL, makeRequest } from "../http.js";

export class PageContent {
    id;
    page;
    title;
    content;

    async findById(id) {
        try {
            const response = await makeRequest(getURL(`pageContent/${id}`), 'GET');
            return response;
        } catch (error) {
            console.error('Erro ao buscar conteúdo:', error);
        }
    }
    
    async findByTitle(title) {
        try {
            const response = await makeRequest(getURL(`pageContent?title=${title}`), 'GET');
            return response;
        } catch (error) {
            console.error('Erro ao buscar conteúdo:', error);
        }
    }

    async updateById(formData) {
        try {
            const data = Object.fromEntries(formData.entries());

            const response = await makeRequest(getURL(`pageContent/${data.id}`), 'PUT', data);
            return response;
        } catch (error) {
            console.error('Erro ao atualizar o conteúdo:', error);
        }
    }
}

export async function findById(id) {
    try {
        const response = await makeRequest(getURL(`pageContent/${id}`), 'GET');
        return response;
    } catch (error) {
        console.error('Erro ao buscar conteúdo:', error);
    }
}
