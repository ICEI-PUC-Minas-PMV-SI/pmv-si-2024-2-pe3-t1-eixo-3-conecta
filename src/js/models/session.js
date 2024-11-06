import { getURL, makeRequest } from "../http.js";

// Define a classe 'Session' para representar uma sessão de usuário.
export class Session {
  id;
  userId;

  token;

  active;
  expirationDate;

  userType;

  // Construtor da classe Session: inicializa a sessão com o ID do usuário e o tipo de usuário.
  constructor(userId, userType) {
    this.userId = userId;

    this.token = crypto.randomUUID();

    this.expirationDate = new Date(Date.now() + 7200000);

    this.active = true;

    this.userType = userType;
  }

  // Método para criar uma nova sessão e armazená-la no servidor.
  async create() {
    // Cria o objeto de dados da sessão.
    const data = {
      userId: this.userId,

      token: this.token,

      expirationDate: this.expirationDate,

      active: this.active,

      userType: this.userType,
    };

    // Faz uma requisição POST para criar a sessão no servidor.
    await makeRequest(getURL("sessions"), "POST", data);

    // Após criar a sessão, faz uma requisição GET para obter a sessão criada e retorná-la.
    return makeRequest(getURL(`sessions?token=${this.token}`), "GET");
  }
}

// Função para excluir uma sessão com base no token da sessão.
export async function deleteSession(tokenId) {
  // Faz uma requisição DELETE para remover a sessão do servidor.
  return await makeRequest(getURL(`sessions/${tokenId}`), "DELETE");
}

// Função para obter uma sessão com base no token fornecido.
export async function getSession(token) {
  // Define as opções para a requisição GET.
  const options = {
    method: "GET",
    headers: {
      // Define que o conteúdo será JSON.
      "Content-Type": "application/json",
    },
    // Não há corpo para a requisição GET.
    body: undefined,
  };

  try {
    // Faz uma requisição GET para buscar a sessão com o token fornecido.
    const response = await fetch(getURL(`sessions?token=${token}`), options);

    // Retorna a resposta da requisição em formato JSON.
    return await response.json();
  } catch (err) {
    console.error(err);
  }
}
