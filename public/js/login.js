
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
    parrafo.innerHTML = "";
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
      form.submit();
    }
  });