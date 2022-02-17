
const email = document.getElementById("mail");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings-login"); 
  //   /* ==========================================================================
  //    FORMULARIO DE VALIDACION DE LOGIN
  //    ========================================================================== */
  form.addEventListener("submit", (e) => {
    let warnings = "";
    let hayError = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPass = /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

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
    if (hayError) {
      parrafo.innerHTML = warnings;
      e.preventDefault();
    } else {
      form.submit();
    }
  });