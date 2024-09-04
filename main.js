import './assets/scss/all.scss';
const swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   slidesPerGroup:2,
   // ***(一次呈現幾張),
   // ***(一個群組內有幾張投影片),
   spaceBetween: 6,
   // ***(分頁),
   pagination: {
     el:".swiper-pagination-custom",
     type: "fraction"
   },
   navigation: {
         nextEl: ".swiper-next",
         prevEl: ".swiper-prev",
       },
       renderBullet: function (index, className) {
        return '<span class="' + ".text-gray-300" + '">' + (index + 1) + '</span>';
      }
 });