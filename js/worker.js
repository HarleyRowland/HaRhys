var profile = null;

onmessage = function(e) {
  console.log(e);
  if(e.userNum) profile.userNum = e.userNum;
  if(e.togglePlay) profile.togglePlay = e.togglePlay;
  if(e.locationLive) profile.locationLive = e.locationLive;
  console.log(e.userNum);
  console.log(e.togglePlay);
  console.log(e.locationLive);
  console.log("profile in message", profile);
}

function locationLive(){
	while(profile == null){}
	    	console.log("in no if")
	    	console.log(profile);
    if(profile && profile.hasOwnProperty("locationLive") && profile.hasOwnProperty("togglePlay")) {
    	console.log("in first if")
        if (profile.togglePlay == "on") {

        	    	console.log("in second if")

            if (!navigator.geolocation) {
                return;
            }
                	console.log("past third if")


            function success(position) {
            	console.log("success");
                var RESTReturn = "undefined";

                function cb(data) {
                    RESTReturn = data;
                }

                sendRESTRequest("http://raptor.kent.ac.uk:3000/locationUpdate?userNum=" + profile.userNum + "&longitude=" + position.coords.longitude + "&latitude=" + position.coords.longitude, "POST", cb);

                while (RESTReturn == "undefined") {
                }

                if (RESTReturn == true) {
                    console.log("location update successful");
                }
                else {
                }
            }

            function error() {
            	console.log("error");
            }

            navigator.geolocation.getCurrentPosition(success, error);
        }
    }
}

function startWorker() {
    setTimeout("locationLive()",1);
}

startWorker();