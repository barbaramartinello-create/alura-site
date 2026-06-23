// MENU SUAVE AO CLICAR
document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        const id = this.getAttribute('href');
        const secao = document.querySelector(id);

        secao.scrollIntoView({
            behavior: 'smooth'
        });
    });

});


// ANIMAÇÃO AO ROLAR A PÁGINA
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {
    observer.observe(card);
});


// BOTÃO HERO
const botao = document.querySelector('.hero button');

botao.addEventListener('click', () => {

    const contato = document.querySelector('#contato');

    contato.scrollIntoView({
        behavior: 'smooth'
    });

});


// EFEITO HEADER AO ROLAR
const header = document.querySelector('header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {
        header.style.background = '#020617';
        header.style.boxShadow = '0 5px 15px rgba(0,0,0,.2)';
    } else {
        header.style.background = '#0f172a';
        header.style.boxShadow = 'none';
    }

});


// MENSAGEM AO ENVIAR FORMULÁRIO
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    alert('Mensagem enviada com sucesso! 🚀');

    form.reset();

});
