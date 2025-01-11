gsap.registerPlugin(ScrollTrigger) 

const swiper = new Swiper('.awardsSlider', {
    slidesPerView:4.5,
  speed : 1000,
    spaceBetween: 43,
  });


  const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



$('.section1').imagesLoaded( function() {
  $(".section1 .imgS").addClass("activeImg")
  // Scale in animation
let scrollToTop = document.querySelectorAll('.scrollToTop')
scrollToTop.forEach(s=>{
      gsap.to(s , {
        scrollTrigger:{
          trigger:s,
          start : "top 70%",
          end : "bottom bottom",
        },
        opacity :1,
        y:0,
      })
 
})

});