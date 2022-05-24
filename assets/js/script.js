$(function () {
    "use strict";

    //**  On Click Functions Here **//
    function onClicks() {
        $('.custom-select').selectpicker({
            style: "btn-primary rounded-end rounded-3 fw-400 fs-15 ps-3 h-40px",
            title: "search",
            width: "fit",
        });

        $('.custom-select2').selectpicker({
            style: "bg-transparent h-40px w-100 text-muted border",
        });

        $('.country-select').selectpicker({
            style: "bg-transparent h-40px w-100 text-muted border",
            liveSearch: true,
        });

        $('.menu-btn').click(function (event) {
            $('.sidebar-content-wrapper aside.sidebar').toggleClass('collapse-sidebar');
            $('.sidebar-content-wrapper .content').toggleClass('large');
            $('.offcanvas-overlay').toggleClass('active');
        });

        $('.offcanvas-overlay').click(function (event) {
            $('.sidebar-content-wrapper aside.sidebar').toggleClass('collapse-sidebar');
            $('.sidebar-content-wrapper .content').toggleClass('large');
            $('.offcanvas-overlay').toggleClass('active');
        });

        $('#mobileSearch').click(function (event) {
            $('.mobile-search').addClass('active');
        });

        $('.close-search').click(function (event) {
            $('.mobile-search').removeClass('active');
        });
    }

    function initializeCarousel() {
        var swiper = new Swiper(".tags-carousel", {
            slidesPerView: 'auto',
            allowTouchMove: false,
            navigation: {
                nextEl: ".next-btn",
                prevEl: ".prev-btn",
            },
        });
    }

    //** Initialize Functions **// 
    onClicks();
    initializeCarousel();
});