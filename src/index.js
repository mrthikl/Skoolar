const svgIcon = '<svg class="hero-pagination-item" width="65px" height="65px" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg"><circle stroke-width="9" fill="none" stroke-linecap="round" cx="33" cy="33" r="28"></circle> <circle class="time" stroke-width="9" fill="none" stroke-linecap="round" cx="33" cy="33" r="28" ></circle></svg>'
const swiperHero = new Swiper('.swiperHero', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false

    },
    speed: 300,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    parallax: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
            return `<span  class='${className}'> ${svgIcon} </span>`;
        }
    },
});


if ($(window).width() > 1200) {
    var rellax = new Rellax(".parallax-image");
}

// loading
if ($('main').hasClass('home')) {
    $(window).on("load", () => {
        $('main').css('opacity', '1')
        $('.loading').fadeIn().delay(18000).fadeOut('1000')
    })
}