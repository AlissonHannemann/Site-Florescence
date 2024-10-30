const contato = document.getElementById('contato');
const menuclick = document.querySelector('.menu');
const fundoclick = document.querySelector('.fundo');
const home = document.getElementById('home');


contato.addEventListener('click', () => {
    menuclick.removeAttribute('id', 'menuOpen');
    fundoclick.style.display = 'none';
})

home.addEventListener('click', () => {
    menuclick.removeAttribute('id', 'menuOpen');
    fundoclick.style.display = 'none';
})