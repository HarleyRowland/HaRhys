setTimeout(changeLanding, 5000);
var next = "calculator";
function changeLanding() {
	if(next == "workers"){
		$('.landing .layer').css("background-image", "url(assets/workers.jpg)");  
		next = "calculator";
	} else if(next == "calculator"){
		$('.landing .layer').css("background-image", "url(assets/calculator.jpg)"); 
		next = "diary"; 
	} else if(next == "diary"){
		$('.landing .layer').css("background-image", "url(assets/diary.jpg)");  
		next = "ipad";
	} else {
		$('.landing .layer').css("background-image", "url(assets/ipad.jpg)");  
		next = "workers";
	}
  	tid = setTimeout(changeLanding, 5000);
}

setTimeout(bounceArrow, 4000);
function bounceArrow() {
	$('.landing .fa').addClass('bounce');
	$('.landing .fa').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $('.landing .fa').removeClass('bounce');
    });
  	tid = setTimeout(bounceArrow, 4000);
}

function abortTimer() {
  clearTimeout(tid);
}

 $( ".landing .button").click(function() {
	$('html, body').animate({
  		scrollTop: $(".about").offset().top
	}, 1500);
});

$( ".fa-angle-down").click(function() {
    $('html, body').animate({
      	scrollTop: $(".about").offset().top
    }, 1500);
});