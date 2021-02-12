$(document).ready(function () {

    // first Carousel 
    $('.carousel').carousel({
        interval: 7000,
        pause: hover,
    });

});

// first Carousel 

// owl Courses

$('.owlcourses').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

// Owl Courses

$('.owlreviews').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 30,
    nav: false,
    dots: true,
    animateOut: 'fadeOut',
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});
