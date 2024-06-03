/* Open & close cart */

let cart = document.querySelector('.cart');

function open_cart() {
    cart.classList.add('active')
}
function close_cart() {
    cart.classList.remove('active')
}


/* Initialize Swiper  */


let swiper = new Swiper(".mySwiper", {

    slidesPerView: 1,
    spaceBetween: 30,
    effect: "fade",
    loop: true,
  /*   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }, */

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    autoplay:{
      delay:2500,
    }, 

  });