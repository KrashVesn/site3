$(document).ready(function() {
	$('.auth_button').click(function() {
		$(this).next().slideToggle(); 
	});
	$('.main_menu_button').click(function() {
		$('.main_menu ul').slideToggle(); 
	});
	$('.enter').click(function() {
		var docHeight = $(document).height();
   	$("body").append("<div id='overlay'></div>");
   	$("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.4,
         'position': 'absolute',
         'top': 0,
         'left': 0,
         'background-color': 'black',
         'width': '100%',
         'z-index': 5000
      });
	});
	// var wh1 = $(window).height();
	// var wh2 = $('.top_header').height();
	// var wh = wh1 - wh2 -100; 
	// $('#animate').css({
	// 	'height' : wh,
	// 	'width' : '100%',
	// });
	// $('canvas').css({
	// 	'height' : wh,
	// 	'width' : '1170px'
	// });
	$("a[href*='#s_1']").mPageScroll2id({
		offset : 0,
		scrollSpeed : 500, 
	});
	$("a[href*='#s_2']").mPageScroll2id({
		offset : 0,
		scrollSpeed : 500, 
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 150) {
			$(".main_content_sidebar1").show("slow"); 
			$(".picture1").show("slow"); 
		}
		if ($(this).scrollTop() < 150) {
			$(".main_content_sidebar1").hide("slow"); 
			$(".picture1").hide("slow"); 
		}
	}); 
	$(window).scroll(function() {
		if ($(this).scrollTop() > 500) {
			$(".main_content_sidebar2").show("slow"); 
			$(".picture2").show("slow"); 
		}
		if ($(this).scrollTop() < 500) {
			$(".main_content_sidebar2").hide("slow"); 
			$(".picture2").hide("slow"); 
		}
	});        
});