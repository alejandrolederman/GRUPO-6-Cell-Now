const nombre = document.getElementById("name");
const apellido = document.getElementById("surname");
const imagen = document.getElementById("image");
const nombreUsuario = document.getElementById("user-name");
const form = document.getElementById("form");
const pass = document.getElementById("password");
const parrafo = document.getElementById("warnings"); 
   /* ==========================================================================
      FORMULARIO DE VALIDACION DE USER EDIT
    ========================================================================== */
  form.addEventListener("submit", (e) => {
    let warnings = "";
    let hayError = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPass = /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
    let regexImageFormat = /\.(jpe?g|png|gif)(?:\?.*|)$/i;
    
    parrafo.innerHTML = "";
    if (!regexEmail.test(email.value)) {
      // warnings += "El email no es valida <br>";
      errorEmail.innerHTML = "El email debe tener un formato válido"
      hayError = true;
    }else{
      hayError = false;
      errorEmail.innerHTML = ""
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
    if (!regexImageFormat.test(imagen.value)) {
        errorImagen.innerHTML = "Debes adjuntar una imagen del producto (.jpg, .jpeg, .png) "
        hayError = true;
    }else{
        hayError = false;
        errorImagen.innerHTML = ""
    }
    parrafo.innerHTML = "";
    if (nombre.value.length < 5 ) {
      // warnings += "El nombre no es valido <br>";
      errorModel.innerHTML = "El nombre debe tener al menos 5 caracteres"
      hayError = true;
    } else {
      hayError = false;
      errorFirstName.innerHTML = ""
    }
    parrafo.innerHTML = "";
    if (apellido.value.length < 2 ) {
      // warnings += "El nombre no es valido <br>";
      errorModel.innerHTML = "El apellido debe tener al menos 2 caracteres"
      hayError = true;
    } else {
      hayError = false;
      errorFirstName.innerHTML = ""
    }
    if (nombreUsuario.value.length < 4 ) {
        // warnings += "El nombre no es valido <br>";
        errorModel.innerHTML = "El nombre de usuario debe tener al menos 4 caracteres"
        hayError = true;
      } else {
        hayError = false;
        errorFirstName.innerHTML = ""
      }
    if (hayError) {
      parrafo.innerHTML = warnings;
      e.preventDefault();
    } else {
      form.submit();
    }
  });





