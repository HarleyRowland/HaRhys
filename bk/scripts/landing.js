setTimeout(changeLanding, 5000);
var next = "notes";
function changeLanding() {
	if(next == "notes"){
		$('.landing').css("background-image", "url(assets/notes.jpg)");  
		next = "calculator";
	} else if(next == "calculator"){
		$('.landing').css("background-image", "url(assets/calculator.jpg)"); 
		next = "diary"; 
	} else if(next == "diary"){
		$('.landing').css("background-image", "url(assets/diary.jpg)");  
		next = "workers";
	} else {
		$('.landing').css("background-image", "url(assets/workers.jpg)");  
		next = "notes";
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