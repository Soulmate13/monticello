$(document).ready(function () {
    console.log("ready!");

    let mySwiper = new Swiper('.swiper-container', {
        speed: 500,
        spaceBetween: 30,
        slidesPerView: 3,
        loop: true,
        // autoplay: {
        //     delay: 4000,
        // },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next-go',
            prevEl: '.swiper-button-prev-go',
        },
    });

});

