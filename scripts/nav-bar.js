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

  $( "#nav-contact" ).click(function() {
    $('html, body').animate({
      scrollTop: $(".contact-me").offset().top
    }, 1500);
  });

  $( "#menu-top" ).click(function() {
    $('html, body').animate({
      scrollTop: $("body").offset().top
    }, 1500);
    $('.drop-down').hide();
  });

  $( "#menu-about" ).click(function() {
    $('html, body').animate({
      scrollTop: $(".about-me").offset().top
    }, 1500);
    $('.drop-down').hide();
  });

  $( "#menu-contact" ).click(function() {
    $('html, body').animate({
      scrollTop: $(".contact-me").offset().top
    }, 1500);
    $('.drop-down').hide();
  });

  $( ".menu" ).click(function(e) {
    e.preventDefault();
    if($(".drop-down").visible()){
      $('.drop-down').hide();
    } else {
      $('.drop-down').show();      
    }
  });

$(window).resize(function() {
  if(window.innerWidth > 640){
    $('.drop-down').hide();
  }
});

$(window).on('mousewheel', function(){
  if($(".landing .title").visible()){
    $("#nav-landing, #menu-top").addClass("active");
    $("#nav-about, #menu-about").removeClass("active");
    $("#nav-contact, #menu-contact").removeClass("active");
  }
  if($(".about-me .image").visible()){
    $("#nav-about, #menu-about").addClass("active");
    $("#nav-landing, #menu-top").removeClass("active");
    $("#nav-contact, #menu-contact").removeClass("active");
  }
  if($(".email-form").visible()){
    $("#nav-contact, #menu-contact").addClass("active");
    $("#nav-landing, #menu-top").removeClass("active");
    $("#nav-about, #menu-about").removeClass("active");
  }
}); 