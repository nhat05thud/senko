(function ($) {
    $(window).load(function () {
    });
    $(window).resize(function () {
    });
    $(function () {
        addParamImage();
        mymap();
        myfunload();
        $("img.lazy").lazyload({
            threshold: 200
        });
    });
})(jQuery);
$(document).ready(function () {
    initOwlCarousel();
    changeImageSlider();
    $('.fancybox').fancybox();
    initLazyColors();
});
function addParamImage() {
    var width = $(window).width();
    if (width > 1366) {
        width = 1260;
    }
    $(".addParamImage").each(function () {
        var url = $(this).data("src");
        if (url) {
            url = url +
                "?anchor=center&mode=crop&width=" + width + "&slimmage=true&rnd=" + Date.now();
            $(this).attr('data-src', url);
        }
    });

}
function initLazyColors() {
    $("#tabColors").click(function () {
        var images = $("#tab2").find(".imgLazy");
        images.each(function() {
            var src = $(this).data("src");
            $(this).attr("src", src);
        });
    });
}
function initOwlCarousel() {
    $('.mainBanner').owlCarousel({
        margin: 0,
        lazyLoad: true,
        items:1,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 7000
    });
    $('.menu-child').owlCarousel({
        margin: 50,
        lazyLoad: true,
        items:7,
        loop: false,
        nav: true,
        dots: false,
        autoplay: false
    });
    $('.moreImage').owlCarousel({
        margin: 10,
        lazyLoad: true,
        items: 5,
        loop: false,
        nav: true,
        dots: false,
        autoplay: false
    });

}
function malihuScroll() {
    $('.asideAbout .wrap .cate').mCustomScrollbar({
        autoHideScrollbar: true,
        theme: "dark-thick",
        scrollbarPosition: "outside"
    });
}

function changeImageSlider() {
    $(".product-info .info-left .moreImage .item").click(function () {
        var itemImg = $(this).children("img").attr("data-large");
        var itemId = $(this).children("img").attr("data-id");
        $(".product-info .info-left .mainImage").children("img").attr({
            "src": itemImg,
            "data-id": itemId
        });
    });
    $(".product-info .info-left .mainImage img").click(function () {
        var itemId = $(this).attr("data-id");
        $(".fancybox[id='" + itemId +"']").click();
    });
}

//function===============================================================================================
/*=============================fun=========================================*/
function myfunload() {
    $(".panel-a").mobilepanel();
    $("#menu > li").not(".home").clone().appendTo($("#menuMobiles"));
    $("#menuMobiles input").remove();
    $("#menuMobiles > li > a").append('<span class="fa fa-chevron-circle-right iconar"></span>');
    $("#menuMobiles li li a").append('<span class="fa fa-angle-right iconl"></span>');
    
    /* accodion FAQ */
    /* accodion tin van */
    $(".tin-content:not(:first)").hide();
    // Áp dụng sự kiện click vào thẻ h3
    $(".tin-title").click(function () {
        // chọn .accordion (do phần tử đi đi ngay sau phần tử h3 nên ta dùng .next())
        $(".tin-title").removeClass('active');
        $accordion = $(this).next();
        // Kiểm tra nếu đang ẩn thì sẽ hiện và ẩn các phần tử khác
        // Nếu đang hiện thì click vào h3 sẽ ẩn
        if ($accordion.is(':hidden') === true) {
            $(".tin-content").slideUp();
            $accordion.slideDown();
            $(this).addClass('active');
        } else {
            $accordion.slideUp();
            $(".tin-title").removeClass('active');
        }
    });
}
/*=========================================================================*/
//================== scroll top
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scroll-to-top').fadeIn();
    } else {
        $('.scroll-to-top').fadeOut();
    }
});

//$(window).scroll(function () {
//    if ($(this).scrollTop() > 90) {
//        $('#header').addClass('bot-head-scroll');
//        $('#main-content').addClass('main-content-scroll');
//    }
//    else {
//        $('#header').removeClass('bot-head-scroll');
//        $('#main-content').removeClass('main-content-scroll');
//    }
//});

$('.scroll-to-top').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
});

function DoEqualSizer(myclass) {
    var heights = $(myclass).map(function () {
        $(this).height('auto');
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
    $(myclass).height(maxHeight);
};
function EqualSizer(myclass) {
    $(document).ready(DoEqualSizer(myclass));
    window.addEventListener('resize', function () {
        DoEqualSizer(myclass);
    });
};
//==================
function mymap() {
    mympp();
    var timeout;
    $(window).resize(function () {
        clearTimeout(timeout);
        setTimeout(function () {
            mympp();
        }, 500);
    });
}
function mympp() {
    $('#mapwrap').remove();
    if ($(window).width() > 768) {
        $('#mapshow').append('<div id="mapwrap"><iframe id="iframe" src="map.aspx" frameborder="0" height="100%" width="100%"></iframe></div>');
    }
}

