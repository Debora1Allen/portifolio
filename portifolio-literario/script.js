const dadosPortfolio = {
  obrasPublicadas: [
    {
      titulo: "Canibal Apaixonado",
      sinopse:
        "Ele não queria ser um monstro, queria ser outra pessoa Professor de crianças, vida morna, solidão de apartamento. Numa noite de show de rock, ele sente uma pulsão que não reconhece e a primeira mordida muda tudo. Agora ele mata. Ele come. Ele coleciona dentro de si as pessoas que gostaria de ter sido. Canibal Apaixonado é um romance de terror psicológico sobre um homem que confunde amor com devoração, e que no fundo só quer deixar de ser quem é, mesmo que precise destruir os outros para isso.",
      tags: ["Terror", "Horror", "Realismo Fantástico"],
      link: "../livros/livros.html",
    },
  ],
  participacoes: [
    {
      titulo: "Penitente",
      obra: "Coletânea: O Vão de Almas",
      status: "Publicado",
      editora: "Coletivo Literário Aspas Duplas e Editora Sete Palmos",
      tags: ["Terror", "Horror", "Cyber-horror"],
    },
    {
      titulo: "Zona Morta dos 99%",
      obra: "Antologia: Mistérios Urbanos",
      status: "Publicado",
      editora: "Editora Independentes",
      tags: ["Horror Sci-fi", "Cyber-horror"],
    },
    {
      titulo: "Besta sem Nome (Ainda a Vejo Aqui)",
      obra: "Antologia: Reflexos do Coração",
      status: "Publicado",
      editora: "Editora Holandas",
      tags: ["Prosa Poética", "Gótico-Visceral"],
    },
    {
      titulo: "Cicatriz na Pelve",
      obra: "Antologia: Um Corpo Livre (Poema)",
      status: "Publicado",
      editora: "Gigas Nexus",
      tags: ["Poema Lírico-Engajado", "Gótico-Visceral"],
    },
  ],
  projetosEmAndamento: [
    {
      titulo: "Amaldiçoado (Título Provisório)",
      formato: "Romance",
      status: " Em desenvolvimento (30%).",
      sinopse:
        " Um desenvolvedor atormentado pelo luto, cooptado para um projeto obscuro, vê-se em um dilema moral diante de um conhecimento tecnológico capaz de modificar até os parâmetros mais profundos da realidade. Entre a culpa e o desejo visceral de recuperar o que foi perdido, a narrativa mergulha em um fluxo de consciência solitário e obsessivo, onde o horror sci-fi se funde à fragilidade da sanidade humana nas ruas cinzentas de uma metrópole indiferente.",
      tags: ["Ficção Científica", "Cyber-horror", "Terror/Horror Psicológico"],
    },
  ],
};

document.addEventListener("DOMContentLoaded", () => {
  const gerarTags = (tags) =>
    tags.map((tag) => `<span class="tag">${tag}</span>`).join("");

  const obrasGrid = document.querySelector("#obras-publicadas .card-grid");
  if (obrasGrid) {
    obrasGrid.innerHTML = dadosPortfolio.obrasPublicadas
      .map(
        (item) => `
            <article class="project-card">
                <h3 class="project-title">${item.titulo}</h3>
                <p class="project-synopsis"><b>Sinopse:</b> ${item.sinopse}</p>
                <div class="tags">${gerarTags(item.tags)}</div>
                ${item.link ? `<a href="${item.link}" class="project-btn">Saber mais</a>` : ""}
            </article>
        `,
      )
      .join("");
  }
  const participacoesGrid = document.querySelector("#participacoes .card-grid");
  if (participacoesGrid) {
    participacoesGrid.innerHTML = dadosPortfolio.participacoes
      .map(
        (item) => `
            <article class="project-card">
                <h3 class="project-title">${item.titulo}</h3>
                <ul class="project-details">
                    <li><strong>Obra:</strong> ${item.obra}</li>
                    <li><strong>Status:</strong> ${item.status}</li>
                    <li><strong>Editora:</strong> ${item.editora}</li>
                </ul>
                <div class="tags">${gerarTags(item.tags)}</div>
            </article>
        `,
      )
      .join("");
  }

  const andamentoGrid = document.querySelector(
    "#projetos-em-andamento .card-grid",
  );
  if (andamentoGrid) {
    andamentoGrid.innerHTML = dadosPortfolio.projetosEmAndamento
      .map(
        (item) => `
            <article class="project-card in-progress">
                <h3 class="project-title">${item.titulo}</h3>
                <ul class="project-details">
                    <li><strong>Formato:</strong> ${item.formato}</li>
                    <li><strong>Status:</strong> ${item.status}</li>
                </ul>
                <p class="project-synopsis"><b>Premissa:</b> ${item.sinopse}</p>
                <div class="tags">${gerarTags(item.tags)}</div>
            </article>
        `,
      )
      .join("");
  }
});
