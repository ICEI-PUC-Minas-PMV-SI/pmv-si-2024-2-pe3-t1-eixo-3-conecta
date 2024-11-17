import { PageContent } from "./models/pageContent.js";

document.addEventListener('DOMContentLoaded', async () => {

    const title = document.querySelector('#title').textContent.trim();
    const pageContent = new PageContent();
    const content = await pageContent.findByTitle(title).then(content => content[0]);

    document.querySelector('#page-content').innerHTML = content.content;

});
