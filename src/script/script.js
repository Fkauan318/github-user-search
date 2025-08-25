// Seleciona os elementos do HTML
const input = document.getElementById("username");
const botao = document.getElementById("btn-buscar");
const resultado = document.getElementById("resultado");

// Função que busca o usuário no GitHub
async function buscarUsuario() {
  const username = input.value; // pega o valor do input

  // Se o input estiver vazio, mostra aviso
  if (username.trim() === "") {
    resultado.innerHTML = "<p>⚠️ Digite um username!</p>";
    return;
  }

  try {
    // Faz a requisição para a API do GitHub
    const resposta = await fetch(`https://api.github.com/users/${username}`);

    // Se o usuário não for encontrado, dispara erro
    if (!resposta.ok) {
      throw new Error("Usuário não encontrado");
    }

    // Converte resposta para JSON
    const user = await resposta.json();

    // Monta o card com os dados do usuário
    resultado.innerHTML = `
      <img src="${user.avatar_url}" alt="Foto de ${user.login}">
      <h2>${user.name || "Sem nome disponível"}</h2>
      <p>@${user.login}</p>
      <p>${user.bio || "Sem bio cadastrada."}</p>
      <a href="${user.html_url}" target="_blank">Ver perfil</a>
    `;
  } catch (erro) {
    // Mostra mensagem de erro
    resultado.innerHTML = `<p style="color:red;">❌ ${erro.message}</p>`;
  }
}

// Adiciona evento de clique no botão
botao.addEventListener("click", buscarUsuario);

// Permite apertar Enter para buscar também
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    buscarUsuario();
  }
});
