$(document).ready(function(){
	$(window).scroll(function(){
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
			if($("#nav-bar").offset().top > 300){
				$("#nav-bar *").css("color", "#2E2C59");
			} else {
				$("#nav-bar *").css("color", "#FFFFFE");
			}
		} else {
			if($("#nav-bar").offset().top > 150){
				$("#nav-bar").css("background-color", "rgba(86,159,202,0.80)");
			} else {
				$("#nav-bar").css("background-color", "rgba(0,0,0,0)");
			}
		}
	});
});

$( "#top-link" ).click(function() {
	$('html, body').animate({
  		scrollTop: $("#landing").offset().top-50
	}, 1500);
});

$( "#about-link" ).click(function() {
	$('html, body').animate({
  		scrollTop: $("#about").offset().top-50
	}, 1500);
});

$( "#packages-link" ).click(function() {
	$('html, body').animate({
  		scrollTop: $("#packages").offset().top-50
	}, 1500);
});

$( "#testomonials-link" ).click(function() {
	$('html, body').animate({
  		scrollTop: $("#testomonials").offset().top-50
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

$( "#about-mobile-link" ).click(function() {
	$(".mobile-menu").hide()
	$('html, body').animate({
  		scrollTop: $("#about").offset().top-50
	}, 1500);
});

$( "#packages-mobile-link" ).click(function() {
	$(".mobile-menu").hide()
	$('html, body').animate({
  		scrollTop: $("#packages").offset().top-50
	}, 1500);
});

$( "#testomonials-mobile-link" ).click(function() {
	$(".mobile-menu").hide()
	$('html, body').animate({
  		scrollTop: $("#testomonials").offset().top-50
	}, 1500);
});

$( "#contact-mobile-link" ).click(function() {
	$(".mobile-menu").hide()
	$('html, body').animate({
  		scrollTop: $("#contact").offset().top-50
	}, 1500);
});