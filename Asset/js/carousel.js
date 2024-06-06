$(document).ready(function () {
    $("#slider-1").owlCarousel({
        margin: 0,
        padding:24,
    
        loop: true,
        nav: true,
        padding:5,
        navText: ["<span class='fa-solid fa-chevron-left'></span>", "<span class='fa-solid fa-chevron-right'></span>"],

        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
                loop: false,
                nav: false
                
            },

            300: {
                items: 1,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
           

            1000: {
                items: 4.5,
                nav: true,
                loop: false
            }
        }
    }

    );
});