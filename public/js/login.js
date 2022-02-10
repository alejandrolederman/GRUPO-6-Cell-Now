
const { check } = require("express-validator");

document.addEventListener("DOMContentLoaded", () => {
    let $formRegister = document.querySelector(".login");
  
    /* ==========================================================================
     FORMULARIO DE VALIDACION DE LOGIN
     ========================================================================== */
    $formRegister.addEventListener("submit", (e) => {
      let $email = document.getElementById("usu");
      let $contrasenia = document.getElementById("pas");
     // let $errorEpress =document.getElementById("errorEpress");//
  
      let hayError = false;
  
        if (
          ($email.value =
            !/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
              .test)
        )
          $email.style.border = "2px solid red";
          setErrorFor( email, "El texto ingresado no coincide con el patrón requerido. Proporciona solo una dirección de correo corporativo de Cell Now ")
          $email.classList.add ("shake", "error");
          hayError = true;
  
        if ($pas.value.length < 8 || $pas.value == $pas.value) {
          $pas.style.border = "2px solid red";
          hayError = true;
        }



        //Verifica si hay errores en los campos
        else ($hayError || nombreCondicion || pasCondicion) {
          e.preventDefault();;
        }
      }
    });
  });