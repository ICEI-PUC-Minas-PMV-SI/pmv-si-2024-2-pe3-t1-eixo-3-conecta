document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.conteudo');

    const observer = new MutationObserver(() => {
        if (container.children.length > 0) {
            transformContentIntoCollapsibles(container);
            observer.disconnect();
        }
    });

    observer.observe(container, { childList: true });
});


function transformContentIntoCollapsibles(container) {

    const titles = container.querySelectorAll('h2');
    const paragraphs = container.querySelectorAll('p.paragrafo');
    const editButtons = container.querySelectorAll('.admin-edit-button');

    container.innerHTML = '';

    titles.forEach((title, index) => {
        const paragraph = paragraphs[index]; 
        const editButton = editButtons[index];

        if (paragraph) {
            const wrapper = document.createElement('div');
            wrapper.classList.add('collapsible-wrapper');

            const button = document.createElement('button');
            button.classList.add('collapsible');
            button.textContent = title.textContent;

            const contentDiv = document.createElement('div');
            contentDiv.classList.add('collapsible-content');
            contentDiv.innerHTML = `<p>${paragraph.innerHTML}</p>`;

            const titleContainer = document.createElement('div');
            titleContainer.classList.add('title-container');
            titleContainer.appendChild(button);
            if (editButton) titleContainer.appendChild(editButton);

            wrapper.appendChild(titleContainer);
            wrapper.appendChild(contentDiv);

            container.appendChild(wrapper);
        }
    });

    initCollapsibles();
}

function initCollapsibles() {
    const coll = document.querySelectorAll('.collapsible');

    coll.forEach(button => {
        button.addEventListener('click', function () {
            console.log(button);
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null; 
            } else {
                content.style.maxHeight = content.scrollHeight + 'px'; 
            }
        });
    });
}



