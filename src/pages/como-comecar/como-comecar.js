document.addEventListener('DOMContentLoaded', () => {

    const content = document.querySelector('.image-wrapper');
    const container = document.querySelector('.conteudo');

    const observer = new MutationObserver(() => {

        if (container.children.length > 0) {
            var title = document.querySelector('.title');
            const subtitles = document.querySelectorAll('.subtitle');

            const instructionsDiv = document.createElement('div');
            instructionsDiv.classList.add('instructions');
            container.appendChild(instructionsDiv);

            const wrapper = title.closest('.dinamic');

            
            if (wrapper) {
                content.appendChild(wrapper);
                wrapper.prepend(title);
            }

            subtitles.forEach(subtitle => {
                const wrapper = subtitle.closest('.dinamic');

                instructionsDiv.appendChild(wrapper);
            });

            observer.disconnect();
        }
    });

    observer.observe(container, { childList: true });
});

