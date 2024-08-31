const swiper = new Swiper('.swiper', {
speed : 1000,
  
    // If we need pagination
    pagination: {
      el: '.articlePaginetion',
      clickable : true,
    },
  // Navigation arrows
  navigation: {
    nextEl: '.nextArt',
    prevEl: '.prevArt',
  },
  });