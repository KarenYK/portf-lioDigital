// Tela de carregamento
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.loading-screen').classList.add('oculto');
    }, 1000);
});

// Smooth scroll para navegação
document.querySelectorAll('.menuLink').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Botão voltar ao topo
window.addEventListener('scroll', function() {
    const botaoTopo = document.querySelector('.voltar-topo');
    if (window.scrollY > 300) {
        botaoTopo.classList.add('visivel');
    } else {
        botaoTopo.classList.remove('visivel');
    }
});

document.querySelector('.voltar-topo').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Função para abrir modais dos projetos
document.querySelectorAll('.btn-saiba-mais').forEach(botao => {
    botao.addEventListener('click', function() {
        const projetoId = this.getAttribute('data-projeto');
        const modal = document.getElementById(`detalhes-${projetoId}`);
        modal.classList.add('mostrar');
        document.body.style.overflow = 'hidden'; // Impede scroll da página principal
    });
});

// Fechar modais
document.querySelectorAll('.fechar-modal').forEach(botao => {
    botao.addEventListener('click', function() {
        this.closest('.projeto-detalhes').classList.remove('mostrar');
        document.body.style.overflow = 'auto'; // Restaura scroll
    });
});

// Fechar modal clicando fora
document.querySelectorAll('.projeto-detalhes').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('mostrar');
            document.body.style.overflow = 'auto'; // Restaura scroll
        }
    });
});

// Fechar modal com ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.projeto-detalhes').forEach(modal => {
            modal.classList.remove('mostrar');
        });
        document.body.style.overflow = 'auto'; // Restaura scroll
    }
});