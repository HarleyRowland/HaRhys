setTimeout(bounceArrow, 4000);
function bounceArrow() {
	$('#landing #bouncingArrow').addClass('bounce');
	$('#landing #bouncingArrow').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $('#landing #bouncingArrow').removeClass('bounce');
    });
  	setTimeout(bounceArrow, 4000);
}

$( "#bouncingArrow" ).click(function() {
	$('html, body').animate({
  		scrollTop: $("#bio").offset().top-50
	}, 1500);
});

$( ".clear" ).click(function(){
  $('#name').val('');
  $('#subject').val('');
  $('#email').val('');
  $('#email-body').val('');
  $('.count').text("Characters until send: 30");
});