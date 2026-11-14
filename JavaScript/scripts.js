//========================================//
//  Boton para poner modo oscuro/normal   //
//========================================//
const btnCambio = document.getElementById("btn-cambio");

if (btnCambio) {
    btnCambio.addEventListener("click", () => {
        document.body.classList.toggle("body-oscuro");
    });
}

/* Validación de formulario */
const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const inputEmail = document.getElementById("email");
const inputMensaje = document.getElementById("mensaje");
const respuestaFormulario = document.getElementById("respuesta-formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = inputNombre.value.trim();
    const email = inputEmail.value.trim();
    const mensaje = inputMensaje.value.trim(); 

    if (nombre === "" || email === "" || mensaje === "") {
        respuestaFormulario.className = "mensaje-Error";
        respuestaFormulario.textContent = "Error: completá todos los campos.";
        return;
    }

    respuestaFormulario.textContent = "Consulta enviada correctamente.";
})