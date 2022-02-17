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
  const regexPass = /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
                        
  parrafo.innerHTML = "";

  if (nombre.value.length < 2 ) {
    // warnings += "El nombre no es valido <br>";
    errorFirstName.innerHTML = "El nombre debe tener al menos 2 caracteres"
    hayError = true;
  } else {
    hayError = false;
    errorFirstName.innerHTML = ""
  }
  
  if (apellido.value.length < 2) {
    // warnings += "El apellido no es valido <br>";
    errorLastName.innerHTML = "El apellido debe tener al menos 2 caracteres"
    hayError = true;
  } else{
    hayError = false;
    errorLastName.innerHTML = ""
  }
  if (nombreUsuario.value.length < 3) {
    // warnings += "El nombre de usuario no es valido <br>";
    errorUserName.innerHTML = "El nombre de usuario debe tener al menos 3 caracteres"
    hayError = true;
  }else{
    hayError = false;
    errorUserName.innerHTML = ""
  }
  if (!regexEmail.test(email.value)) {
    // warnings += "El email no es valida <br>";
    errorEmail.innerHTML = "El email debe tener un formato válido"
    hayError = true;
  }else{
    hayError = false;
    errorEmail.innerHTML = ""
  }
  
  if (!(regexImageFormat.test(avatar.value)))  {
    // warnings += "El nombre de usuario no es valido <br>";
    errorAvatar.innerHTML = "Debes seleccionar una imagen de perfil (.jpg, .jpeg, .png) "
    hayError = true;
  }else{
    hayError = false;
    errorAvatar.innerHTML = ""
  }
  
  if (!regexPass.test(pass.value)) {
    // warnings += "La contraseña no es valida <br>";
    errorPass.innerHTML = "La contraseña debe tener 8 caracteres mínimo, "
    errorPassMayuscula.innerHTML = "con una mayuscula, numero y caracter especial"
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
