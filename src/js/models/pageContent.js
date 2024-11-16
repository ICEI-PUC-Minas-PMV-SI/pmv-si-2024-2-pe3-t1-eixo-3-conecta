import { getURL, makeRequest } from "../http.js";

export class PageContent {
    id;
    page;
    image;
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
            const response = await makeRequest(getURL(`pageContent/title/${title}`), 'GET');
            return response;
        } catch (error) {
            console.error('Erro ao buscar conteúdo:', error);
        }
    }

    async updateById(formData) {
        try {
            //teste de respostas
            const data = Object.fromEntries(formData.entries());
            console.log('Dados recebidos para atualização:', data);

            console.log('Enviando dados para atualização...');

            setTimeout(() => {
                console.log('Conteúdo atualizado com sucesso!');
            }, 1000);
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
