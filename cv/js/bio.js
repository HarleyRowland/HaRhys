$( "#contact-in-bio" ).click(function() {
	$('html, body').animate({
  		scrollTop: $("#contact").offset().top-50
	}, 1500);
});

var bioInView = function(){
	if(bio && $('#bio .title').visible()){
		$('#bio .content').css('opacity', '1');
	}
} 

$(window).on( 'scroll', function(event){
	console.log("hello")
  	bioInView();
});
