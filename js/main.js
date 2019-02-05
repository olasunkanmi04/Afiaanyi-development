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

$(".user-review-stars").starRating({
    initialRating: 4,
    strokeColor: '#E6B712',
    strokeWidth: 10,
    starSize: 18,
    totalStars: 5,
    starShape: 'rounded',
    emptyColor: 'transparent',
    hoverColor: '#E6B712',
    activeColor: '#E6B712',
    useGradient: false,
    readOnly: true,
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

function showCheckboxesDays() {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}

function showCheckboxesHours() {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}




$(function () {


    function slide() {
        //grap slider wrapper

        var inWrap = $('.slides');

        //animate to the left inner wrapper
        inWrap.animate({
            left: '0%'
        }, 3000, function () {

            inWrap.css('left', '-100%');

            $('.slide').first().before($('.slide').last());

        });

    }

    setInterval(slide, 10000);



    function secondSlide() {

        if ($(window).width() < 940) {
            let secSlide = $('.featured-images');

            secSlide.animate({
                left: '-100%'
            }, 3000, function () {

                secSlide.css('left', '-50%');

                $('.featured-images__card').last().after($('.featured-images__card').first());

            });
        } else {
            let secSlide = $('.featured-images');

            secSlide.animate({
                left: '-68%'
            }, 3000, function () {

                secSlide.css('left', '-34%');

                $('.featured-images__card').last().after($('.featured-images__card').first());

            });
        }


    }

    setInterval(secondSlide, 8000);

    function thirdSlider() {
        let thirdSlide = $('.card-wrapper__outer');

        thirdSlide.animate({
            left: '-68%'
        }, 3000, function () {

            thirdSlide.css('left', '-34%');

            $('.service__card').last().after($('.service__card').first());

        });
    }

    setInterval(thirdSlider, 9000);


    function fourthSlide() {

        let fourthSlide = $('.testimonials');

        fourthSlide.animate({
            left: '20%'
        }, 3000, function () {

            fourthSlide.css('left', '0%');

            $('.paper').first().before($('.paper').last());

        });
    }

    setInterval(fourthSlide, 8000);


    let slideContainer = $(".slider__container");
    // let prev = document.querySelector(".hero__slider-nav");
    let next = document.querySelector(".hero__slider-nav");

    $('.hero__slider-nav--left').on('click', movePrevious);
    $('.hero__slider-nav').on('click', moveNext);

    function movePrevious() {
        console.log('clicked previous')
        slideContainer.animate({
            left: '0%'
        }, 500, function () {
            slideContainer.css('left', '-100%');
            $('.slide--market').first().before($('.slide--market').last());
            $('.legend').last().before($('.legend').first());
        });
    }

    function moveNext() {
        console.log('clicked next')
        slideContainer.animate({
            left: '-200%'
        }, 500, function () {
            slideContainer.css('left', '-100%');
            $('.slide--market').last().before($('.slide--market').first());
            $('.legend').first().before($('.legend').last());
        });
    }

    $(".pause").on('click', pause);
    $(".play").on('click', play);

    function pause() {

        let pause = document.querySelector(".pause");
        pause.classList.add("hide");
        let play = document.querySelector(".play");
        play.classList.remove("hide");
        intervalSetter('pause');

    }

    function play() {
        let pause = document.querySelector('.pause');
        pause.classList.remove("hide");
        let play = document.querySelector(".play");
        play.classList.add("hide");
        // setInterval(moveNext, 11000);
        intervalSetter();
    }
    let autoMove;

    function intervalSetter(value) {

        if (!value) {
            autoMove = setInterval(moveNext, 11000);
        } else {
            clearInterval(autoMove);
        }
    }

    intervalSetter();


});