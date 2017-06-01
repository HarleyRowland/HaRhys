setTimeout(bounceArrow, 4000);
function bounceArrow() {
	$('#landing #bouncingArrow').addClass('bounce');
	$('#landing #bouncingArrow').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $('#landing #bouncingArrow').removeClass('bounce');
    });
  	setTimeout(bounceArrow, 4000);
}