const a = require("swiper")
const swiper = this.swiper;
swiper.loopDestroy();
swiper.loopCreate();
/* ==========================================================================
         IMAGEN SLIDER + swiper
         ========================================================================== */
var swiper = new Swiper(".swiper-container", {
  slidesPreView: 5.2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


