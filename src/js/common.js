!(function($){
	$(window).scroll(function(){
		var ws = $(window).scrollTop();
		$('.scroll').each(function(){
			var t = $(this);
			var isScroll = (t.offset().top-ws <= $(window).height()/1.2);
			if(isScroll){
				$(this).addClass('active').removeClass('scroll');
			}
		});
		console.log($(window).height()/2 +','+ ws);
		// $('.slider').css("top",$(document).height()-ws*1-50);
		if(ws > ($(window).height()/2)){
			$('.slider .back').show(0);
		}else{
			$('.slider .back').hide(0);
		}
		
	}).trigger("scroll");

	$(document).on('click','.back',function(){
		$('html,body').animate({scrollTop: '0px'}, 800);
	});
})(jQuery)