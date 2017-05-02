var calculateAge = function(){
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
  var age;

  if(month > 1){
    age = year;
  } else if(month == 1){
    if(day >= 17){
      age = year;
    } else {
      age = year-1;
    }
  } else {
    age = year-1;
  }
  
  age = age-1993;

  $(".date-of-birth").text(age); 
}