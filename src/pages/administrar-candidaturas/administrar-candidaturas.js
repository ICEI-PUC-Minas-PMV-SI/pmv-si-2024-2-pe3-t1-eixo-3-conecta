import { Task } from "../../js/models/task.js";
import { Organization } from "../../js/models/organization.js";

import { getSession } from "../../js/models/session.js";

import { VerticalTaskCard } from "../../components/vertical-task-card/vertical-task-card.js";
import { HorizontalTaskCard } from "../../components/horizontal-task-card/horizontal-task-card.js";

// Evento para filtro por tipo de tarefa
document.querySelector(".filterButton").addEventListener("change", (event) => {
  const tasksWrapper = document.querySelector(".tasks-wrapper");
  tasksWrapper.innerHTML = ""; // Limpa o conteúdo atual das tarefas
  getTasks(event.target.value, "all") // Busca tarefas com o filtro selecionado
    .catch((error) => console.log(error));
});

// Evento para filtro por status da tarefa
document
  .querySelector(".filterButton.status")
  .addEventListener("change", (event) => {
    const tasksWrapper = document.querySelector(".tasks-wrapper");
    tasksWrapper.innerHTML = ""; // Limpa o conteúdo atual das tarefas
    getTasks("all", event.target.value) // Busca tarefas com o filtro de status
      .catch((error) => console.log(error));
  });

// Instancia um objeto da classe Task
const task = new Task();

// Função para deletar um candidato da lista de uma tarefa e recarregar a página
window.deleteCandidateFromTask = async function (taskId) {
  try {
    const token = window.localStorage.getItem("token");
    const session = await getSession(token);

    if (!session || !session[0]?.userId) {
      alert("Você precisa estar logado para acessar esse recurso.");
      window.location.href = "../login/login.html";
    }

    const userId = session[0].userId;

    // Busca a tarefa pelo ID
    const taskInstance = new Task();
    const task = await taskInstance.findById(taskId);

    if (!task) {
      console.error("Tarefa não encontrada.");
      return;
    }

    // Atualiza a lista de candidatos, removendo o usuário
    const updatedCandidates = task.candidates.filter(
      (candidateId) => candidateId !== userId
    );

    // Salva as alterações no backend
    await taskInstance.updateCandidatesById(taskId, updatedCandidates);

    // Recarrega a página para atualizar as exibições
    window.location.reload();
  } catch (error) {
    console.error("Erro ao remover candidato da tarefa:", error);
  }
};

// Função assíncrona para obter dados de uma organização pelo ID
const getOrganizationData = async (organizationId) => {
  const ong = new Organization();
  return await ong.findById(organizationId);
};

