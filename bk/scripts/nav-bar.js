var isAtTop = function(){
  // if($(window).scrollTop() == 0){
  //   $('.top-bar').css('background-color', 'rgba(0,0,0,0)');
  // } else {
  //   $('.top-bar').css('background-color', 'rgba(50,50,50, 1)');
  // }
}

$(window).on('mousewheel', function(){
  isAtTop();
}); 


function openNav() {
  if($("#mySidenav").width() > 1){
    document.getElementById("mySidenav").style.width = "0";
  } else {
    document.getElementById("mySidenav").style.width = "250px";
  }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}