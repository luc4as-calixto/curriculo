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

document.getElementById('contato-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita o comportamento padrão de recarregar a página

  // Oculta as mensagens de erro e sucesso
  document.getElementById('success-message').classList.add('d-none');
  document.getElementById('alert-message-erronumber').classList.add('d-none');

  var whatsapp = document.getElementById('numero_contato').value;

  // Remove caracteres não numéricos
  whatsapp = whatsapp.replace(/\D/g, '');

  // Verifica se o número tem exatamente 11 dígitos
  var regex = /^[0-9]{11}$/;

  if (whatsapp === '' || !regex.test(whatsapp)) {
    document.getElementById('alert-message-erronumber').classList.remove('d-none');
  } else {

    // Oculta as mensagens de erro
    document.getElementById('alert-message-erronumber').classList.add('d-none');

    // Exibe a mensagem de sucesso
    document.getElementById('success-message').classList.remove('d-none');

    // Limpa o formulário após 2 segundos
    setTimeout(() => {
      document.getElementById('contato-form').reset();
    }, 2000);
  }
});

// Função para abrir o modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "block";
  document.body.classList.add("modal-open"); // Adiciona a classe ao body
}

// Função para fechar o modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
  document.body.classList.remove("modal-open"); // Remove a classe do body
}

// Adiciona eventos aos cards
document.getElementById("card-projeto-1").addEventListener("click", () => openModal("modal-1"));
document.getElementById("card-projeto-2").addEventListener("click", () => openModal("modal-2"));

// Adiciona eventos aos botões de fechar
document.querySelectorAll(".close").forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    const modal = closeBtn.closest(".modal");
    closeModal(modal.id);
  });
});

// Fecha o modal se o usuário clicar fora dele
window.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal")) {
    closeModal(event.target.id);
  }
});