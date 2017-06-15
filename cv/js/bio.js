$( "#contact-in-bio" ).click(function() {
	$('html, body').animate({
  		scrollTop: $("#contact").offset().top-50
	}, 1500);
});

var bio = true;
var bioInView = function(){
	if(bio){
		$('#bio .content').css('opacity', '1');
		bio = false;
	} else {
		bioInView();
	}
	$('#bio .content').css('opacity', '1');
} 

bioInView();