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
        autoplay: {
            delay: 4000,
        },
        parallax: true,
        breakpoints: {
            1200: {
                spaceBetween: 30,
                slidesPerView: 3
            },

            991: {
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                centeredSlides: true,
                slidesOffsetBefore: 100,
                spaceBetween: 30,
                slidesPerView: 3,
            },

            768: {
                slidesOffsetBefore: 20,
                slidesOffsetAfter: 20,
                slidesPerView: 2,
                spaceBetween: 40
            },

            576: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            319: {
                centeredSlides: true,
                slidesOffsetBefore: 150,
                slidesOffsetAfter: 0,
                slidesPerView: 2,
                spaceBetween: 10,
            }
        }
    });



});

$(document).ready(function () {
    AOS.init();
});

$(document).ready(function () {

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault()

        $('html,body').animate({ scrollTop: $(this.hash).offset().top },
            Math.pow(Math.abs(window.scrollY - $(this.hash).offset().top), 2 / 3) * 5);

        if (window.matchMedia('(max-width: 991px)').matches) {
            $('#navigation').toggleClass("nav__active");
            $('.nav__btn-element').toggleClass('nav__btn-element--active');
        }


    })

});

