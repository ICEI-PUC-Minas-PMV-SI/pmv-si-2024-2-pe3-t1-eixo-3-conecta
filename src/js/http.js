// Importa as constantes necessárias de outro arquivo (URLs para APIs).
import {
  LOCAL_JSON_SERVER_URL,
  CEP_API_URL,
  PRODUCTION_JSON_SERVER_URL,
} from "./constants.js";

// Importa funções para manipulação de sessões de usuários.
import { getSession, deleteSession } from "./models/session.js";

// Função principal para fazer requisições HTTP (GET, POST, PUT, DELETE, PATCH).
export async function makeRequest(url, method, data) {
  // Obtém o token de autenticação do armazenamento local.
  const token = window.localStorage.getItem("token");

  // Verifica se existe um token armazenado e se ele está expirado.
  if (token) {
    await getSession(token).then(async (session) => {
      // Se a sessão existir e o token estiver expirado, remove o token e exclui a sessão.
      if (session.length > 0 && Date.now() > session[0].expirationDate) {
        window.localStorage.removeItem("token");

        await deleteSession(session[0].id);

        alert("Sessão expirada. Faça login novamente.");

        window.location.href = "../pages/login/login.html";
      }
    });
  }

  // Converte o método HTTP para maiúsculo.
  const upperCaseMethod = method.toUpperCase();

  // Verifica se o método fornecido é válido (um dos métodos HTTP permitidos).
  if (!["GET", "POST", "PUT", "DELETE", "PATCH"].includes(upperCaseMethod)) {
    throw new Error("Method not allowed");
  }

  // Configura as opções da requisição, incluindo o cabeçalho e o corpo da requisição.
  const options = {
    method: upperCaseMethod,
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  };

  // Tenta fazer a requisição e retorna a resposta no formato JSON.
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
}

// Função para construir a URL completa para acessar uma rota da API local.
export function getURL(route) {
  return `${LOCAL_JSON_SERVER_URL}/${route}`;
}

// Função para obter dados de localização a partir de um CEP (utiliza uma API pública).
export async function getLocationData(cep) {
  // Constrói a URL de acesso à API de CEP.
  const url = `${CEP_API_URL}/${cep}/json`;

  try {
    const response = await fetch(url);

    return await response.json();
  } catch (err) {
    console.error(err);
  }
}
