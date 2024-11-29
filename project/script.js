// URL da API
const API_URL = "http://localhost:3000";

// Função para buscar todos os usuários

// Função para exibir todos os usuários
function displayUsers(users) {
  const userList = document.getElementById("user-list");
  userList.innerHTML = ""; // Limpar a lista antes de renderizar
  users.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.className = "user";
    userDiv.innerHTML = `
      <h3>${user.name}</h3>
      <p>Email: ${user.email}</p>
      <p>Celular: ${user.cellphone}</p>
    `;
    userList.appendChild(userDiv);
  });
}

// Função para exibir os detalhes de um usuário específico
function displayUserDetails(user) {
  const userDetails = document.getElementById("user-details");
  userDetails.innerHTML = `
    <div class="user">
      <h3>${user.name}</h3>
      <p>Email: ${user.email}</p>
      <p>Celular: ${user.cellphone}</p>
    </div>
  `;
}

// Chamar a função para buscar todos os usuários ao carregar a página
fetchUsers();
