$(document).ready(function () {
    $('.caracter').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },

            600: {
                items: 1
            },
            770: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $('.ImgSlider').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    $('.SelectRoom').owlCarousel({
        loop: true,
        margin: 10,
        margin: 1,
        merge: true,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

});
$(document).ready(function () {

    $('.ahmed').counterUp({
        delay: 10,
        time: 1000
    });
});


