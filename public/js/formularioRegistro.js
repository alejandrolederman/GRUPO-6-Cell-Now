// document.addEventListener("DOMContentLoaded", () => {

const nombre = document.getElementById("name");
const apellido = document.getElementById("surname");
const nombreUsuario = document.getElementById("user-name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");
/* ==========================================================================
   FORMULARIO DE VALIDACION DE REGISTER
   ========================================================================== */
form.addEventListener("submit", (e) => {
  let warnings = "";
  let hayError = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  parrafo.innerHTML = "";
  if (nombre.value.length < 6) {
    warnings += "El nombre no es valido <br>";
    hayError = true;
  }
  if (apellido.value.length < 2) {
    warnings += "El apellido no es valido <br>";
    hayError = true;
  }
  if (nombreUsuario.value.length < 3) {
    warnings += "El nombre de usuario no es valido <br>";
    hayError = true;
  }
  if (!regexEmail.test(email.value)) {
    warnings += "El email no es valida <br>";
    hayError = true;
  }
  if (pass.value.length < 8) {
    warnings += "La contraseña no es valida <br>";
    hayError = true;
  }
  if (hayError) {
    parrafo.innerHTML = warnings;
    e.preventDefault();
  } else {
    parrafo.innerHTML = "Enviado";
  }
});
