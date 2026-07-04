$(document).ready(function () {

    $("#btnEnviar").click(function () {
        let esValido = true;

        let nombreInput = $("#nombre");
        let nombreVal = nombreInput.val().trim();
        let regexLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; 

        if (nombreVal === "") {
            nombreInput.siblings(".invalid-feedback").text("El nombre es obligatorio.");
            nombreInput.addClass("is-invalid").removeClass("is-valid");
            esValido = false;
        } else if (!regexLetras.test(nombreVal)) {
            nombreInput.siblings(".invalid-feedback").text("Solo se pueden agregar letras.");
            nombreInput.addClass("is-invalid").removeClass("is-valid");
            esValido = false;
        } else {
            nombreInput.removeClass("is-invalid").addClass("is-valid");
        }

        let usuarioInput = $("#usuario");
        let usuarioVal = usuarioInput.val().trim();

        if (usuarioVal === "") {
            usuarioInput.siblings(".invalid-feedback").text("Usuario es obligatorio.");
            usuarioInput.addClass("is-invalid").removeClass("is-valid");
            esValido = false;
        } else if (usuarioVal.length > 12) {
            usuarioInput.siblings(".invalid-feedback").text("El usuario no puede tener más de 12 caracteres.");
            usuarioInput.addClass("is-invalid").removeClass("is-valid");
            esValido = false;
        } else {
            usuarioInput.removeClass("is-invalid").addClass("is-valid");
        }

        let fechaInput = $("#fecha_ingreso");
        if (fechaInput.val() === "") {
            fechaInput.addClass("is-invalid").removeClass("is-valid");
            esValido = false;
        } else {
            fechaInput.removeClass("is-invalid").addClass("is-valid");
        }

        let emailInput = $("#email");
        let emailVal = emailInput.val().trim();
        let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        
        if (emailVal === "" || !regexEmail.test(emailVal)) {
            emailInput.addClass("is-invalid").removeClass("is-valid");
            esValido = false;
        } else {
            emailInput.removeClass("is-invalid").addClass("is-valid");
        }

        let urlInput = $("#sitio_web");
        let urlVal = urlInput.val().trim();
        if (urlVal !== "") {
            let regexUrl = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
            if (!regexUrl.test(urlVal)) {
                urlInput.addClass("is-invalid").removeClass("is-valid");
                esValido = false;
            } else {
                urlInput.removeClass("is-invalid").addClass("is-valid");
            }
        } else {
            urlInput.removeClass("is-invalid").removeClass("is-valid");
        }

        if (esValido) {
            alert("¡Datos enviados correctamente! (Simulación de creación exitosa).");
            limpiarFormulario();
            window.location.href = "./index.html";
        }
    });

    $("#btnCancelar").click(function () {
        limpiarFormulario();
    });
});

function limpiarFormulario() {
    $("#formRegistro")[0].reset();
    $("#nombre, #usuario, #fecha_ingreso, #email, #sitio_web").removeClass("is-invalid is-valid");
}