function sendMail() {
  $('.email-button').attr('disabled','disabled');
  
  var name = escape(document.getElementById('name').value);
  var subject = escape(document.getElementById('subject').value);
  var email = escape(document.getElementById('email').value);
  var body = escape(document.getElementById('email-body').value);
  
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
}