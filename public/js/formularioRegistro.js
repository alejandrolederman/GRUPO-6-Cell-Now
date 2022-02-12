// document.addEventListener("DOMContentLoaded", () => {

  const nombre = document.getElementById("name")
  const apellido = document.getElementById("surname")
  const nombreUsuario = document.getElementById("user-name")
  const email = document.getElementById("email")
  const pass = document.getElementById("password")
  const form = document.getElementById("form")
  const parrafo = document.getElementById("warnings")
  /* ==========================================================================
   FORMULARIO DE VALIDACION DE REGISTER
   ========================================================================== */
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML= "" 
    if(nombre.value.length <6){
      warnings += "El nombre no es valido <br>"
      entrar = true
    }
    if(!regexEmail.test(email.value)){
      warnings += "El email no es valido <br>"
      entrar = true
    }
    if(pass.value.length <8){
      warnings += "La contraseña no es valido <br>"
      entrar = true
    }
    if(entrar){
      parrafo.innerHTML = warrings
    }else{
    parrafo.innerHTML = "Enviado"
    }    