var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});