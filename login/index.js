document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector("form");
    const InputEmail = document.querySelector(".email-input");
    const InputPassword = document.querySelector(".password-input");

    function login() {
        fetch("http://localhost:8080/login-teste", {
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            method : "POST",
            body: JSON.stringify({
                email: InputEmail.value,
                password: InputPassword.value
            })
        })
        .then(function(response) {
            if (response.ok) {
                window.location.href = "/home/home.html"; // Redirecionar para a página de sucesso
            } else {
                alert("Usuário não encontrado ou senha incorreta.");
            }
        })
        .catch(function(error) {
            console.error("Erro:", error);
        });
    }

    form.addEventListener('submit', function(evento) {
        evento.preventDefault();
        login();
    });
});
