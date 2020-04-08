var $animation_elements = $('.check-in-view');
var $animation_elements_1 = $('.check-in-view-1');
var $animation_elements_2 = $('.check-in-view-2');
var $animation_elements_3 = $('.check-in-view-3');

var $window = $(window);
function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position) && ($(window).width() > 992)
            ) {
            // banner 1

        }
        else {
            // banner 1

            
        }
    });

    $.each($animation_elements_1, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position) && ($(window).width() > 992)
            ) {
            // banner 2
            
        }
        else {
            // banner 2
            
        }
    });

    $.each($animation_elements_2, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position) && ($(window).width() > 992)
            ) {
            // banner 3
            
        }
        else {
            // banner 3

        }
    });

    $.each($animation_elements_3, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position) && ($(window).width() > 992)
            ) {
            // banner 4
            
        }
        else {
            // banner 4
        }
    });
};
$window.on('load scroll resize', check_if_in_view);
$window.trigger('scroll');


