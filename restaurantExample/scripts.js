var today = function(){
	var d = new Date();
	var n = d.getDay();
	var special = "";
	var times = "";
	if (n == 0){
		special = "American Hot Pizza";
		times = "from noon until 10pm";
		$(".special").attr("src", "assets/amerHot.png");
	} else if(n == 1){
		special = "Pasta Arrabiatta";
		times = "from 11am until 10pm";
		$(".special").attr("src", "assets/arrabiatta.png");
	} else if(n == 2){
		special = "Spaghetti Bolognese";
		times = "from 11am until 10pm";
		$(".special").attr("src", "assets/spagBol.png");
	} else if(n == 3){
		special = "Meat Feast Pizza";
		times = "from 11am until 10pm";
		 $(".special").attr("src", "assets/meaty.png");
	} else if(n == 4){
		special = "Spicy Chicken Pizza";
		times = "from 11am until 10pm";
		$(".special").attr("src", "assets/chicken.png");
	} else if(n == 5){
		special = "Texas BBQ Pizza";
		times = "from noon until midnight";
		$(".special").attr("src", "assets/bbq.png");
	} else if(n == 6){
		special = "Lasange";
		times = "from noon until midnight";
		$(".special").attr("src", "assets/lasagne.png");
	}
	return "We are open today " + times + ". The special for today is our " + special + ". We hope we see you today!";
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