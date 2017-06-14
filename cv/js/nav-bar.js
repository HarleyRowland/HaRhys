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