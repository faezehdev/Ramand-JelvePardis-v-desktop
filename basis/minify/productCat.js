let Productss=document.querySelectorAll(" .Product");Productss.forEach((e=>{console.log(e.querySelector("img")),gsap.to(e.querySelector(".bg-Color"),{ease:"none",height:0})}));let productCat=new Swiper(".swiper-productCat",{speed:1e3,slidesPerView:2.5,spaceBetween:30,mousewheel:!0,grabCursor:!0,touchReleaseOnEdges:!0,pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'"><span class="line"></span></span>'}},on:{init(e){e.slides.length;e.slides.forEach((e=>{gsap.to(e.querySelectorAll(".swiper-slide .Title h2"),{y:0,opacity:1})}));let t=document.querySelectorAll(".swiper-slide"),r=1;t.forEach((e=>{e.setAttribute("data-index",r),e.querySelector(".Current").innerText=`0${r}`,r++}))},slideChangeTransitionStart(e){}}});