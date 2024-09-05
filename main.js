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
   spaceBetween: 48,
   // ***(分頁),
   pagination: {
     el:".swiper-pagination-custom",
     type: "fraction"
   },
   navigation: {
         nextEl: ".swiper-next",
         prevEl: ".swiper-prev",
       },
 });