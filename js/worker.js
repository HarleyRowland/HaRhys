var profile = null;

onmessage = function(e) {
  console.log(e);
}

function locationLive(){
    if(profile.hasOwnProperty("locationLive") && profile.hasOwnProperty("togglePlay")) {
        if (profile.togglePlay == "on") {
            if (!navigator.geolocation) {
                return;
            }

            function success(position) {
                window.longitude = position.coords.longitude;
                profile.latitude = position.coords.latitude;
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
    setTimeout("window.locationLive()",10000);
}

startWorker();