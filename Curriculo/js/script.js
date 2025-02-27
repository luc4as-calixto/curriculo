document.addEventListener('DOMContentLoaded', function () {

  // Remove a classe 'animate-text' ao elemento com a classe 'animate-text' após 5 segundos
  setTimeout(() => {
    document.querySelector('#nome').classList.remove('animate-text');
  }, 3900);

  // Detecta o rolar da página e aplica ou remove a classe 'scrolled' na navbar com id 'minha-navbar'
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('#minha-navbar'); // Seleciona a navbar com id 'minha-navbar'
    if (window.scrollY > 0) { // Se o usuário rolou mais de 0px
      navbar.classList.add('scrolled'); // Adiciona a classe scrolled
    } else {
      navbar.classList.remove('scrolled'); // Remove a classe scrolled
    }
  });
});