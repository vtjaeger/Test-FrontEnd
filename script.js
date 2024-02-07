const form = document.querySelector("form");

const InputName = document.querySelector(".name-input");
const InputEmail = document.querySelector(".email-input");
const InputPassword = document.querySelector(".password-input");
const InputTelephone = document.querySelector(".telephone-input");

function cadastrar() {
    fetch("http://localhost:8080/usuarios", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST", // Alterado para POST
        body: JSON.stringify({
            name: InputName.value,
            email: InputEmail.value,
            password: InputPassword.value,
            telephone: InputTelephone.value
        })
    })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })
}

function limparDados() {
    InputName.value = "";
    InputEmail.value = "";
    InputPassword.value = "";
    InputTelephone.value = "";
}

form.addEventListener('submit', function (evento) {
    evento.preventDefault();

    cadastrar();
    limparDados();
});

// Função para fazer login
function logar() {
    fetch("http://localhost:8080/login", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            email: InputEmail.value,
            password: InputPassword.value
        })
    })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })
}
