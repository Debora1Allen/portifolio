import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

document.addEventListener("DOMContentLoaded", () => {
  let arquivoDeContos = [];
  const postGrid = document.getElementById("post-grid");

  const modalOverlay = document.getElementById("reader-modal");
  const modalCloseBtn = document.getElementById("close-modal");
  const muteBtn = document.getElementById("mute-btn");
  const modalTitle = document.getElementById("modal-title");
  const modalMeta = document.getElementById("modal-meta");
  const modalBody = document.getElementById("modal-body");

  let reprodutorDeAudio = new Audio();
  reprodutorDeAudio.loop = true;

  async function descriptografarRegistros() {
    try {
      const { data, error } = await supabase
        .from("contos")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      arquivoDeContos = data;
      renderizarContos();
    } catch (erro) {
      console.error(
        "[ERRO DO SISTEMA] Falha ao acessar arquivos restritos.",
        erro,
      );
      postGrid.innerHTML =
        "<p class='glitch-title' style='font-size: 1.2rem;'>ERRO: Conexão com o servidor principal perdida.</p>";
    }
  }

  function renderizarContos(filtro = "todos") {
    postGrid.innerHTML = "";

    if (!arquivoDeContos || arquivoDeContos.length === 0) {
      postGrid.innerHTML = "<p>Nenhum registro encontrado.</p>";
      return;
    }

    arquivoDeContos.forEach((conto) => {
      if (filtro === "todos" || conto.categoria === filtro) {
        const article = document.createElement("article");
        article.className = "post-card";
        article.innerHTML = `
          <div class="post-meta">${conto.meta}</div>
          <h2 class="post-title">${conto.titulo}</h2>
          <p class="post-excerpt">${conto.resumo}</p>
          <button class="read-btn" data-id="${conto.id}">Ler Relatório</button>
        `;
        postGrid.appendChild(article);
      }
    });

    adicionarEventosDeLeitura();
  }

  function adicionarEventosDeLeitura() {
    const readBtns = document.querySelectorAll(".read-btn");

    readBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const contoId = btn.getAttribute("data-id");
        const conto = arquivoDeContos.find((c) => c.id === contoId);

        if (conto) {
          modalTitle.innerText = conto.titulo;
          modalMeta.innerText = conto.meta;
          modalBody.innerHTML = conto.conteudo;

          reprodutorDeAudio.m;
          muteBtn.innerText = "[ ÁUDIO: LIGADO ]";
          muteBtn.classList.remove("muted");

          if (conto.audio) {
            muteBtn.style.display = "block";
            reprodutorDeAudio.src = conto.audio;
            reprodutorDeAudio.volume = 0.5;
            reprodutorDeAudio.play().catch(() => {
              reprodutorDeAudio.muted = true;
              muteBtn.innerText = "[ ÁUDIO: BLOQUEADO - CLIQUE ]";
              muteBtn.classList.add("muted");
              reprodutorDeAudio.play();
            });
          } else {
            muteBtn.style.display = "none";
          }

          modalOverlay.removeAttribute("hidden");
          document.body.style.overflow = "hidden";
        }
      });
    });
  }

  function fecharModal() {
    modalOverlay.setAttribute("hidden", "true");
    document.body.style.overflow = "auto";
    reprodutorDeAudio.pause();
    reprodutorDeAudio.currentTime = 0;
  }

  muteBtn.addEventListener("click", () => {
    reprodutorDeAudio.muted = !reprodutorDeAudio.muted;
    if (reprodutorDeAudio.muted) {
      muteBtn.innerText = "[ ÁUDIO: MUDO ]";
      muteBtn.classList.add("muted");
    } else {
      muteBtn.innerText = "[ ÁUDIO: LIGADO ]";
      muteBtn.classList.remove("muted");
    }
  });

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filtro = btn.getAttribute("data-filter");
      renderizarContos(filtro);
    });
  });

  modalCloseBtn.addEventListener("click", fecharModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) fecharModal();
  });

  descriptografarRegistros();
  document.addEventListener("contextmenu", (evento) => {
    evento.preventDefault();
  });

  document.addEventListener("copy", (evento) => {
    evento.preventDefault();
    evento.clipboardData.setData(
      "text/plain",
      "[ACESSO NEGADO: Conteúdo criptografado e protegido]",
    );
  });
});
