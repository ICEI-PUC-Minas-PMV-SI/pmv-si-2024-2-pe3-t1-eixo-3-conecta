document.addEventListener('DOMContentLoaded', () => {

    const container = document.querySelector('.conteudo');

    const observer = new MutationObserver(() => {

        if (container.children.length > 0) {
            var dinamic = document.querySelectorAll('.dinamic-container');
            for (let i = 0; i < dinamic.length; i++) {
                dinamic[i].classList.add('reverse');
                i++;
            }
            observer.disconnect();
        }
    });

    observer.observe(container, { childList: true });
});

