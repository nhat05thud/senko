/**
 * @name: naoTooltips.js
 * @author: Noemi Losada <info@noemilosada.com>
 * @date: 09/07/2016
 * Creative Commons License <http://creativecommons.org/licenses/by-sa/3.0/>
 */

(function($) {

    /**
     * Default options
     *
     * @property defaults
     * @type {object}
     */
    var defaults = {
        speed: 200,
        delay: 200
    };

    /**
     * Config elements
     *
     * @property config
     * @type {object}
     */
    var config = {
        tooltip: 'naoTooltip',
        arrowSize: 16
    };

    /**
     * naoTooltip plugin
     *
     * Usage:
     * $('.naoTooltip-wrap').naoTooltip({ speed: 200 });
     *
     * @method naoTooltip
     * @return {object} this
     */
    $.fn.naoTooltip = function() {
        // Initialize the plugin with the given arguments
        init.apply(this, arguments);

        return this;
    };

    /**
     * @method init
     * @params {object} opts
     * @return {void}
     */
    function init(opts) {
        // Override default options with the custom ones
        var options = $.extend({}, defaults, opts);

        // Save options for the current instance
        this.data(options);

        this.each(function(i, e) {
            animateNaoTooltip($(e), options);
        });
    }

    /**
     * Default show and hide tooltip animations
     *
     * @method animateNaoTooltip
     * @param {object} opts
     * @param {string} selector
     * @return {void}
     */
    function animateNaoTooltip(selector, opts) {
        var tooltip = selector.find('.' + config.tooltip),
            delayHappened = false,
            timer;
        // Show and hide tooltip
        selector.on('mouseenter', function() {
            if (delayHappened === false) {
                timer = setTimeout(function() {
                    delayHappened = true;
                    showTooltip(tooltip, opts.speed);
                }, opts.delay);
            }
            autoOffset(selector, opts);
        }).on('mouseleave', function () {
            /** FIX BY NHAT05**/
            $(".wrapIsotopeTypical .interCate .item").css("z-index", 1);

            /** FIX BY NHAT05 **/
            clearTimeout(timer);

            delayHappened = false;
            hideTooltip(tooltip, opts.speed);
        });
    }

    /**
    *   FIX BY NHAT05
    *   AUTO OFFSET POSITION
    **/
    function autoOffset(selector, opts) {
        var child = selector.children(".content");
        if (selector.children(".content").length != 0) {
            selector.css({
                "z-index": 3,
            });
            var offset = selector.offset();
            if (offset.left > child.outerWidth()) {
                child.css({
                    right: selector.outerWidth() + 10
                });
                child.addClass("nt-left");
            }
            else {
                child.css({
                    left: selector.outerWidth() + 10
                });
                child.addClass("nt-right");
            }
        }
    }




    /**
    *   END FIX BY NHAT05
    **/

    /*=====================================*/
    /*=====================================*/
    /*=====================================*/
    /*=====================================*/
    /*=====================================*/

    /**
     * Show tooltip
     *
     * @method showTooltip
     * @param {object} tooltip
     * @params {object} speed
     * @return {void}
     */
    function showTooltip(tooltip, speed) {
        tooltip.css({ visibility: 'visible' }).animate({
            opacity: 1
        }, speed);
    }

    /**
     * Hide tooltip
     *
     * @method hideTooltip
     * @param {object} tooltip
     * @params {object} speed
     * @return {void}
     */
    function hideTooltip(tooltip, speed) {
        tooltip.animate({
            opacity: 0,
        }, speed, function() {
            tooltip.css({ visibility: 'hidden' });
        });
    }

})(jQuery);
