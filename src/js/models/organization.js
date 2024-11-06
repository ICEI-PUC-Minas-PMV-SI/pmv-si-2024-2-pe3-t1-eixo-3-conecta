// Importação de funções auxiliares
import { getURL, makeRequest } from "../http.js";
import { hashPassword } from "../utils.js";

// Classe Address - Representa o endereço de uma organização
export class Address {
  cep; // CEP do endereço

  street; // Nome da rua

  buildingNumber; // Número do prédio

  city; // Cidade

  state; // Estado

  // Construtor para inicializar o endereço
  constructor(cep, street, buildingNumber, city, state) {
    this.cep = cep;

    this.street = street;

    this.buildingNumber = buildingNumber;

    this.city = city;

    this.state = state;
  }
}

// Classe Organization - Representa uma organização
export class Organization {
  id;
  name;
  about;
  email;
  image;
  cnpj;
  phoneNumber;
  password;
  address;
  facebook;
  instagram;
  twitter;

  // Método para criar uma nova organização
  async create() {
    // Preparação dos dados para envio ao servidor
    const data = {
      name: this.name,
      about: this.about,
      email: this.email,
      image: this.image,
      cnpj: this.cnpj,
      phone: this.phoneNumber,
      password: await hashPassword(this.password), // Criptografa a senha
      cep: this.address.cep,
      street: this.address.street,
      number: this.address.buildingNumber,
      city: this.address.city,
      state: this.address.state,
      facebook: this.facebook,
      instagram: this.instagram,
      twitter: this.twitter,
    };

    // Verifica se o CNPJ já está cadastrado
    const searchCNPJ = await makeRequest(
      getURL(`organizations?cnpj=${this.cnpj}`),
      "GET"
    );
    if (searchCNPJ.length > 0) throw new Error("CNPJ já cadastrado");

    // Verifica se o email já está cadastrado
    const searchEmail = await makeRequest(
      getURL(`organizations?email=${this.email}`),
      "GET"
    );
    if (searchEmail.length > 0) throw new Error("Email já cadastrado");

    // Cria a organização no banco de dados
    return await makeRequest(getURL("organizations"), "POST", data);
  }

  // Método para buscar uma organização pelo ID
  async findById(id) {
    return await makeRequest(getURL(`organizations/${id}`), "GET");
  }

  // Método para buscar uma organização pelo email
  async findByEmail(email) {
    return await makeRequest(getURL(`organizations?email=${email}`), "GET");
  }

  // Método para atualizar os dados de uma organização pelo ID
  async updateById(id) {
    // Preparação dos dados para atualização
    const data = {
      name: this.name,

      about: this.about,

      email: this.email,

      image: this.image,

      cnpj: this.cnpj,

      phone: this.phoneNumber,

      password: await hashPassword(this.password),

      cep: this.address.cep,

      street: this.address.street,

      number: this.address.buildingNumber,

      city: this.address.city,

      state: this.address.state,

      facebook: this.facebook,

      instagram: this.instagram,

      twitter: this.twitter,
    };

    // Atualiza os dados da organização no banco de dados
    return await makeRequest(getURL(`organizations/${id}`), "PUT", data);
  }

  // Método para excluir uma organização pelo ID
  async deleteById(id) {
    return await makeRequest(getURL(`organizations/${id}`), "DELETE");
  }

  // Método para alterar a senha de uma organização pelo ID
  async changePasswordById(id, newPassword) {
    const newHashedPassword = await hashPassword(newPassword);

    const data = {
      password: newHashedPassword,
    };

    // Atualiza a senha da organização
    return await makeRequest(getURL(`organizations/${id}`), "PATCH", data);
  }
}

// Função auxiliar para buscar uma organização pelo ID
export async function findById(id) {
  return await makeRequest(getURL(`organizations/${id}`), "GET");
}

// Função auxiliar para buscar uma organização pelo email
export async function findByEmail(email) {
  return await makeRequest(getURL(`organizations?email=${email}`), "GET");
}
