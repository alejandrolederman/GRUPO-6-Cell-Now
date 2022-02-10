document.addEventListener("DOMContentLoaded", () => {
  let $formRegister = document.querySelector("form");

  /* ==========================================================================
   FORMULARIO DE VALIDACION DE REGISTER
   ========================================================================== */
  $formRegister.addEventListener("submit", (e) => {
    let $nombre = document.getElementById("nombreForm");
    let $email = document.getElementById("email");
    let $contrasenia = document.getElementById("contrasenia");

    let hayError = false;

    if ($nombre.value.length < 3) {
      $nombre.style.border = "2px solid red";
      hayError = true;

      if (
        ($email.value =
          !/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
            .test)
      )
        $email.style.border = "2px solid red";
        $email.classList.add ("shake");
      hayError = true;

      if ($contrasenia.value.length < 8 || $email.value == $contrasenia.value) {
        $contrasenia.style.border = "2px solid red";
        hayError = true;
      }

      //Verifica si hay errores en los campos
      if ($hayError || nombreCondicion || emailCondicion) {
        e.preventDefault();
      }
    }
  });
});
