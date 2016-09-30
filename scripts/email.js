$( "#submit-button" ).click(function(){
  sendMail();
});

function sendMail() {
  $('.email-button').attr('disabled','disabled');

  var canSend = validateForm(true);
  

  callAPI(canSend);
}

var validateForm = function(canSend){
  var name = escape(document.getElementById('name').value);
  var subject = escape(document.getElementById('subject').value);
  var email = escape(document.getElementById('email').value);
  var body = escape(document.getElementById('email-body').value);
  
  if(name == ""){
    $('#name').addClass('animated shake');
    canSend = false;
    $('#name').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $('#name').removeClass('shake');
    });

  }
  if(subject == ""){
    $('#subject').addClass('animated shake');
    canSend = false;
    $('#subject').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $('#subject').removeClass('shake');
    });
  }
  if(!validateEmail(email)){
    $('#email').addClass('animated shake');
    canSend = false;
    $('#email').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $('#email').removeClass('shake');
    });
  }
  if(body == ""){
    canSend = false;
    $('#email-body').addClass('animated shake');
    $('#email-body').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $('#email-body').removeClass('shake');
    });
  }
  return canSend;
}

var callAPI = function(canSend){
  if(canSend){
    var url = "https://arcane-anchorage-33274.herokuapp.com/email?name="+name+"&subject="+subject+"&email="+email+"&body="+body;
    
    $.ajax({
      url: url, 
      success: function(result){
        alert("You have sent '" + unescape(body)   + "' to Harley Rowland");
        $('.email-button').removeAttr('disabled');
      }, 
      error: function (xhr, ajaxOptions, thrownError) {
        console.log(xhr.status, thrownError);
        alert("There has been an error sending this message. Please try again later!")
        $('.email-button').removeAttr('disabled');
      }
    });
  } else {
    $('#submit-button').removeAttr('disabled'); 
  }
}



var validateEmail = function(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}