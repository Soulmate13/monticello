$(document).ready(function () {
    console.log("ready!");

    let mySwiper = new Swiper('.news__slider-container', {
        speed: 500,
        spaceBetween: 30,
        slidesPerView: 3,
        loop: true,
        direction: 'horizontal',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.news__slide-arrow-next',
            prevEl: '.news__slide-arrow-prev',
        },
        // autoplay: {
        //     delay: 4000,
        // },
        breakpoints: {
            // when window width is >= 320px
            1200: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            576: {
                slidesPerView: 1
            },
            319: {
                slidesPerView: 1
            }
        }
    });

});

