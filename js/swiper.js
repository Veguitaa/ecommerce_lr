
/* Swiper category  */

var swiper = new Swiper(".slide-swp", {

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

/* Swiper sale product 1  */
  var swiper = new Swiper(".productSwiper", {
    slidesPerView: 6,
    spaceBetween: 25,
  

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      1629: {
        slidesPerView: 5,

      },
    },
  });


/* Swiper sale product 2  */
