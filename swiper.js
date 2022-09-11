

  // <script>
    const swiper = new Swiper('.swiper', {
      //reproduccion automatica
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      // Optional parameters
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  // </script>