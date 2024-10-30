const menos = document.getElementById('menos');
const contador = document.getElementById('contador');
const mais = document.getElementById('mais');

let valor = 1;

export function reset () {
    valor = 1;
}

menos.addEventListener('click', () => {

    if (valor === 1) {
        
    } else if (valor > 1 ) {
        valor--
        contador.textContent = valor;
    }
})

mais.addEventListener('click', () => {
    if (valor <= 10) {
        valor++
        contador.textContent = valor;
    }
})
