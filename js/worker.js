function timed(){
  setTimeout(function(){ 
    postMessage('ready to post');
    timed();
  }, 3000);
}

timed();