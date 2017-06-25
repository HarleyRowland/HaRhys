var mouseScroll = function(){
	if($(window).scrollTop() < 100){
	    $('#nav-bar').css('background-color', 'rgba(0,0,0,0)');
	} else {
	    $('#nav-bar').css('background-color', '#FFFFFE');
	}
} 

$(window).on('mousewheel', function(){
  mouseScroll();
});

mouseScroll();