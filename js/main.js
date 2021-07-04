
(function ($) {
    $(window).on("load", function () {
        $("#vehicle-list").mCustomScrollbar({
            theme: 'dark'
        });
        // Tao all delay- class cho vehicle product
        $('.vehicle-product').each(function (index) {
            $(this).addClass(`delay-${index + 1}`);
        });
    });
})(jQuery);

function move(value) {
    $('#vehicle-list').mCustomScrollbar("scrollTo", value)
};

$(".nav-vehicle ul li a").click(function () {
    if ($(this).attr('id') === "cars-nav") {
        move("#cars")
    }
})

var count = "";
$('#navbar-left li > .nav-link').click(function () {
    console.log("count", count);
    if (count === "") {
        count = $(this).attr("id");
        console.log(count);
        $(this).addClass('active');
        if (count === "vehicle-link") {
            $('#vehicle').addClass("show-vehicle");
            $('.nav-vehicle').addClass("animate__fadeInDown");
            $('#vehicle-list').addClass("animate__fadeInUp");
        }
    } else {
        if (count === $(this).attr("id")) {
            $(this).removeClass("active");
            count = "";
            $('.nav-vehicle').addClass("animate__fadeOutUp");
            $("#vehicle-list").addClass("animate__fadeOutDown")
            setTimeout(function () {
                $('.nav-vehicle').removeClass("animate__fadeOutUp");
                $('#vehicle').removeClass("show-vehicle");
                $("#vehicle-list").removeClass("animate__fadeOutDown");
            }, 300)

        } else {
            $(`#vehicle-link`).removeClass("active");
            $(`#vehicle`).removeClass("show-vehicle");
            $(this).addClass('active');
            count = "";
        }
    }
})

/* 
    Tao function cho nut close
*/
$(".vehicle-cirle").click(function () {

    $('.nav-vehicle').addClass("animate__fadeOutUp");
    $("#vehicle-list").addClass("animate__fadeOutDown")
    $('#navbar > .nav-link').removeClass('active');
    setTimeout(function () {
        $('.nav-vehicle').removeClass("animate__fadeOutUp");
        $('#vehicle').removeClass("show-vehicle");
        $("#vehicle-list").removeClass("animate__fadeOutDown");
    }, 300)
    count = "";
});

/* 
 Tao hieu ung cho moi vehicle item
*/
$('.vehicle-product').addClass('animate__animated animate__fadeInUp');


/* 
    TAO SWIPER CAROUSEL
 */
const swiper = new Swiper('.swiper-container', {

    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});

// Modifify class active of boostrap carousel
$('.carousel-indicators-config li').click(function () {
    $('.carousel-indicators-config li').removeClass("active");
    $(this).addClass('active');
})

// OUR VEHICLE NAVBAR MODIFICATION
$('.carousel-indicator-xs-header').click(function () {
    $(".carousel-indicator-xs-header p").toggleClass('transform-1');
    $('.carousel-indicator-xs-container').slideToggle();
})

$('.carousel-indicators-xs li').click(function () {
    $('.carousel-indicator-xs-header .selection').html($(this).html());
    $('.carousel-indicator-xs-container').slideUp();
    $(".carousel-indicator-xs-header p").toggleClass('transform-1');
})

// Add function for arrow in our-vehicle carousel
var vehicle = 0;
$('.carousel-control-prev').click(function () {
    $('.carousel-indicators-config li').removeClass("active");
    if (vehicle == 0) {
        vehicle = 4;
    } else {
        vehicle--;
    }
    $('.carousel-indicators-config li').each(function (index) {
        if (index == vehicle) {
            $(this).addClass("active");
            console.log("prev");
            $('.carousel-indicator-xs-header h1 span').html($(this).html())
        }
    })

})

$('.carousel-control-next').click(function () {
    $('.carousel-indicators-config li').removeClass("active");
    if (vehicle == 4) {
        vehicle = 0;
    } else {
        vehicle++;
    }
    $('.carousel-indicators-config li').each(function (index) {
        if (index == vehicle) {
            $(this).addClass("active");
            console.log("next");
            $('.carousel-indicator-xs-header h1 span').html($(this).html())
        }
    })
})
/* 
    BACK TO TOP
*/
$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});

$('.scrollup').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

/* 
    RESPONSIVE USING JS
*/
function CollapseFooter() {
    var windowWidth = $(window).width() - 40;
    console.log(windowWidth);
    if (windowWidth > 992) {
        $('.footer-detail ul').removeClass('collapse');
    } else {
        $('.footer-detail ul').addClass('collapse');
    }
}
$(window).resize(function () {
    CollapseFooter();
})

$(document).ready(function () {
    CollapseFooter();
})