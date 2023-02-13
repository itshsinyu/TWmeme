let memeSlider = new Swiper('.meme-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    // loop: true,
    slidesPerView: 2,
    // slidesPerView: 'auto',
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
    },
    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            switch(index){
                case 0:text='大平台！';break;
                case 1:text='反作用力';break;
                case 2:text='燒毀網羅';break;
                case 3:text='眼睛業障';break;
                case 4:text='出事阿伯';break;
            }
            return '<span class="' + className + '">' + text + '</span>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
//mouseover
memeSlider.el.onmouseover = function(){
    memeSlider.autoplay.stop();
}
//mouseout
memeSlider.el.onmouseout = function(){
    memeSlider.autoplay.start();
}