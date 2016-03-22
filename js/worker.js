var profile = {
	userNum: null,
	togglePlay: null,
	locationLive: null,
	geolocator: null
};

onmessage = function(e) {
  console.log("e.data[0].", e.data[0]);

  if(e.data[0].userNum) profile.userNum = e.data[0].userNum;
  if(e.data[0].togglePlay) profile.togglePlay = e.data[0].togglePlay;
  if(e.data[0].locationLive) profile.locationLive = e.data[0].locationLive;
  if(e.data[0].geolocator) profile.geolocator = e.data[0].geolocator;
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


            function success(position) {
            	console.log(position);
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

			var html5Options = { enableHighAccuracy: true, timeout: 6000, maximumAge: 0 };
            profile.geolocator.locate(successful, error, true, html5Options, null);
        }
    }
}

function startWorker() {
    setTimeout("locationLive()",1);
}

startWorker();