// Função principal para buscar tarefas com filtros de tipo, status e candidatos
const getTasks = async (filterTipo = "all", filterStatus = "all") => {
  const tasksWrapper = document.querySelector(".tasks-wrapper");
  tasksWrapper.innerHTML = ""; // Limpa o conteúdo atual das tarefas

  const token = window.localStorage.getItem("token");
  const session = await getSession(token);

  if (!session || !session[0]?.userId) {
    alert("Você precisa estar logado para acessar esse recurso.");
    window.location.href = "../login/login.html";
  }

  const userId = session[0].userId; // ID do usuário logado

  console.log("ID do usuário logado", userId);

  const tasks = await task.findAllFilteredByType(filterTipo); // Busca tarefas por tipo

  // Exibe no log todas as tarefas carregadas
  console.log("Todas as tarefas carregadas:", tasks);

  // Filtro: Exibe somente as tarefas que o usuário se inscreveu
  const userTasks = tasks.filter((task) => task.candidates.includes(userId));

  if (userTasks.length === 0) {
    tasksWrapper.innerHTML = `<div style = "display: flex; flex-direction: column; gap: 8px;font-size: 16px; text-align:center; padding: 0 16px;">Você não se inscreveu em nenhuma demanda ainda! <br/> <a href="../pagina-de-demandas/pagina-de-demandas.html" style="color: var(--cor-titulo); text-decoration: none; font-weight: 700;">Comece Agora!</a> </div>`;
    // Exibe a mensagem na página
    return; // Retorna sem continuar a execução
  }

  // Exibe no log as tarefas que o usuário se inscreveu
  console.log("Tarefas que o usuário se inscreveu:", userTasks);

  // Verifica se há tarefas que o usuário se inscreveu e exibe as que corresponderem ao status
  for await (const task of userTasks) {
    // Verifica o status da tarefa
    if (filterStatus === "all" || filterStatus === task.status) {
      const organizationData = await getOrganizationData(task.organizationId);

      // Define o ícone de status baseado na condição da tarefa
      let statusTask = "red-dot.png";
      if (task.status.toLowerCase() === "aberta") {
        statusTask = "green-dot.png";
      }

      let endereco = organizationData.city + ", " + organizationData.state;
      if (task.type.toLowerCase() === "remoto") {
        endereco = "Remoto";
      }

      // Template HTML para exibir as tarefas
      let html =
        `<div class="vertical-task-card" onclick="modal($(this), event);">` +
        `    <div class="card-section-wrapper">` +
        `        <div class="card-header" onclick="fotoClick(event)">` +
        `            <div class="task-info">` +
        `                <p class="task-name">${task.name}</p>` +
        `                <p class="task-owner">${organizationData.name}</p>` +
        `                <div class="status-wrapper" onclick="fotoClick(event)">` +
        `                    <div class="status-info">` +
        `                        <img class="status-image" src="../../assets/icons/${statusTask}" alt="">` +
        `                    </div>` +
        `                    <div>` +
        `                        <p class="status-name">${
          task.status.charAt(0).toUpperCase() + task.status.slice(1)
        }</p>` +
        `                    </div>` +
        `                </div>` +
        `            </div>` +
        `        </div>` +
        `        <div class="task-description">` +
        `            <p class="task-description-text">${task.description}</p>` +
        `        </div>` +
        `        <div class="cards-button" onclick="fotoClick(event)">` +
        `            <div class="card-button-wrapper" onclick="fotoClick(event)">` +
        `                <div class="manage-delete-button-wrapper" onclick="if (confirm('Tem certeza que deseja cancelar sua candidatura?')) deleteCandidateFromTask(${task.id})">` +
        `                    <a href="#"><img class="delete-button" src="../../assets/icons/delete.png" alt="Delete"></a>` +
        `                </div>` +
        `            </div>` +
        `            <div class="location-button-wrapper">` +
        `                <img class="image-location" src="../../assets/icons/location-black.png" alt="Location">` +
        `                <div class="location-tag">${endereco}</div>` +
        `            </div>` +
        `            <div style="display:none">` +
        `                <div class="address">${organizationData.street}, ${organizationData.number}</div>` +
        `            </div>` +
        `        </div>` +
        `    </div>` +
        `</div>` +
        `<div class="horizontal-task-card" onclick="modal($(this), event);">` +
        `    <div class="left-side">` +
        `        <div class="task-info" onclick="fotoClick(event)">` +
        `            <p class="task-name">${task.name}</p>` +
        `            <p class="task-owner">${organizationData.name}</p>` +
        `        </div>` +
        `        <div class="task-description">` +
        `            <p class="task-description-text">${task.description}</p>` +
        `        </div>` +
        `        <div class="bottom-info" onclick="fotoClick(event)">` +
        `            <div class="location-button-wrapper">` +
        `                <img class="image-location" src="../../assets/icons/location-black.png" alt="Location">` +
        `                <div class="location-tag">${endereco}</div>` +
        `            </div>` +
        `            <div class="status-wrapper">` +
        `                <div class="status-info">` +
        `                    <img class="status-image" src="../../assets/icons/${statusTask}" alt="">` +
        `                </div>` +
        `                <div>` +
        `                    <p class="status-name">${
          task.status.charAt(0).toUpperCase() + task.status.slice(1)
        }</p>` +
        `                </div>` +
        `            </div>` +
        `        </div>` +
        `    </div>` +
        `    <div class="right-side">` +
        `        <div class="cards-button" onclick="fotoClick(event)">` +
        `                <div class="manage-delete-button-wrapper" onclick="if (confirm('Tem certeza que deseja cancelar sua candidatura?')) deleteCandidateFromTask(${task.id})">` +
        `                <a href="#"><img class="delete-button" src="../../assets/icons/delete.png" alt="Delete"></a>` +
        `            </div>` +
        `        </div>` +
        `    </div>` +
        `    <div style="display:none">` +
        `        <div class="address">${organizationData.street}, ${organizationData.number}</div>` +
        `     </div>` +
        `</div>`;

      $(".tasks-wrapper").append(html);
    }
  }
};

// Chama a função principal para exibir as tarefas ao carregar a página
getTasks().catch((error) => {
  console.log(error);
});
