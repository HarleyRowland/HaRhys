function timed(){
  setTimeout(function(){ 
    console.log("hello");
    timed();
  }, 3000);
}

timed();