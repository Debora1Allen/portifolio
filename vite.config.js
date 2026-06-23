import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/portifolio/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        assombracoes: "/pages/leia-assombracoes/index.html",
        literario: "/pages/portifolio-literario/index.html",
        contato: "/pages/contato/index.html",
        livros: "/pages/livros/index.html",
      },
    },
  },
});
