$(window).scroll(function () {
    $('header').toggleClass('bg__scroll', $(this).scrollTop() > 100);
    // $('.responsive__nav-menu').css('background-color', 'transparent', $(this).scrollTop() > 136);

});

$(document).ready(function () {
    $('.hero__background-carousel').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        fade: true,
        cssEase: 'ease-out',
        useTransform: true,
        arrows: false,
        dots: false,
        centerMode: true,
    });
    $('.marketplace__top-slider').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        fade: true,
        cssEase: 'ease-out',
        useTransform: true,
        arrows: true,
        dots: true,
        centerMode: true,
    });

    $('.community__speaks').slick({
        centerMode: true,
        slidesToShow: 3,
        arrows: true,
        speed: 500,
        centerPadding: '60px',
        variableWidth: true,

        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.interest__container').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth: true,
        infinite: true,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // centerMode: true,
                }
            }
        ]
    });

    $('.best-rated__container').slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth: true,
        infinite: true,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.news-update__wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth: true,
        infinite: true,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.marketplace__product-wrapper').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.marketplace__stores-product-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        // centerMode: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.business-directory__recommend-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        variableWidth: true,
        autoplay: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });



});


// star ratings
$(".marketplace__product-rating-stars").starRating({
    initialRating: 4,
    strokeColor: '#ffffff',
    strokeWidth: 10,
    starSize: 15,
    totalStars: 5,
    starShape: 'rounded',
    emptyColor: 'lightgray',
    hoverColor: '#E6B712',
    activeColor: '#E6B712',
    useGradient: false,
    readOnly: true,
});

$(".quickview__modal-ratings-stars").starRating({
    initialRating: 3.5,
    strokeColor: '#ffffff',
    strokeWidth: 10,
    starSize: 20,
    totalStars: 5,
    starShape: 'rounded',
    emptyColor: 'lightgray',
    hoverColor: '#E6B712',
    activeColor: '#E6B712',
    useGradient: false,
    callback: function (currentRating, $el) {
        alert('rated ' + currentRating);
        console.log('DOM element ', $el);
    }
});

$(document).ready(function () {
    $(window).on('load', function () {
        $('.hero').css("background-color", "rgba(0,0,0,1)");
    });
});


$('.quickview__modal-quantity-increase').on('click', function () {
    $('.quickview__modal-quantity-figure').get(0).value++;
})

$('.quickview__modal-quantity-reduce').on('click', function () {
    $('.quickview__modal-quantity-figure').get(0).value--;
})


var expanded = false;

function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}