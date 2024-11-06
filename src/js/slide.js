// Inicializa os índices para controlar as slides
let slideIndex = 1;
let slideIndex2 = 0;

// Detecta o redimensionamento da janela
$(window).resize(function () {
  // Verifica se a largura da tela é menor que 768px
  if ($("body").width() < 768) {
    showSlidesMobile(slideIndex);
  } else {
    showSlides(slideIndex);
  }
});

// Inicializa a exibição dos slides de acordo com o tamanho da tela
if ($("body").width() < 768) {
  showSlidesMobile(slideIndex);
} else {
  showSlides(slideIndex);
}

// Função que controla a navegação dos slides
function plusSlides(n) {
  if ($("body").width() < 768) {
    showSlidesMobile((slideIndex += n));
  } else {
    showSlides((slideIndex += n));
  }
}

// Função que altera o slide atual com base no clique na bolinha
function currentSlide(n) {
  if ($("body").width() < 768) {
    showSlidesMobile((slideIndex = n));
  } else {
    showSlides((slideIndex = n));
  }
}

// Função que exibe os slides em dispositivos de tamanho normal
function showSlides(n) {
  let i;
  let dots = document.getElementsByClassName("dot");
  let slides = document.getElementsByClassName("mySlides");

  // Se o índice for maior que o número de slides, volta para o primeiro
  if (n > slides.length) {
    slideIndex = 1;
  }

  // Se o índice for menor que 1, vai para o último slide
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Esconde todos os slides
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); // Remove a classe "active" das bolinhas
  }

  // Exibe o slide atual
  slides[slideIndex - 1].style.display = "block";

  // Marca a bolinha como ativa
  dots[slideIndex - 1].className += " active";
}

// Função que exibe os slides em dispositivos móveis
function showSlidesMobile(n) {
  let i;

  let slides = document.getElementsByClassName("mySlides-mobile");

  let dots = document.getElementsByClassName("dot");

  // Se o índice for maior que o número de slides, volta para o primeiro
  if (n > slides.length) {
    slideIndex = 1;
  }

  // Se o índice for menor que 1, vai para o último slide
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Esconde todos os slides móveis
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); // Remove a classe "active" das bolinhas
  }

  // Exibe o slide atual
  slides[slideIndex - 1].style.display = "block";

  // Marca a bolinha como ativa
  dots[slideIndex - 1].className += " active";
}

// Função que altera automaticamente os slides em dispositivos móveis a cada 4 segundos
function showSlidesMobile_auto() {
  let i;

  let slides = document.getElementsByClassName("mySlides-mobile");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex2++;

  // Se o índice for maior que o número de slides, volta para o primeiro
  if (slideIndex2 > slides.length) {
    slideIndex2 = 1;
  }
  // Exibe o slide atual
  slides[slideIndex2 - 1].style.display = "block";

  // Chama a função novamente a cada 4 segundos
  setTimeout(showSlidesMobile_auto, 4000);
}

// Função que altera automaticamente os slides em dispositivos maiores que 768px a cada 4 segundos
function showSlides_auto() {
  let i;

  let slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Esconde todos os slides
  }

  slideIndex2++;

  // Se o índice for maior que o número de slides, volta para o primeiro
  if (slideIndex2 > slides.length) {
    slideIndex2 = 1;
  }

  // Exibe o slide atual
  slides[slideIndex2 - 1].style.display = "block";

  // Chama a função novamente a cada 4 segundos
  setTimeout(showSlides_auto, 4000);
}

// Inicializa a mudança automática de slides em dispositivos móveis e normais
showSlides_auto();
showSlidesMobile_auto();
