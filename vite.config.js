import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/portifolio/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        assombracoes: resolve(__dirname, "/pages/leia-assombracoes/index.html"),
        literario:  resolve(__dirname,"/pages/portifolio-literario/index.html"),
        contato:  resolve(__dirname,"/pages/contato/index.html"),
        livros:  resolve(__dirname,"/pages/livros/index.html"),
      },
    },
  },
});
