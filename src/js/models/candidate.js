import { getURL, makeRequest } from "../http.js";
import { hashPassword } from "../utils.js";
import { Task } from "./task.js";

export class Candidate {
  name;
  about;
  email;
  cpf;
  phone;
  password;

  async create() {
    const data = {
      name: this.name,
      email: this.email,
      about: this.about,
      cpf: this.cpf,
      phone: this.phone,
      password: await hashPassword(this.password),
    };

    const searchCPF = await makeRequest(
      getURL(`candidates?cpf=${this.cpf}`),
      "GET"
    );
    if (searchCPF.length > 0) throw new Error("CPF já cadastrado");

    const searchEmail = await makeRequest(
      getURL(`candidates?email=${this.email}`),
      "GET"
    );
    if (searchEmail.length > 0) throw new Error("Email já cadastrado");

    return await makeRequest(getURL("candidates"), "POST", data);
  }

  async findById(id) {
    return await makeRequest(getURL(`candidates/${id}`), "GET");
  }

  async findByEmail(email) {
    return await makeRequest(getURL(`candidates?email=${email}`), "GET");
  }

  async findByCpf(cpf) {
    return await makeRequest(getURL(`candidates?cpf=${cpf}`), "GET");
  }
  async findByStatus(status) {
    return await makeRequest(getURL(`candidates?status=${status}`), "GET");
  }
  async findByTaskId(taskId) {
    const task = new Task();
    const taskData = await task.findById(taskId);
    if (!taskData) return [];
    const candidates = taskData.candidates.map(async (candidateId) => {
      return await this.findById(candidateId);
    });
    return candidates;
  }
  async findAll() {
    return await makeRequest(getURL("candidates"), "GET");
  }

  async updateById(id) {
    const data = {
      cpf: this.cpf,
      name: this.name,
      email: this.email,
      phone: this.phone,
      about: this.about,
      password: await hashPassword(this.password),
    };

    return await makeRequest(getURL(`candidates/${id}`), "PUT", data);
  }

  async updateStatusById(id, newStatus) {
    const data = {
      status: newStatus,
    };

    return await makeRequest(getURL(`candidates/${id}`), "PATCH", data);
  }

  async deleteById(id) {
    return await makeRequest(getURL(`candidates/${id}`), "DELETE");
  }
}
