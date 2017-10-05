setTimeout(bounceArrow, 4000);
function bounceArrow() {
	$('#landing .bouncingArrow').addClass('bounce');
	$('#landing .bouncingArrow').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $('#landing .bouncingArrow').removeClass('bounce');
    });
  	setTimeout(bounceArrow, 4000);
}


$( ".bouncingArrow" ).click(function() {
  $('html, body').animate({
      scrollTop: $("#packages").offset().top-50
  }, 1500);
});