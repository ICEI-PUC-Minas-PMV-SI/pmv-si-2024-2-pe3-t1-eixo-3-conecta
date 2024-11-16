import { getSession } from '../js/models/session.js';
import { PageContent } from '../js/models/pageContent.js';

document.addEventListener('DOMContentLoaded', async () => {

    const token = window.localStorage.getItem("token");
    const session = await getSession(token).then(session => session[0]);
    
    if (session && session.userType === 'admin') {
        
        const editButton = document.querySelector('#edit-button');
        const modal = document.querySelector('#edit-modal');
        const closeButton = document.querySelector('#close-modal');
        const cancelButton = document.querySelector('#cancel-button');
        const formModal = document.querySelector('#form-modal');
        const title = document.querySelector('#title').textContent.trim();

        editButton.removeAttribute('hidden');
        
        const pageContent = new PageContent();
        const content = await pageContent.findByTitle(title).then(content => content[0]);
        
        editButton.addEventListener('click', () => {
            modal.showModal();
            document.querySelector('#modal-title').innerHTML = title;
            document.querySelector('input[data-id]').value = content.id;
            document.querySelector('input[data-title]').value = content.title;
            document.querySelector('input[data-page]').value = window.location.pathname.split('/').pop();
            document.querySelector('#content').value = content.content;

        });

        closeButton.addEventListener('click', (e) => {
            e.preventDefault();
            modal.close();
        });

        cancelButton.addEventListener('click', (e) => {
            e.preventDefault();
            modal.close();
        });

        if (formModal) {

            formModal.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const formData = new FormData(formModal);
                
                try {
                    await pageContent.updateById(formData);
                    alert('Conteúdo atualizado com sucesso!');
                    modal.close();
                } catch (error) {
                    console.error('Erro ao atualizar o conteúdo:', error);
                }
            });
        }

    } 

});
