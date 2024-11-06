function toggleOverlay() {
  // Obtém o elemento HTML com o ID 'page-overlay' e armazena na variável 'pageOverlay'.
  const pageOverlay = document.getElementById("page-overlay");

  if (
    pageOverlay.style.display === "none" ||
    pageOverlay.style.display === ""
  ) {
    // Se o elemento estiver oculto ou o estilo não estiver definido, altera o estilo 'display' para 'block'.
    pageOverlay.style.display = "block";
  } else {
    // Se o elemento já estiver visível, altera o estilo 'display' para 'none'.
    pageOverlay.style.display = "none";
  }
}
