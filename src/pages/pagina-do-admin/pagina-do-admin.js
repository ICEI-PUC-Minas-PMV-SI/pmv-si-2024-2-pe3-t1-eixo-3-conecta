import { getSession } from '../../js/models/session.js';

document.addEventListener('DOMContentLoaded', async () => {

    const token = window.localStorage.getItem("token");
    const session = await getSession(token).then(session => session[0]);
    
    if (!session) {
        alert('Acesso negado. Você não tem permissão para acessar esta página.');
        window.location.href = '../../index.html';
    } 
});
