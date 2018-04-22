var app = new Framework7({
  // App root element
  // root: '#app',
  // App Name
  name: 'Health Care',
  // App id
  id: 'health.care',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  }, 
  
  // Add default routes
 
});

var mainView = app.views.create('.view-main');
app.init();

var swiper = app.swiper.create('.swiper-container', {

    speed: 20,
    spaceBetween: 100,
 
    autoplay: {
    delay: 500,
  },

});

// var swiper = app.swiper.get('.swiper-container');

swiper.autoplay.running
// var mySwiper = new Swiper('.swiper-container', {
//     speed: 400,
//     spaceBetween: 100
// });

// var mySwiper = new Swiper('.swiper-container', {
//     speed: 20,
//     spaceBetween: 100,
//     width: 400px

// });

// var mySwiper = document.querySelector('.swiper-container').swiper;