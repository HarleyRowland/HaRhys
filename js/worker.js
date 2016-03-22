function locationLive(){
    if(window.hasOwnProperty("locationLive") && window.hasOwnProperty("togglePlay")) {
        if (window.togglePlay == "on") {
            if (!navigator.geolocation) {
                return;
            }

            function success(position) {
                window.longitude = position.coords.longitude;
                window.latitude = position.coords.latitude;
                var RESTReturn = "undefined";

                function cb(data) {
                    RESTReturn = data;
                }

                sendRESTRequest("http://raptor.kent.ac.uk:3000/locationUpdate?userNum=" + window.userNum + "&longitude=" + position.coords.longitude + "&latitude=" + position.coords.longitude, "POST", cb);

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
    setTimeout("locationLive()",1);
}

startWorker();