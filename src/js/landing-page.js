import { findRecentTasks } from "./models/task.js";
import { Organization } from "./models/organization.js";

import { VerticalTaskCard } from "../components/vertical-task-card/vertical-task-card.js";
import { HorizontalTaskCard } from "../components/horizontal-task-card/horizontal-task-card.js";

// Seleciona todos os parágrafos dentro do elemento com a classe 'task-description'
const descriptions = document.querySelectorAll(".task-description");

// Itera sobre cada parágrafo para verificar se o conteúdo é maior que o tamanho visível
descriptions.forEach((description) => {
  // Seleciona o botão 'Mostrar Mais' associado a cada descrição
  const showMoreButton = description.nextElementSibling;

  // Se o conteúdo da descrição for maior que o tamanho visível, exibe o botão
  if (description.offsetHeight < description.scrollHeight) {
    showMoreButton.style.display = "block";
  }
});

// Função assíncrona para obter os dados da organização com base no ID
const getOrganizationData = async (id) => {
  const ong = new Organization();
  // Retorna os dados da organização encontrados pelo ID
  return await ong.findById(id);
};

// Função principal para popular a página com as tarefas recentes
const populateDemanda = async () => {
  // Obtém o elemento de contêiner de tarefas
  const tasksWrapper = document.getElementById("task-wrapper");

  // Obtém as 4 tarefas mais recentes
  const tasks = await findRecentTasks(4);

  // Itera sobre as tarefas e cria os cartões de tarefas
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    // Cria o cartão de tarefa vertical
    const verticalTaskCard = new VerticalTaskCard();

    // Obtém os dados da organização associada à tarefa
    let organizationData = await getOrganizationData(task.organizationId);

    // Preenche as propriedades do cartão de tarefa vertical
    verticalTaskCard.name = task.name;
    verticalTaskCard.organizationId = task.organizationId;
    verticalTaskCard.description = task.description;

    // Define o tipo da tarefa (presencial ou remoto) e formata
    if (task.type.toLowerCase() === "presencial") {
      verticalTaskCard.type =
        organizationData.city + ", " + organizationData.state;
    } else {
      verticalTaskCard.type = task.type;

      let upperCaseType = verticalTaskCard.type;

      verticalTaskCard.type =
        upperCaseType.charAt(0).toUpperCase() + upperCaseType.slice(1);
    }

    // Define a URL de destino para o candidato
    verticalTaskCard.destination = `./pages/candidatar-a-demanda/candidatar-a-demanda.html?id=${task.id}`;

    verticalTaskCard.owner = organizationData.name;

    verticalTaskCard.image = organizationData.image;

    verticalTaskCard.address =
      organizationData.street + ", " + organizationData.number;

    // Adiciona o cartão de tarefa vertical ao wrapper de tarefas
    tasksWrapper.appendChild(verticalTaskCard);

    // Cria o cartão de tarefa horizontal
    const horizontalTaskCard = new HorizontalTaskCard();

    // Preenche as propriedades do cartão de tarefa horizontal
    horizontalTaskCard.name = task.name;

    horizontalTaskCard.organizationId = task.organizationId;

    horizontalTaskCard.description = task.description;

    // Define o tipo da tarefa (presencial ou remoto) e formata
    if (task.type.toLowerCase() === "presencial") {
      horizontalTaskCard.type =
        organizationData.city + ", " + organizationData.state;
    } else {
      horizontalTaskCard.type = task.type;

      let upperCaseType = horizontalTaskCard.type;

      horizontalTaskCard.type =
        upperCaseType.charAt(0).toUpperCase() + upperCaseType.slice(1);
    }

    // Define a URL de destino para o candidato
    horizontalTaskCard.destination = `./pages/candidatar-a-demanda/candidatar-a-demanda.html?id=${task.id}`;

    horizontalTaskCard.owner = organizationData.name;

    horizontalTaskCard.image = organizationData.image;

    horizontalTaskCard.address =
      organizationData.street + ", " + organizationData.number;

    // Adiciona o cartão de tarefa horizontal ao wrapper de tarefas
    tasksWrapper.appendChild(horizontalTaskCard);
  }
};

// Chama a função para popular as demandas na página e trata erros caso ocorram
populateDemanda()
  .then()
  .catch((err) => console.log(err));
