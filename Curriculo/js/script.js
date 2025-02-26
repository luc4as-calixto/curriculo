// Detecta o rolar da página e aplica ou remove a classe 'scrolled' na navbar com id 'minha-navbar'
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('#minha-navbar'); // Seleciona a navbar com id 'minha-navbar'
    if (window.scrollY > 50) { // Se o usuário rolou mais de 50px
      navbar.classList.add('scrolled'); // Adiciona a classe scrolled
    } else {
      navbar.classList.remove('scrolled'); // Remove a classe scrolled
    }
  });
  