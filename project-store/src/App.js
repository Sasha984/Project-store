window.onload = function(){

  function registr() {
    if (
      document.reg.login.value != "" &&
      document.reg.password.value != "" &&
      document.reg.email.value != "" &&
      document.reg.sname.value != "" &&
      document.reg.fname.value != ""
    )
      alert("yes registration");
  }

  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
   },
   breakpoints: {
    640: {
      slidesPerView: '3',
      spaceBetween: 20,
    },
    768: {
      slidesPerView: '5',
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: '6',
      spaceBetween: 50,
    },
  }
  });



  const swiperTutorial = new Swiper('.swiper-tutorial', {
    direction: 'horizontal',
    loop: true,

    navigation: {
    nextEl: '.swiper-button-next-tutorial',
    prevEl: '.swiper-button-prev-tutorial',
   },
   breakpoints: {
    640: {
      slidesPerView: '3',
      spaceBetween: 20,
    },
    768: {
      slidesPerView: '5',
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: '6',
      spaceBetween: 50,
    },
  }
  });




  }