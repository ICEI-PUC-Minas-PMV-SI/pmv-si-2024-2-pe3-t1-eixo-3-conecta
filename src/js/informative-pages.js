import { PageContent } from "./models/pageContent.js";
import { getSession } from '../js/models/session.js';

document.addEventListener('DOMContentLoaded', async () => {
    
    const modal = document.querySelector('#edit-modal');
    const closeButton = document.querySelector('#close-modal');
    const cancelButton = document.querySelector('#cancel-button');
    const formModal = document.querySelector('#form-modal');
    const page = window.location.pathname.split('/').pop();

    const token = window.localStorage.getItem("token");
    const session = await getSession(token).then(session => session[0]);
    
    const pageContent = new PageContent();
    const content = await pageContent.findByPage(page);
    const container = document.querySelector('.conteudo');

    await addContent(content, container);

    if (session && session.userType === 'admin') {
        
        const editButtons = document.querySelectorAll('.admin-edit-button');
        
        editButtons.forEach(button => {
            button.hidden = false;
            button.addEventListener('click', async () => {
                const id = button.getAttribute('data-id');
                const conteudo = content.find(element => element.id == id);

                modal.showModal();
                document.querySelector('#modal-title').innerHTML = conteudo.title;
                document.querySelector('input[data-id]').value = conteudo.id;
                document.querySelector('input[data-title]').value = conteudo.title;
                document.querySelector('input[data-page]').value = window.location.pathname.split('/').pop();
                document.querySelector('#content').value = conteudo.content;
            });
        });

        closeButton.addEventListener('click', (e) => {
            e.preventDefault();
            limparCamposModal();
            modal.close();
        });

        cancelButton.addEventListener('click', (e) => {
            e.preventDefault();
            limparCamposModal();
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

async function addContent(content, local) {
    
    local.innerHTML = '';
    content.forEach(element => {
        const contentHtml = `

            <div class="title-content">
                <h2 class="title">${element.title}</h2>
                <button class="admin-edit-button" data-id="${element.id}" hidden>
                    <p>editar </p>
                    <img class="admin-edit-icon" src="../../assets/icons/edit.png" alt="edit">
                </button>
            </div>
            <p class="paragrafo" id="page-content">${element.content}</p>
        `;
        local.insertAdjacentHTML('beforeend', contentHtml);
    });
}

function limparCamposModal() {
    document.querySelector('input[data-id]').value = '';
    document.querySelector('input[data-title]').value = '';
    document.querySelector('input[data-page]').value = '';
    document.querySelector('#content').value = '';
}
