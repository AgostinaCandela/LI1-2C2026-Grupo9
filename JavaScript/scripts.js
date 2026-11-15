//========================================//
//  Boton para poner modo oscuro/normal   //
//========================================//
const btnCambio = document.getElementById("btn-cambio");

btnCambio.addEventListener("click", () => {
    document.body.classList.toggle("body-oscuro");
        
    if(document.body.classList.contains("body-oscuro")){
    btnCambio.textContent = "Modo Claro ☀️";
    }else{
    btnCambio.textContent = "Modo Oscuro 🌙";
    }
});
