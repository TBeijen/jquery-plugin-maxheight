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
                // minimized height
                $this.height(0);
                var docMinH = $(document).height();

                // 2000px height
                $this.height(2000);
                var docMaxH = $(document).height();

                // determine viewport height and calculate how much to reduce
                var vpH = $(window).height();
                var reduce = docMaxH - vpH;

                // apply new height
                var newH = 2000 - reduce;
                $this.height(newH);
            });
        }).resize();
    };
})(jQuery);