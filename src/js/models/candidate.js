// Importação de funções auxiliares
import { makeRequest, getURL } from "../http.js";
import { hashPassword } from "../utils.js";

// Definição da classe Candidate
export class Candidate {
  name; // Nome do candidato

  about; // Descrição sobre o candidato

  email; // Email do candidato

  cpf; // CPF do candidato

  phone; // Telefone do candidato

  password; // Senha do candidato

  // Método para criar um novo candidato
  async create() {
    // Criação do objeto de dados do candidato
    const data = {
      name: this.name,

      email: this.email,

      about: this.about,

      cpf: this.cpf,

      phone: this.phone,

      password: await hashPassword(this.password),
    };

    // Verifica se o CPF já está cadastrado
    const searchCPF = await makeRequest(
      getURL(`candidates?cpf=${this.cpf}`),
      "GET"
    );
    if (searchCPF.length > 0) throw new Error("CPF já cadastrado");

    // Verifica se o email já está cadastrado
    const searchEmail = await makeRequest(
      getURL(`candidates?email=${this.email}`),
      "GET"
    );
    if (searchEmail.length > 0) throw new Error("Email já cadastrado");

    // Cria o candidato no banco de dados
    return await makeRequest(getURL("candidates"), "POST", data);
  }

  // Método para buscar um candidato por ID
  async findById(id) {
    return await makeRequest(getURL(`candidates/${id}`), "GET");
  }

  // Método para buscar um candidato por email
  async findByEmail(email) {
    return await makeRequest(getURL(`candidates?email=${email}`), "GET");
  }

  // Método para buscar um candidato por CPF
  async findByCpf(cpf) {
    return await makeRequest(getURL(`candidates?cpf=${cpf}`), "GET");
  }

  // Método para buscar candidatos por status
  async findByStatus(status) {
    return await makeRequest(getURL(`candidates?status=${status}`), "GET");
  }

  // Método para buscar candidatos por ID da tarefa
  async findByTaskId(taskId) {
    return await makeRequest(getURL(`candidates?taskId=${taskId}`), "GET");
  }

  // Método para buscar todos os candidatos
  async findAll() {
    return await makeRequest(getURL("candidates"), "GET");
  }

  // Método para atualizar os dados de um candidato pelo ID
  async updateById(id) {
    // Preparação dos dados para atualização
    const data = {
      taskId: this.taskId,

      name: this.name,

      email: this.email,

      cpf: this.cpf,

      phone: this.phone,

      profile: this.profile,

      status: this.status,

      timestamp: this.timestamp,
    };

    // Atualiza os dados do candidato
    return await makeRequest(getURL(`candidates/${id}`), "PUT", data);
  }

  // Método para atualizar o status de um candidato pelo ID
  async updateStatusById(id, newStatus) {
    const data = {
      status: newStatus, // Novo status a ser atribuído
    };

    // Atualiza o status do candidato
    return await makeRequest(getURL(`candidates/${id}`), "PATCH", data);
  }

  // Método para excluir um candidato pelo ID
  async deleteById(id) {
    return await makeRequest(getURL(`candidates/${id}`), "DELETE");
  }
}
