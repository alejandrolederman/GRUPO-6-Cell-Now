// document.addEventListener("DOMContentLoaded", () => {
  // const db = require("../database/models")

const nombre = document.getElementById("#name");
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
  if (nombre.value === "") {
    warnings += "El nombre no es valido <br>";
    errorFirstName.innerHTML ="este campo no puede estar vacio"
    hayError = true;
  } 
  else if (nombre.value.length < 2) {
    errorFirstName.innerHTML = "El nombre no es valido, tiene que contener mas de 2 caracteres "
    hayError = true;
  }

  if (apellido.value === "") {
    // warnings += "El apellido no es valido <br>";
    errorLastName.innerHTML ="este campo no puede estar vacio"
    hayError = true;
  } else if (apellido.value.length < 2) {
    errorLastName.innerHTML = "El apellido no es valido, tiene que contener mas de 2 caracteres "
    hayError = true;
  }

  if (nombreUsuario.value=== "") {
    // warnings += "El nombre de usuario no es valido <br>";
    errorUserName.innerHTML = "este campo no puede estar vacio"
    hayError = true;
  }else if (nombreUsuario.value.length < 3) {
    errorLastName.innerHTML = "El nombre usuario tiene que contener mas de 3 caracteres "
    hayError = true;
  }

  // if (!regexEmail.test(email.value)) {
  //   warnings += "El email no es valida <br>";
  //   errorEmail.innerHTML ="El email no es valida"
  //   hayError = true;
  // }
  // else {
  //   db.User.findOne({where: { email: req.body.email }})
  //     .then( function(userInDB){
  //       if (userInDB) {
  //         errorEmail.innerHTML ="este email ya esta registrado"
  //         hayError = true;
  //       }  
  //     })
  // }
  
  
   if (pass.value.length < 8) {
    warnings += "La contraseña no es valida <br>";
    hayError = true;
  }
  if (hayError) {
    parrafo.innerHTML = warnings;
    e.preventDefault();
  } else {
    form.submit();
  }
});
