/*
 * maxheight
 *
 * jQuery plugin that maximizes height of elements without causing
 * viewport scrollbars.
 *
 * Copyright (c) 2011 Tibo Beijen
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($){
    $.fn.maxheight = function() {
        var pluginScope = this;
        $(window).resize(function(){
            return pluginScope.each(function() {
                $this = $(this);

                if (console && console.log) {
                    console.log('document (height, innerH, outerH, outerH(true):');
                    console.log($(document).height());
//                console.log($(document).innerHeight());
//                console.log($(document).outerHeight());
//                console.log($(document).outerHeight(true));

                    console.log('window (height, innerH, outerH, outerH(true):');
                    console.log($(window).height());
//                console.log($(window).innerHeight());
//                console.log($(window).outerHeight());
//                console.log($(window).outerHeight(true));

                    console.log('body (height, innerH, outerH, outerH(true):');
                    console.log($('body').height());
                    console.log($('body').innerHeight());
                    console.log($('body').outerHeight());
                    console.log($('body').outerHeight(true));
                }
                
                // 2000px height
                $this.height(2000);
                var docMaxH = $(document).height();

                // determine viewport height and calculate how much to reduce
                var vpH = $(window).height();
                var reduce = docMaxH - vpH;

                // TODO: determine min-height as set in css or given as param.
                // avoid setting height lower than 0

                // apply new height
                var newH = 2000 - reduce;
                if (newH < 0) {
                    newH = 0;
                }
                $this.height(newH);
            });
        }).resize();
    };
})(jQuery);