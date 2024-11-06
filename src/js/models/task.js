import { makeRequest, getURL } from "../http.js";

// Definição da classe 'Task', que representa uma tarefa.
export class Task {
  organizationId;

  name;
  description;

  createdAt;
  status;

  type;

  candidates;

  // Método para criar uma nova tarefa.
  async create() {
    const data = {
      organizationId: this.organizationId,

      name: this.name,
      description: this.description,

      createdAt: new Date(),

      status: "aberta",
      type: this.type,

      searchData: this.name + " " + this.description,

      candidates: [],
    };

    // Chama a função 'makeRequest' para enviar a tarefa para o servidor.
    return await makeRequest(getURL("tasks"), "POST", data);
  }

  // Método para buscar tarefas por ID da organização.
  async findByOrganizationId(organizationId) {
    return await makeRequest(
      getURL(`tasks?organizationId=${organizationId}`),
      "GET"
    );
  }

  // Método para buscar tarefas por ID de candidato.
  async findByCandidateId(candidateId) {
    // Chama o servidor para obter todas as tarefas e filtra localmente aquelas que contêm o candidato.
    const tasks = await makeRequest(getURL(`tasks`), "GET");
    return tasks.filter((task) => task.candidates.includes(candidateId));
  }

  // Método para buscar todas as tarefas.
  async findAll() {
    return await makeRequest(getURL("tasks"), "GET");
  }

  // Método para buscar tarefas filtradas pelo status 'aberta' e o tipo.
  async findAllFilteredByOpenStatus(filterBy) {
    if (filterBy === "remote") {
      return await makeRequest(
        getURL("tasks?status=aberta&type=remoto"),
        "GET"
      );
    }
    if (filterBy === "on-site") {
      return await makeRequest(
        getURL("tasks?status=aberta&type=presencial"),
        "GET"
      );
    }
    return await makeRequest(getURL("tasks?status=aberta"), "GET");
  }

  // Método para buscar tarefas filtradas pelo tipo (remoto ou presencial).
  async findAllFilteredByType(filterBy) {
    if (filterBy === "remote") {
      return await makeRequest(getURL("tasks?type=remoto"), "GET");
    }
    if (filterBy === "on-site") {
      return await makeRequest(getURL("tasks?type=presencial"), "GET");
    }
    return await makeRequest(getURL("tasks"), "GET");
  }

  // Método para buscar tarefas filtradas pelo status.
  async findAllFilteredByStatus(filterBy) {
    if (filterBy === "remote") {
      return await makeRequest(getURL("tasks?status=aberta"), "GET");
    }
    if (filterBy === "on-site") {
      return await makeRequest(getURL("tasks?status=finalizada"), "GET");
    }
    return await makeRequest(getURL("tasks"), "GET");
  }

  // Método para atualizar uma tarefa pelo seu ID.
  async updateById(id) {
    const data = {
      organizationId: this.organizationId,
      name: this.name,
      description: this.description,
      createdAt: this.createdAt,
      status: this.status,
      type: this.type,
      searchData: this.name + " " + this.description,
      candidates: this.candidates,
    };

    return await makeRequest(getURL(`tasks/${id}`), "PUT", data);
  }

  // Método para atualizar o status de uma tarefa pelo seu ID.
  async updateStatusById(id, newStatus) {
    const data = {
      status: newStatus, // Novo status a ser atribuído.
    };

    return await makeRequest(getURL(`tasks/${id}`), "PATCH", data);
  }

  // Método para atualizar os candidatos de uma tarefa pelo seu ID.
  async updateCandidatesById(id, candidates) {
    const data = {
      candidates, // Nova lista de candidatos.
    };

    return await makeRequest(getURL(`tasks/${id}`), "PATCH", data);
  }

  // Método para excluir uma tarefa pelo seu ID.
  async deleteById(id) {
    return await makeRequest(getURL(`tasks/${id}`), "DELETE");
  }
}

// Função para buscar uma tarefa específica pelo ID (funcionalidade redundante com 'findById' dentro da classe).
export async function findById(id) {
  return await makeRequest(getURL(`tasks/${id}`), "GET");
}

// Função para buscar as tarefas mais recentes, com um limite definido pelo parâmetro 'limit'.
export async function findRecentTasks(limit) {
  return await makeRequest(
    getURL(`tasks?status=aberta&_sort=createdAt&_order=desc&_limit=${limit}`),
    "GET"
  );
}
