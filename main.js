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