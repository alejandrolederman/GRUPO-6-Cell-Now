const nombre = document.getElementById("name");
const descripcion = document.getElementById("descripcion");
const imagen = document.getElementById("image");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings"); 
  //   /* ==========================================================================
  //    FORMULARIO DE VALIDACION DE PRODUCTS EDIT
  //    ========================================================================== */
  form.addEventListener("submit", (e) => {
    let warnings = "";
    let hayError = false;
    let regexImageFormat = /\.(jpe?g|png|gif)(?:\?.*|)$/i;

    parrafo.innerHTML = "";
    if (nombre.value.length < 5 ) {
      // warnings += "El nombre no es valido <br>";
      errorModel.innerHTML = "El nombre debe tener al menos 5 caracteres"
      hayError = true;
    } else {
      hayError = false;
      errorFirstName.innerHTML = ""
    }

    if (descripcion.value.length < 5 ) {
      // warnings += "El nombre no es valido <br>";
      errorDescription.innerHTML = "la descripcion debe contener al menos 20 caracteres"
      hayError = true;
    } else {
      hayError = false;
      errorFirstName.innerHTML = ""
    }
    
    if (!regexImageFormat.test(imagen.value)) {
      
      errorImagen.innerHTML = "Debes adjuntar una imagen del producto (.jpg, .jpeg, .png) "
      hayError = true;
    }else{
      hayError = false;
      errorImagen.innerHTML = ""
    }
    if (hayError) {
      parrafo.innerHTML = warnings;
      e.preventDefault();
    } else {
      form.submit();
    }
  });