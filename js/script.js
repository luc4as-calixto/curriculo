document.addEventListener('DOMContentLoaded', function () {
  // Remove a classe 'animate-text' ao elemento com a classe 'animate-text' após 3.9 segundos
  setTimeout(() => {
    document.querySelector('#nome').classList.remove('animate-text');
  }, 3900);

  // Detecta o rolar da página e aplica ou remove a classe 'scrolled' na navbar com id 'minha-navbar'
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('#minha-navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});

document.getElementById('contato-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita o comportamento padrão de recarregar a página

  // Oculta as mensagens de erro e sucesso
  document.getElementById('success-message').classList.add('d-none');
  document.getElementById('alert-message-erronumber').classList.add('d-none');

  let whatsapp = document.getElementById('numero_contato').value;

  // Remove caracteres não numéricos
  whatsapp = whatsapp.replace(/\D/g, '');

  // Verifica se o número tem exatamente 11 dígitos
  const regex = /^[0-9]{11}$/;

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
  document.body.classList.add("modal-open");
}

// Função para fechar o modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

// Adiciona eventos aos cards
document.getElementById("card-projeto-1").addEventListener("click", () => openModal("modal-1"));
document.getElementById("card-projeto-2").addEventListener("click", () => openModal("modal-2"));
document.getElementById("card-projeto-3").addEventListener("click", () => openModal("modal-3"));
document.getElementById("card-projeto-4").addEventListener("click", () => openModal("modal-4"));

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

// Executa a animação dos textos quando eles ficam visíveis na tela
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.id === "txt1") {
          entry.target.classList.add("animated", "esquerda");
        } else if (entry.target.id === "txt2") {
          entry.target.classList.add("animated", "direita");
        }
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.getElementById("txt1"));
  observer.observe(document.getElementById("txt2"));
});
