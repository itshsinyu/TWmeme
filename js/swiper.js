let swiper = new Swiper( swiperContainer, parameter );

const swiper = new Swiper(".swiper-container", {
    // Optional parameters / 加入參數與設定值
    direction: "vertical", // 輪播方向
    loop: true, // 重複顯示
    // If we need pagination / 是否顯示分頁
    pagination: {
      el: ".swiper-pagination"
    },
    // Navigation arrows / 是否加入上、下一頁方向圖示
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    // And if we need scrollbar / 是否顯示滾動軸
    scrollbar: {
      el: ".swiper-scrollbar"
    }
    slidesPerView: 3
});
