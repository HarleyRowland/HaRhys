setTimeout(changeLanding, 5000);
var next = "london";
function changeLanding() {
	if(next == "london"){
		$('.landing').css("background-image", "url(assets/london.jpg)");  
		next = "guiting";
	} else if(next == "guiting"){
		$('.landing').css("background-image", "url(assets/guiting.jpg)"); 
		next = "plitvice"; 
	} else {
		$('.landing').css("background-image", "url(assets/plitvice.jpg)");  
		next = "london";
	}
  	tid = setTimeout(changeLanding, 5000);
}

function abortTimer() {
  clearTimeout(tid);
}