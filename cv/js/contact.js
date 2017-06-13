initAPI()

$("#email-body").keyup(function(){
  console.log("hi")
  if($("#email-body").val().length < 30){
    $('.count').text("Characters until send: " + (30 - $("#email-body").val().length));      
  } else {
    $('.count').text("Characters left: " + (500 - $("#email-body").val().length));      
  }
});

$(".submit-button").click(function(){
  sendMail()
});

function sendMail() {
  $('.email-button').attr('disabled','disabled');

  var name = escape(document.getElementById('name').value);
  var number = escape(document.getElementById('number').value);
  var email = escape(document.getElementById('email').value);
  var subject = escape(document.getElementById('subject').value);
  var body = escape(document.getElementById('email-body').value);

  var url = "https://arcane-anchorage-33274.herokuapp.com/email?name="+name+"&subject="+subject+"&email="+email+"&number="+number+"&body="+body;

  var canSend = validateForm(name, email, subject, body); 
  callAPI(canSend, url, body);
}

var initAPI = function(){
  $.ajax({
      url: "https://arcane-anchorage-33274.herokuapp.com", 
      success: function(result){
        $('.email-button').removeAttr('disabled');
      }, 
      error: function (xhr, ajaxOptions, thrownError) {
        console.log(xhr.status, thrownError);
        alert("There has been an error sending this message. Please try again later!")
        $('.email-button').removeAttr('disabled');
      }
    });
}

var callAPI = function(canSend, url, body){
  if(canSend){
    $.ajax({
      url: url, 
      success: function(result){
        console.log("MESSAGE SENT!")
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

var validateForm = function(name, email, subject, body){
  var canSend = true;

  if(name == ""){
    $('#name').addClass('animated shake');
    canSend = false;
    $('#name').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $('#name').removeClass('shake');
    });

  }
  if(!validateEmail(email)){
  	console.log(email)
    $('#email').addClass('animated shake');
    canSend = false;
    $('#email').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $('#email').removeClass('shake');
    });
  }
  if(subject == ""){
    $('#subject').addClass('animated shake');
    canSend = false;
    $('#subject').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $('#subject').removeClass('shake');
    });
  }
  if(body == "" || body.length < 30){
    canSend = false;
    $('#email-body').addClass('animated shake');
    $('#email-body').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $('#email-body').removeClass('shake');
    });
  }
  return canSend;
}

var validateEmail = function(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}