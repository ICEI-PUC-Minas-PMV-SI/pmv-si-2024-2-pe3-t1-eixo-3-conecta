// Importando as funções 'getURL' e 'makeRequest' para fazer requisições HTTP e a classe 'Task' para interagir com tarefas
import { getURL, makeRequest } from "../http.js";
import { Task } from "./task.js";

export class Review {
  taskId;
  candidateId;
  comment;
  token;
  expiresAt;
  createdAt;
  status;

  // Método para criar uma nova avaliação
  async create() {
    const data = {
      taskId: this.taskId,
      candidateId: this.candidateId,
      comment: "",
      token: this.token,
      expiresAt: new Date(Date.now() + 7200000),
      status: "asked",
    };

    // Envia a requisição POST para criar a avaliação no sistema
    return await makeRequest(getURL("reviews"), "POST", data);
  }

  // Método para buscar uma avaliação por ID
  async findById(id) {
    return await makeRequest(getURL(`reviews/${id}`), "GET");
  }

  // Método para buscar todas as avaliações de uma tarefa específica
  async findAllByTaskId(taskId) {
    return await makeRequest(getURL(`reviews?taskId=${taskId}`), "GET");
  }

  // Método para buscar todas as avaliações respondidas de uma organização, baseado no ID da organização
  async findAllAnsweredByOrganizationId(organizationId) {
    // Criando uma instância de 'Task' para buscar tarefas relacionadas
    const task = new Task();

    const tasks = await task.findByOrganizationId(organizationId); // Buscando as tarefas da organização

    if (tasks.length === 0) {
      return []; // Caso não existam tarefas, retorna um array vazio
    }

    // Mapeando os IDs das tarefas e buscando as avaliações respondidas para cada tarefa
    const tasksIds = tasks.map((task) => task.id);
    const reviews = await Promise.all(
      tasksIds.map(async (id) => {
        return await makeRequest(
          getURL(`reviews?status=answered&taskId=${id}`),
          "GET"
        );
      })
    );

    return reviews.flat();
  }

  // Método para buscar todas as avaliações respondidas de um candidato, baseado no ID do candidato
  async findAllAnsweredByCandidateId(candidateId) {
    // Criando uma instância de 'Task' para buscar tarefas relacionadas
    const task = new Task();

    const tasks = await task.findByCandidateId(candidateId);

    if (tasks.length === 0) {
      return []; // Caso não existam tarefas, retorna um array vazio
    }

    // Mapeando os IDs das tarefas e buscando as avaliações respondidas para cada tarefa
    const tasksIds = tasks.map((task) => task.id);
    const reviews = await Promise.all(
      tasksIds.map(async (id) => {
        return await makeRequest(
          getURL(`reviews?status=answered&taskId=${id}`),
          "GET"
        );
      })
    );

    return reviews.flat();
  }

  // Método para buscar todas as avaliações do sistema
  async findAll() {
    return await makeRequest(getURL("reviews"), "GET");
  }

  // Método para atualizar uma avaliação pelo ID
  async updateById(id) {
    const data = {
      taskId: this.taskId,
      candidateId: this.candidateId,
      comment: this.comment,
      token: this.token,
      expiresAt: this.expiresAt,
    };

    // Envia a requisição PUT para atualizar a avaliação
    return await makeRequest(getURL(`reviews/${id}`), "PUT", data);
  }

  // Método para deletar uma avaliação pelo ID
  async deleteById(id) {
    return await makeRequest(getURL(`reviews/${id}`), "DELETE");
  }
}

// Função para buscar uma avaliação pelo token
export async function getByToken(token) {
  return await makeRequest(getURL(`reviews?token=${token}`), "GET");
}

// Função para salvar (atualizar) uma avaliação, marcando-a como respondida
export async function saveReview(id, comment) {
  const data = {
    comment: comment,
    createdAt: new Date(),
    status: "answered",
  };

  // Envia a requisição PATCH para atualizar a avaliação com o comentário e o status
  return await makeRequest(getURL(`reviews/${id}`), "PATCH", data);
}
