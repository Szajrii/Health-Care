var app = new Framework7({
  // App root element
  root: '.Home',
  // App Name
  name: 'Health Care',
  // App id
  id: 'health.care',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },

 
  // Add default routes

  init: true,
  initOnDeviceReady: true
  // ... other parameters
});

var mainView = app.views.create('.view-main');

// var mainView = app.addView('.view-main', {
//     domCache: true //enable inline pages
// });
// app.init();
// var swiper = app.swiper.create('.swiper-container', {
//     speed: 200,
//     spaceBetween: 100
// });
var swiper = app.swiper.create('.swiper-container', {
    speed: 1500,
    spaceBetween: 100,
    loop: true,
    autoplay: {
      delay: 4000
    } 
  });

