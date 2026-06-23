document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("contextmenu", (evento) => {
    evento.preventDefault();
  });

  document.addEventListener("copy", (evento) => {
    evento.preventDefault();
    evento.clipboardData.setData(
      "text/plain",
      "[SISTEMA PROTEGIDO: Cópia não autorizada]",
    );
  });

  document.addEventListener("keydown", (evento) => {
    if (
      evento.ctrlKey &&
      (evento.key === "p" ||
        evento.key === "P" ||
        evento.key === "c" ||
        evento.key === "C" ||
        evento.key === "s" ||
        evento.key === "S")
    ) {
      evento.preventDefault();
    }
  });

  window.addEventListener("blur", () => {
    document.body.style.filter = "blur(15px)";
  });

  window.addEventListener("focus", () => {
    document.body.style.filter = "none";
  });
});
