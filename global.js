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
  window.addEventListener("blur", () => {
    document.body.style.filter = "blur(15px)";
  });

  window.addEventListener("focus", () => {
    document.body.style.filter = "none";
  });
});
