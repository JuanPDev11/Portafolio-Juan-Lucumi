(function(){



setTimeout (()=>{  
var swiper1 = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination1',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
},500)

})();
