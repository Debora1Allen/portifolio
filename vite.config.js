import { defineConfig } from "vite";

export default defineConfig({
  base: "/portifolio/",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        assombracoes: "/leia-assombracoes/assombracoes.html",
        literario: "/portifolio-literario/literario.html",
        contato: "/contato/contato.html",
        livros: "/livros/livros.html",
      },
    },
  },
});
