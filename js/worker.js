var profile = {
	userNum: null,
	togglePlay: null,
	locationLive: null,
};

onmessage = function(e) {
  console.log("e.data[0].", e.data[0]);

  if(e.data[0].userNum) profile.userNum = e.data[0].userNum;
  if(e.data[0].togglePlay) profile.togglePlay = e.data[0].togglePlay;
  if(e.data[0].locationLive) profile.locationLive = e.data[0].locationLive;
}

function timed(){
  setTimeout(function(){ 
    console.log("hello");
  }, 3000);
}

timed();