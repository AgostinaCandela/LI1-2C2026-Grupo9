if (localStorage.getItem("modoOscuro") === "activo") {
    document.body.classList.add("body-oscuro");
}

const btnCambio = document.getElementById("btn-cambio"); {

    if (document.body.classList.contains("body-oscuro")) {
        btnCambio.textContent = "Modo Claro ☀️";
    } else {
        btnCambio.textContent = "Modo Oscuro 🌙";
    }
}
btnCambio.addEventListener("click", () => {
    document.body.classList.toggle("body-oscuro");

    if (document.body.classList.contains("body-oscuro")) {
        btnCambio.textContent = "Modo Claro ☀️";
        localStorage.setItem("modoOscuro", "activo");
    } else {
        btnCambio.textContent = "Modo Oscuro 🌙";
        localStorage.setItem("modoOscuro", "inactivo");
    }
});
const formulario = document.getElementById("formulario");
if (formulario) {
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputNombre = document.getElementById("nombre");
        const inputEmail = document.getElementById("email");
        const inputMensaje = document.getElementById("mensaje");
        const respuestaFormulario = document.getElementById("respuesta-formulario");

        const nombre = inputNombre ? inputNombre.value.trim() : "";
        const email = inputEmail ? inputEmail.value.trim() : "";
        const mensaje = inputMensaje ? inputMensaje.value.trim() : "";

        if (nombre === "" || email === "" || mensaje === "") {
            if (respuestaFormulario) {
                respuestaFormulario.className = "mensaje-error";
                respuestaFormulario.textContent = "Error: Completa todos los campos obligatorios.";
            }
        
    } else if (!email.includes("@")) {
        if (respuestaFormulario) {
            respuestaFormulario.className = "mensaje-error";
            respuestaFormulario.textContent = "Error: El correo electrónico no es válido.";
        }
    } else {
        if (respuestaFormulario) {
            respuestaFormulario.className = "mensaje-exito";
            respuestaFormulario.textContent = "Formulario enviado con éxito.";
        }
        formulario.reset();
    }
});
    }