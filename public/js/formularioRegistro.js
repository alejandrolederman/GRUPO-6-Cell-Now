// document.addEventListener("DOMContentLoaded", () => {
  window.onload = function() {

const nombre = document.getElementById("name");
const apellido = document.getElementById("surname");
const nombreUsuario = document.getElementById("user-name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");
const avatar = document.getElementById("avatar");



/* ==========================================================================
   FORMULARIO DE VALIDACION DE REGISTER
   ========================================================================== */

form.addEventListener("submit", (e) => {
  let warnings = "";
  let hayError = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regexImageFormat = /\.(jpe?g|png|gif)(?:\?.*|)$/i;
  // const regexPass = ^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$
  parrafo.innerHTML = "";

  if (nombre.value.length < 2 ) {
    // warnings += "El nombre no es valido <br>";
    errorFirstName.innerHTML = " el nombre es muy corto"
    hayError = true;
  } else {
    hayError = false;
    errorFirstName.innerHTML = ""
  }
  
  if (apellido.value.length < 2) {
    // warnings += "El apellido no es valido <br>";
    errorLastName.innerHTML = " el apellido es muy corto"
    hayError = true;
  } else{
    hayError = false;
    errorLastName.innerHTML = ""
  }
  if (nombreUsuario.value.length < 3) {
    // warnings += "El nombre de usuario no es valido <br>";
    errorUserName.innerHTML = "El nombre de usuario no es valido"
    hayError = true;
  }else{
    hayError = false;
    errorUserName.innerHTML = ""
  }
  if (!regexEmail.test(email.value)) {
    // warnings += "El email no es valida <br>";
    errorEmail.innerHTML = "El email no es valida"
    hayError = true;
  }else{
    hayError = false;
    errorEmail.innerHTML = ""
  }
  
  if (!(regexImageFormat.test(avatar.value)))  {
    // warnings += "El nombre de usuario no es valido <br>";
    errorAvatar.innerHTML = "la extension no es valida "
    hayError = true;
  }else{
    hayError = false;
    errorAvatar.innerHTML = ""
  }
  
  if (pass.value.length < 8) {
    // warnings += "La contraseña no es valida <br>";
    errorPass.innerHTML = "La contraseña no es valida"
    hayError = true;
  }else{
    hayError = false;
    errorPass.innerHTML = ""
  }

  if (hayError) {
    parrafo.innerHTML = warnings;
    e.preventDefault();
  } else {
    form.submit();
  }
});
  }
