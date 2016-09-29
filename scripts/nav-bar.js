$( document ).ready(function() {
  $( ".more-info" ).click(function() {
    $('html, body').animate({
      scrollTop: $(".about-me").offset().top
    }, 1500);
  });

  $( "#nav-landing" ).click(function() {
    $('html, body').animate({
      scrollTop: $("body").offset().top
    }, 1500);
  });

  $( "#nav-about" ).click(function() {
    $('html, body').animate({
      scrollTop: $(".about-me").offset().top
    }, 1500);
  });

  $( "#nav-portfolio" ).click(function() {
    $('html, body').animate({
      scrollTop: $(".portfolio").offset().top
    }, 1500);
  });

  $( "#nav-contact" ).click(function() {
    $('html, body').animate({
      scrollTop: $(".contact-me").offset().top
    }, 1500);
  });

});

$(window).scroll(function(){
  if($(".landing .heading").visible()){
    $("#nav-landing").addClass("active");
    $("#nav-about").removeClass("active");
    $("#nav-contact").removeClass("active");
    $("#nav-portfolio").removeClass("active");
  }
  if($(".bio-text").visible()){
    $("#nav-about").addClass("active");
    $("#nav-landing").removeClass("active");
    $("#nav-contact").removeClass("active");
    $("#nav-portfolio").removeClass("active");
  }
  if($(".email-form").visible()){
    $("#nav-contact").addClass("active");
    $("#nav-landing").removeClass("active");
    $("#nav-about").removeClass("active");
    $("#nav-portfolio").removeClass("active");
  }
  if($(".webLink").visible()){
    $("#nav-portfolio").addClass("active");
    $("#nav-landing").removeClass("active");
    $("#nav-about").removeClass("active");
    $("#nav-contact").removeClass("active");
  }
}); 