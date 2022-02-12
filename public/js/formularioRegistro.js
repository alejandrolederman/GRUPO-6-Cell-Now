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
  form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML= "" 
    if(nombre.value.length <6){
      warnings += "El nombre no es valido <br>"
      entrar = true
    }
    if(apellido.value.length <2){
      warnings += "El apellido no es valido <br>"
      entrar = true
    }
    if(nombreUsuario.value.length <3){
      warnings += "El nombre de usuario no es valido <br>"
      entrar = true
    }
    if(!regexEmail.test(email.value)){
      warnings += "El email no es valida <br>"
      entrar = true
    }
    if(pass.value.length <8){
      warnings += "La contraseña no es valida <br>"
      entrar = true
    }
    if(entrar){
      parrafo.innerHTML = warnings
    }else{
    parrafo.innerHTML = "Enviado"
    }
  })