import { defineConfig } from "vite";

export default defineConfig({
  base: "/portifolio/",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        assombracoes: "/pages/leia-assombracoes/index.html",
        literario: "/pages/portifolio-literario/index.html",
        contato: "/pages/contato/index.html",
        livros: "/pages/livros/index.html",
      },
    },
  },
});
