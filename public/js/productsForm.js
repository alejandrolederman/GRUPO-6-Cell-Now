const nombre = document.getElementById("name");
const descripcion = document.getElementById("descripcion");
const imagen = document.getElementById("image");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings-login"); 
  //   /* ==========================================================================
  //    FORMULARIO DE VALIDACION DE PRODUCTS FORM
  //    ========================================================================== */
  form.addEventListener("submit", (e) => {
    let warnings = "";
    let hayError = false;
    let imagenes = /\.(jpg|png|gif)$/i;
    parrafo.innerHTML = "";
    if (nombre.value.length < 3) {
      warnings += "El nombre tiene que ser mas largo <br>";
      hayError = true;
    }
    if (descripcion.value.length < 20) {
      warnings += "La descripcion tiene que tener mas de 20 caracteres <br>";
      hayError = true;
    }
    if (!imagenes.test(imagen.value)) {
      warnings += "El archivo a adjuntar no es una imagen <br>";
      hayError = true;
    }
    if (hayError) {
      parrafo.innerHTML = warnings;
      e.preventDefault();
    } else {
      form.submit();
    }
  });