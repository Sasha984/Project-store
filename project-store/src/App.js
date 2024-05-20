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
    2000: {
      slidesPerView: '8',
      spaceBetween: 50,
    },
    2500: {
      slidesPerView: '10',
      spaceBetween: 50,
    },
  }
  });



  const swiperTutorial = new Swiper('.swiper-tutorial', {
    direction: 'horizontal',
    loop: true,

    navigation: {
    nextEl: '.tutorial-btn-next',
    prevEl: '.tutorial-btn-prev',
   },
   breakpoints: {
    640: {
      slidesPerView: '1',
      spaceBetween: 20,
    },
    768: {
      slidesPerView: '2',
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: '3',
      spaceBetween: 50,
    },
    2000: {
      slidesPerView: '4',
      spaceBetween: 50,
    },
  }
  });




  }