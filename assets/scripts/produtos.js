const produtos = document.querySelectorAll('#produtos .swiper-slide');
const telaProdutos = document.querySelector('.produtos');
let titulo1 = document.querySelector('.titulo1');
let preco1 = document.querySelector('.preco1');
let imagem1 = document.getElementById('imagemProduto');
const fundo1 = document.querySelector('.fundo');
const fechar = document.querySelector('#fechar');
const contadorQtd = document.getElementById('contador');

import { reset } from "./qtd.js";

produtos.forEach((slide) => {
    slide.addEventListener('click', () => {
        let titulo = slide.querySelector('.titulo').textContent.trim();
        let preco = slide.querySelector('.preco').textContent.trim();
        const imagem = slide.querySelector('.swiper-slide img').getAttribute('src');

        titulo1.textContent = titulo;
        preco1.textContent = preco;
        imagem1.src = imagem;

        fundo1.style.display = 'block';
        telaProdutos.setAttribute('id', 'produtosOn');
    })
})

fundo1.addEventListener('click', () => {
    fundo1.style.display = 'none';
    telaProdutos.removeAttribute('id', 'produtosOpen');
    contadorQtd.textContent = '1';
    reset();
})

fechar.addEventListener('click', () => {
    fundo1.style.display = 'none';
    telaProdutos.removeAttribute('id', 'produtosOpen');
    contadorQtd.textContent = '1';
    reset();
})



