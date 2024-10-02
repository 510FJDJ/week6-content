import './assets/scss/all.scss';

// import Swiper JS
// import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const swiper = new Swiper(".mySwiper", {
   slidesPerView: 2,
   slidesPerGroup:2,
   // ***(一次呈現幾張),
   // ***(一個群組內有幾張投影片),
   spaceBetween: 24,
   autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
   pagination: {
     el:".swiper-pagination-custom",
     type: "fraction"
   },
   navigation: {
         nextEl: ".swiper-next",
         prevEl: ".swiper-prev",
       },
       breakpoints: {
        992: {
          slidesPerView: 2, // 較大螢幕的設置
        },
        0: {
          slidesPerView: 1, // 手機版的設置，顯示一個內容
        },
      },
      mousewheel: true,
      keyboard: true,
 });
 const swiper2 = new Swiper(".seeSwiper", {
  slidesPerView: 1,
  slidesPerGroup:1,
  // ***(一次呈現幾張),
  // ***(一個群組內有幾張投影片),
  spaceBetween: 24,
  autoplay: {
   delay: 4000,
   disableOnInteraction: false
 },
     mousewheel: true,
     keyboard: true,
});

 const listItems = document.querySelectorAll('.list-group-item');
   listItems.forEach((item) => {
   item.addEventListener('click', function(event) {
     event.preventDefault();
     const slideIndex = parseInt(this.getAttribute('data-slide'), 10);
     swiper2.slideTo(slideIndex);
   });
 });