# 🔎 GitHub User Search

## Descrição do Projeto
O **GitHub User Search** é uma aplicação web que permite buscar usuários do GitHub e exibir informações básicas de forma dinâmica e responsiva.  
Ela consome a **API pública do GitHub** e mostra:

- Foto de perfil  
- Nome completo  
- Username  
- Bio  
- Link para o perfil no GitHub  

Este projeto é ideal para iniciantes em JavaScript, consumo de APIs e manipulação do DOM.

---

## Tecnologias Utilizadas

- **HTML5** – Estrutura da página  
- **CSS3** – Estilização moderna  
- **JavaScript (Vanilla JS)** – Requisições à API e manipulação do DOM  
- **API GitHub** – Fonte dos dados dos usuários  

---

## Funcionalidades

1. Digitar o **username** do GitHub no campo de busca.  
2. Clicar em **Buscar** ou pressionar **Enter**.  
3. Exibir dinamicamente:
   - Foto do usuário  
   - Nome e username  
   - Bio  
   - Link para o perfil  
4. Mensagens de erro:
   - Campo vazio → aviso “Digite um username!”  
   - Usuário não encontrado → aviso “Usuário não encontrado”  

---

## Responsividade

O projeto foi desenvolvido para se adaptar a diferentes tamanhos de tela, garantindo boa experiência em **celulares, tablets e desktops**.  

### Ajustes principais:
- **Celulares (até 480px de largura):**
  - Input e botão empilhados verticalmente.
  - Elementos ocupam 100% da largura disponível.
  - Card do usuário com padding reduzido e altura ajustável.
  - Foto do usuário menor para caber na tela.
  - Texto e botões menores para melhor visualização.

- **Tablets (até 768px de largura):**
  - Container ocupa cerca de 70% da largura da tela.
  - Input ocupa 75% da largura, botão permanece ao lado.
  - Layout mantém proporções e legibilidade.

### Tecnologias utilizadas:
- **Media Queries do CSS** para detectar largura da tela.
- Ajuste de **flexbox e largura dos elementos**.
- Redução de **font-size e padding** conforme necessário.

> Essas adaptações garantem que o usuário consiga navegar, digitar e visualizar os resultados sem precisar de zoom ou rolagem horizontal.

---

## Como Usar

1. Clone ou baixe o projeto:
```bash
git clone https://github.com/seu-usuario/github-user-search.git
Abra o arquivo index.html em seu navegador.

Digite o username do GitHub que deseja buscar.

Clique em Buscar ou pressione Enter.

Veja os dados do usuário exibidos na tela.

Autor

**Francisco Kauan** – [https://github.com/Fkauan](https://github.com/dashboard)
Portfólio de projeto para aprendizado e apresentação de habilidades em front-end.
