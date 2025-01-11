let Productss = document.querySelectorAll(".swiper-slide > .Product");
Productss.forEach(e => {
  console.log(e.querySelector("img"));
  gsap.to(e.querySelector(".bg-Color"), { ease: "none", height: 0 });
});
new Swiper(".swiper-productCat",
  {
    speed: 1e3,
    slidesPerView: "auto",
    spaceBetween: 30,
    mousewheel: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (e, r) {
        return '<span class="' + r + '"><span class="line"></span></span>';
      }
    }, on: {
      init(e) {
        e.slides.length;
        e.slides.forEach(e => {
          gsap.to(e.querySelectorAll(".swiper-slide .Title h2"), { y: 0, opacity: 1 });
        });
        let r = document.querySelectorAll(".swiper-slide");
        let t = 1;
        r.forEach(e => {
          e.setAttribute("data-index", t);
          e.querySelector(".Current").innerText = `0${t}`;
          t++;
        });
      }, slideChangeTransitionStart(e) { }
    }
  });
