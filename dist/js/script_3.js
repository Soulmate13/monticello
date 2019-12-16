$(document).ready(function () {
    console.log("ready!");

    let mySwiperHeader = new Swiper('.header__slider-container', {
        speed: 700,
        slidesPerView: 1,
        loop: true,
        direction: 'vertical',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        autoplay: {
            delay: 4000,
        }
    });

});
