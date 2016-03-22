var profile = null;

onmessage = function(e) {
  console.log(e);
  if(e.userNum) profile.userNum = e.userNum;
  if(e.togglePlay) profile.togglePlay = e.togglePlay;
  if(e.locationLive) profile.locationLive = e.locationLive;
}

function locationLive(){
    if(profile.hasOwnProperty("locationLive") && profile.hasOwnProperty("togglePlay")) {
        if (profile.togglePlay == "on") {
            if (!navigator.geolocation) {
                return;
            }

            function success(position) {
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
            }

            navigator.geolocation.getCurrentPosition(success, error);
        }
    }
}

function startWorker() {
    setTimeout("window.locationLive()",1);
}

startWorker();