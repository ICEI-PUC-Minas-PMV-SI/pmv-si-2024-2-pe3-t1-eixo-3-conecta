import { getSession } from '../../js/models/session.js';
import { Candidate } from "../../js/models/candidate.js";

document.getElementById("submit-button").addEventListener("click", handleCreateCandidateForm);

let isLogged = false;
let userId = null;

window.addEventListener("load", async () => {
    const token = window.localStorage.getItem("token")
    const session = await getSession(token).then(session => session[0]);

    if(session) isLogged = true;

    const candidate = new Candidate();

    await candidate.findById(session.userId).then(user => {
        document.getElementById("title").innerText = "editar perfil";

        document.getElementById("cpf").value = user.cpf;
        document.getElementById("sobre").value = user.about;
        document.getElementById("nome").value = user.name;
        document.getElementById("email").value = user.email;
        document.getElementById("phone").value = user.phone;

        document.getElementById("submit-button").value = "Salvar";
    });
});


function formatInput(input, format) {
    const value = input.value.replace(/\D/g, "");
    let formattedValue = "";

    for (let i = 0, j = 0; i < format.length && j < value.length; i++) {
        if(format[i] === "#") {
            formattedValue += value[j++];
        } else {
            formattedValue += format[i];
        }
    }

    input.value = formattedValue;
}

function addInputFormatListener(inputId, format) {
    const input = document.getElementById(inputId);

    input.addEventListener("input", () => {
        formatInput(input, format);
    });

    input.addEventListener("keydown", (event) => {
        if(isNumericInput(event) || isSpecialKey(event)) {
            return;
        }
        event.preventDefault();
    });
}

function isNumericInput(event) {
    return /\d/.test(event.key);
}

function isSpecialKey(event) {
    return (
        event.key === "Backspace" ||
        event.key === "Delete" ||
        event.key === "ArrowLeft" ||
        event.key === "ArrowRight" ||
        event.key === "Tab" ||
        (event.ctrlKey && event.key === "v") ||
        (event.ctrlKey && event.key === "V")
    );
}

addInputFormatListener("cpf", "###.###.###-##");
addInputFormatListener("phone", "(##) #####-####");

function validateCPF(input) {
    if(input.length <= 0) {
        alert("CPF não pode ser vazio");
        return;
    }

    const cpf = input.replace(/\D/g, "");
    if(cpf.length !== 11) {
        alert("CPF inválido");
        return;
    }

    return cpf;
}

function validateEmail(input) {
    if(input.length <= 0) {
        alert("Email não pode ser vazio");
        return;
    }

    const email = input.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)) {
        alert("Email inválido");
        return;
    }

    return email;
}

function validatePassword(input, inputConfirmation) {
    if(input.length <= 0) {
        alert("Senha não pode ser vazia");
        return;
    }

    if(input.length <= 6) {
        alert("Senha deve ter mais de 6 caracteres");
        return;
    }

    if(input !== inputConfirmation) {
        alert("Senhas não conferem");
        return;
    }

    return input;
}

function validatePhone(input) {
    if(input.length <= 0) {
        alert("Telefone não pode ser vazio");
        return;
    }

    const phone = input.replace(/\D/g, "");

    if(phone.length !== 11) {
        alert("Telefone inválido, insira uma número com 11 dígitos");
        return;
    }

    return phone;
}

async function handleCreateCandidateForm(event) {
    event.preventDefault();

    const cpfInput = document.getElementById("cpf").value;
    const about = document.getElementById("sobre").value;
    const name = document.getElementById("nome").value;
    const emailInput = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const passwordInput = document.getElementById("senha").value;
    const passwordConfirmation = document.getElementById("confirmar-senha").value;

    const cpf = validateCPF(cpfInput);

    if(!cpf) return;

    if(about.length <= 0) {
        alert("Sobre não pode ser vazio");
        return;
    }

    if(name.length <= 0) {
        alert("Nome não pode ser vazio");
        return;
    }

    const email = validateEmail(emailInput);

    if(!email) return;

    const phoneValidated = validatePhone(phone);

    if(!phoneValidated) return;

    const password = validatePassword(passwordInput, passwordConfirmation);

    if(!password) return;

    const data = {
        cpf,
        about,
        name,
        email,
        password,
        phone,
    };

    const candidate = new Candidate();
    candidate.cpf = data.cpf;
    candidate.name = data.name;
    candidate.email = data.email;
    candidate.phone = data.phone;
    candidate.profile = data.profile;
    candidate.status = data.status;
    candidate.about = data.about;
    candidate.password = data.password;

    try {
        if(isLogged) {
            await candidate.updateById(userId);
            alert("Perfil editado com sucesso!");
            window.location.href = "../pagina-do-voluntario/pagina-do-voluntario.html";
        } else {
            await candidate.create();
            alert("Cadastro realizado com sucesso!");
            window.location.href = "../login/login.html";
        }
    } catch (error) {
        alert(error.message);
        window.location.href = "cadastrar-voluntario.html";
    }
}
