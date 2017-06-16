var isAtTop = function(){
	if($(window).scrollTop() < 100){
	    $('#nav-bar').css('background-color', 'rgba(0,0,0,0)');
	} else {
	    $('#nav-bar').css('background-color', '#1A1423');
	}
} 

$(window).on('mousewheel', function(){
  isAtTop();
});
isAtTop();

$( "#logo" ).click(function() {
	$('html, body').animate({
  		scrollTop: $("#landing").offset().top+20
	}, 1500);
});

$( "#top-link" ).click(function() {
	$('html, body').animate({
  		scrollTop: $("#landing").offset().top-50
	}, 1500);
});

$( "#bio-link" ).click(function() {
	$('html, body').animate({
  		scrollTop: $("#bio").offset().top-50
	}, 1500);
});

$( "#skills-link" ).click(function() {
	$('html, body').animate({
  		scrollTop: $("#skills").offset().top-50
	}, 1500);
});

$( "#timeline-link" ).click(function() {
	$('html, body').animate({
  		scrollTop: $("#timeline").offset().top-50
	}, 1500);
});

$( "#contact-link" ).click(function() {
	$('html, body').animate({
  		scrollTop: $("#contact").offset().top-50
	}, 1500);
});

$( ".fa-bars" ).click(function() {
	$(".mobile-menu").show()
});

$( "#close-menu" ).click(function(e) {
	 e.preventDefault()
	$(".mobile-menu").hide()
});

$( "#top-mobile-link" ).click(function() {
	$(".mobile-menu").hide()
	$('html, body').animate({
  		scrollTop: $("#landing").offset().top-50
	}, 1500);
});

$( "#bio-mobile-link" ).click(function() {
	$(".mobile-menu").hide()
	$('html, body').animate({
  		scrollTop: $("#bio").offset().top-50
	}, 1500);
});

$( "#skills-mobile-link" ).click(function() {
	$(".mobile-menu").hide()
	$('html, body').animate({
  		scrollTop: $("#skills").offset().top-50
	}, 1500);
});

$( "#timeline-mobile-link" ).click(function() {
	$(".mobile-menu").hide()
	$('html, body').animate({
  		scrollTop: $("#timeline").offset().top-50
	}, 1500);
});

$( "#contact-mobile-link" ).click(function() {
	$(".mobile-menu").hide()
	$('html, body').animate({
  		scrollTop: $("#contact").offset().top-50
	}, 1500);
});