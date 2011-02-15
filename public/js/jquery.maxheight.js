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

			// obtain amount to reduce from viewport height or determine
			var data = $this.data('maximizeHeight');
			if (!data) {
			
				$this.height(2000);
				var docMaxH = $(document).height();
				
				// determine viewport height and calculate how much to reduce
				var vpH = $(window).height();
				var reduce = docMaxH - vpH;
				var reduce = $('body').outerHeight(true) - vpH;
				
				// apply new height
				var calcH = 2000 - reduce;

				var vpReduce = vpH - calcH;
				data = {'vpReduce': vpReduce};
				$this.data('maximizeHeight', data);
			}

			
			var vpH = $(window).height();
			var newH = vpH - data.vpReduce;
			if (newH < 0) {
				newH = 0;
			}
			$this.height(newH);

			return;
			// return if currently running to prevent circular resize events
//			if (data.running) {
			//	return;
	//		}
			//data.running = true;
			//$this.data('maximizeHeight', data);
			
			
			// 2000px height

		
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


			log(vpReduce);
			
//			data.running = false;
//			$this.data('maximizeHeight', data);
			
		});
    };
})(jQuery);