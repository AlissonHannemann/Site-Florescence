const menu = document.querySelector('.menu');
const fundo = document.querySelector('.fundo');
const close = document.getElementById('close');
const activeMenu = document.getElementById('activeMenu');

activeMenu.addEventListener('click', () => {
    menu.setAttribute('id', 'menuOpen');
    fundo.style.display = 'block';
})

close.addEventListener('click', () => {
    menu.removeAttribute('id', 'menuOpen');
    fundo.style.display = 'none';
})

fundo.addEventListener('click', () => {
    menu.removeAttribute('id', 'menuOpen');
    fundo.style.display = 'none';
})
