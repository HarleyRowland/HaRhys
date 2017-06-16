var bioInView = function(){
	if($('#bio').visible(true)){
		$('#bio .content').css('opacity', '1');
	}
}

var mouseScroll = function(){
	bioInView();
	if($(window).scrollTop() < 100){
	    $('#nav-bar').css('background-color', 'rgba(0,0,0,0)');
	} else {
	    $('#nav-bar').css('background-color', '#1A1423');
	}
	$('.prog-bar div').each(function(){
		if($(this).visible()){
			var width = $(this).attr("progress")
			$(this).css('width', width)
		}
	});
	$('.slot').each(function(){
		if($(this).visible()){
			$(this).css('opacity', '1');
		}
	});
} 

$(window).on('mousewheel', function(){
  mouseScroll();
});

mouseScroll();