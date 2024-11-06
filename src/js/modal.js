// Função que abre o modal e popula as informações com base no item clicado
function modal(item, event) {
  // Recupera o título da tarefa e o exibe no modal
  let title = item.find(".task-name").text();

  $(".job-title").html(title);

  // Recupera a descrição da tarefa e exibe no modal
  let text = item.find(".task-description-text").text();

  $(".text").html(text);

  // Recupera o nome da ONG responsável e exibe no modal
  let NGO = item.find(".task-owner").text();

  $(".NGO").html(NGO);

  // Recupera a cidade e exibe no modal
  let city = item.find(".location-tag").text();

  $(".city").html(city);

  // Se a cidade não for "Remoto", exibe o endereço, caso contrário, limpa o campo de endereço
  if (city != "Remoto") {
    let address = item.find(".address").text();

    $(".address").html(address);
  } else {
    $(".address").html(""); // Limpa o campo de endereço quando for "Remoto"
  }

  // Exibe o modal (altera o estilo de exibição para 'block')
  $("#myModal").css("display", "block");
}

// Evento de clique para fechar o modal
$(".close").click(function () {
  // Esconde o modal alterando o estilo de exibição para 'none'
  $("#myModal").css("display", "none");
});

// Função para impedir a propagação do clique no modal para evitar que ele feche ao clicar em certos elementos
function fotoClick(event) {
  event.stopPropagation();
}
