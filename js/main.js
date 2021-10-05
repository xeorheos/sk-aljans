var dateMy = new Date();
var yar = dateMy.getFullYear();
document.getElementById('year').innerHTML = yar;

const ParthnersSwiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    10: {
      slidesPerView: 1,
      spacebetween: 20
    },

    320: {
      slidesPerView: 1,
      spacebetween: 20
    },

    480: {
      slidesPerView: 2,
      spacebetween: 30
    },

    576: {
      slidesPerView: 2,
      spacebetween: 40
    },

    768: {
      slidesPerView: 3,
      spacebetween: 40
    },
    1000: {
      slidesPerView: 4,
      spacebetween: 40
    },
  }
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

var dateMy = new Date();
var yar = dateMy.getFullYear();
document.getElementById('year').innerHTML = yar;

