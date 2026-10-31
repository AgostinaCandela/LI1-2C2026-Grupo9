const nav = document.querySelector("#menú");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener('click', () => {
    menú.classList.add('visible');
})

cerrar.addEventListener('click', () => {
    menú.classList.remove('visible');
})