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

// Função para deletar uma tarefa por ID e recarregar a página
window.deleteTasks = async function (id) {
  const task = new Task();
  await task.deleteById(id);
  window.location.reload();
};

// Função assíncrona para obter dados de uma organização pelo ID
const getOrganizationData = async (organizationId) => {
  const ong = new Organization();
  return await ong.findById(organizationId);
};

// Função principal para buscar tarefas com filtros de tipo e status
const getTasks = async (filterTipo = "all", filterStatus = "all") => {
  const tasksWrapper = document.querySelector(".tasks-wrapper");
  const urlParams = new URLSearchParams(window.location.search);
  const taskIdDelete = urlParams.get("delete");

  // Verifica se há uma tarefa para deletar via URL e a deleta
  if (taskIdDelete) {
    await deleteTask(taskIdDelete).catch((error) => console.log(error));
  }

  // Busca tarefas filtradas pelo tipo
  const tasks = await task.findAllFilteredByType(filterTipo);
  const token = window.localStorage.getItem("token");
  const session = await getSession(token);
  const verticalTaskCard = new VerticalTaskCard();

  // Itera sobre as tarefas e as exibe conforme os filtros aplicados
  for await (const task of tasks) {
    if (
      session[0].userId === task.organizationId &&
      (filterStatus === "all" || filterStatus === task.status)
    ) {
      let taskStatus = task.status;
      const organizationData = await getOrganizationData(session[0].userId);

      // Define o ícone de status baseado na condição da tarefa
      let statusTask = "red-dot.png";
      if (task.status.toLowerCase() === "aberta") {
        statusTask = "green-dot.png";
      }

      // Define o endereço conforme o tipo da tarefa
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
        `                <p class="task-name">` +
        task.name +
        `</p>` +
        `                <p class="task-owner">` +
        organizationData.name +
        `</p>` +
        `                <div class="status-wrapper" onclick="fotoClick(event)">` +
        `                    <div class="status-info">` +
        `                        <img class="status-image" src="../../assets/icons/` +
        statusTask +
        `" alt="">` +
        `                    </div>` +
        `                    <div>` +
        `                        <p class="status-name">` +
        taskStatus.charAt(0).toUpperCase() +
        taskStatus.slice(1) +
        `</p>` +
        `                    </div>` +
        `                </div>` +
        `            </div>` +
        `        </div>` +
        `        <div class="task-description">` +
        `            <p class="task-description-text">` +
        task.description +
        `            </p>` +
        `        </div>` +
        `        <div class="cards-button" onclick="fotoClick(event)">` +
        `            <div class="card-button-wrapper" onclick="fotoClick(event)">` +
        `                <div class="manage-delete-button-wrapper" onclick="window.location.href = '../administrar-demanda/administrar-demanda.html?id=` +
        task.id +
        `'">` +
        `                    <a href="#"><img class="manage-button" src="../../assets/icons/manage.png" alt="manage"></a>` +
        `                </div>` +
        `                <div class="manage-delete-button-wrapper" onclick="if (confirm('Tem certeza que deseja excluir essa demanda?')) deleteTasks(` +
        task.id +
        `)">` +
        `                    <a href="#"><img class="delete-button" src="../../assets/icons/delete.png" alt="Delete"></a>` +
        `                </div>` +
        `            </div>` +
        `            <div class="location-button-wrapper">` +
        `                <img class="image-location" src="../../assets/icons/location-black.png" alt="Location">` +
        `                <div class="location-tag">` +
        endereco +
        `                </div>` +
        `            </div>` +
        `            <div style="display:none">` +
        `                <div class="address">` +
        organizationData.street +
        ", " +
        organizationData.number +
        `                </div>` +
        `            </div>` +
        `        </div>` +
        `    </div>` +
        `</div>`;
      $(".tasks-wrapper").append(html);
    }
  }
};

// Função auxiliar para deletar uma tarefa por ID
const deleteTask = async (id) => {
  task.deleteById(id);
  return;
};

// Chama a função principal para exibir as tarefas ao carregar a página
getTasks().catch((error) => {
  console.log(error);
});
