var today = function(){
	var d = new Date();
	var n = d.getDay();
	var special = "";
	var times = "";
	if (n == 0){
		times = "from noon until 10pm";
	} else if(n == 1){
		times = "from 11am until 10pm";
	} else if(n == 2){
		times = "from 11am until 10pm";
	} else if(n == 3){
		times = "from 11am until 10pm";
	} else if(n == 4){
		times = "from 11am until 10pm";
	} else if(n == 5){
		times = "from noon until midnight";
	} else if(n == 6){
		times = "from noon until midnight";
	}
	return "We are open today " + times + ".";
}

var openingTimes = function(){
  var d = new Date();
  var n = d.getDay();
  var special = "";
  var times = "";
  if (n == 0){
    $(".sunday").addClass('active');
  } else if(n == 1){
    $(".monday").addClass('active');
  } else if(n == 2){
    console.log('hello');
    $(".tuesday").addClass('active');
  } else if(n == 3){
     $(".wednesday").addClass('active');
  } else if(n == 4){
    $(".thursday").addClass('active');
  } else if(n == 5){
    $(".friday").addClass('active');
  } else if(n == 6){
    $(".saturday").addClass('active');
  }
}

var menuOverlay = function(){
	$('.menu').click(function(){
    $('.menuOverlay').show();
    $('.menu').hide();
    $('.logo').addClass('menuUp');
  });

  $('.fi-x , .close').click(function(){
    $('.menuOverlay').hide();
    $('.menu').show();
    $('.logo').removeClass('menuUp');
  });
}