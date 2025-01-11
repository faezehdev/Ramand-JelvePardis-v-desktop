let tabsContent = document.querySelectorAll(".tabs_content");

let tabsWrapper =document.querySelector(".tabs-wrapper")
if (tabsContent.length<=1) {
    tabsWrapper.style.height = `100vh`
    
}
else{
    tabsWrapper.style.height = `${tabsContent.length*60}vh`

}


$(".tabs_content").on("click", function () {
  if (!$(this).hasClass("active")) {
    $(".tabs_content.active").removeClass("active");
    $(this).addClass("active");
    setTimeout(() => {
      $(".tabs_content").removeClass("activeDisplay");
    }, 400);

    setTimeout(() => {
      $(this).addClass("activeDisplay");
    }, 1000);
    setTimeout(() => {
      $(".tabs_content").removeClass("Newactive");
      $(this).addClass("Newactive");

    }, 1200);
  }
});

ScrollTrigger.create({
  trigger: ".tabs",
  start: "top top",
  pin: true,
  endTrigger: ".tabs-wrapper",
  end: "max",
  onUpdate: (self) => {
    let nb = Math.round(gsap.utils.mapRange(0, 1, 0, tabsContent.length-1, self.progress));
    if (!$(".tabs_content").eq(nb).hasClass("active")) {
      $(".tabs_content.active").removeClass("active");
      $(".tabs_content").eq(nb).addClass("active");

      setTimeout(() => {
        $(".tabs_content").removeClass("activeDisplay");
      }, 400);

      setTimeout(() => {
        $(".tabs_content").eq(nb).addClass("activeDisplay");
      }, 1000);
      setTimeout(() => {
        $(".tabs_content").removeClass("Newactive");
        $(".tabs_content").eq(nb).addClass("Newactive");

      }, 1200);
    }
  },
});








  
  