document.addEventListener("DOMContentLoaded", function() {
    const userList = document.getElementById("user-list");

    fetch("http://localhost:8080/usuarios")
        .then(response => response.json())
        .then(data => {
            data.forEach(user => {
                const listItem = document.createElement("li");
                listItem.textContent = `Nome: ${user.name}, Email: ${user.email}, Telefone: ${user.telephone}`;
                userList.appendChild(listItem);
            });
        })
        .catch(error => console.error("Erro:", error));
});
