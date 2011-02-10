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
		var log = function(msg) {
			$('#log').html($('#log').html() + msg + '<br />');
		}
		
		return this.each(function() {
			$this = $(this);

			// 2000px height
			$this.height(2000);
			var docMaxH = $(document).height();

		
			$('#log').html('');
			
			log(!!document.all);
			
			log('document (height, innerH, outerH, outerH(true):');
			log($(document).height());
//					log($(document).innerHeight());
//					log($(document).outerHeight());
//					log($(document).outerHeight(true));

			log('window (height, innerH, outerH, outerH(true):');
			log($(window).height());
//					log($(window).innerHeight());
//					log($(window).outerHeight());
//					log($(window).outerHeight(true));

			log('body (height, innerH, outerH, outerH(true):');
			log($('body').height());
			log($('body').innerHeight());
			log($('body').outerHeight());
			log($('body').outerHeight(true));
                
			// determine viewport height and calculate how much to reduce
			var vpH = $(window).height();
			var reduce = docMaxH - vpH;
			var reduce = $('body').outerHeight(true) - vpH;

			// TODO: determine min-height as set in css or given as param.
			// avoid setting height lower than 0

			// apply new height
			var newH = 2000 - reduce;
			
			if (newH < 0) {
				newH = 0;
			}
			$this.height(newH);
		});
    };
})(jQuery);