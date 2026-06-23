import { defineConfig } from "vite";

export default defineConfig({
  base: "/portifolio/",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        assombracoes: "assombracoes.html",
        literario: "literario.html",
        contato: "contato.html",
        livros: "livros.html",
      },
    },
  },
});
