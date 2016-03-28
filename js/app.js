/**
 * Description: Main JavaScript file for the Frontend application
 * Authors: Arben and Harley
 */
var profile = {};
function sendRESTRequest(url, type, cb){
    $.ajax({
        url: url,
        type: type,
        crossDomain: true,
        async: false,
        success: function(data) {
            cb(data);
        },
        error: function(data) {
            cb(data);
        }
    });
}

function submitNumber() {
    if((phoneNumberValidation(document.getElementById("telephone").value))) {
        profile.userNum = document.getElementById("telephone").value;
        profile.fingerPrint = new Fingerprint().get();
        var RESTReturn = "undefined";
        function cb(data) {
            RESTReturn = data;
        }
        sendRESTRequest("http://raptor.kent.ac.uk:3000/numberStatus?userNum=" + profile.userNum, "POST", cb);

        while (RESTReturn == "undefined") {
        }

        if(RESTReturn == 1){
            endState("Welcome back!");
        }
        else{
            var RESTReturn = "undefined";
            function cb(data) {
                RESTReturn = data;
            }
            sendRESTRequest("http://raptor.kent.ac.uk:3000/newUser?userNum=" + profile.userNum + "&deviceID=" + profile.fingerPrint, "POST", cb);

            while (RESTReturn == "undefined") {
            }

            if(RESTReturn == true){
                endState("Welcome to LookUp!");
                var RESTReturn = "undefined";
                function cb(data) {
                    RESTReturn = data;
                }
                sendRESTRequest("http://raptor.kent.ac.uk:3000/iceBreaker?userNum=" + profile.userNum, "POST", cb);

                while (RESTReturn == "undefined") {
                }
            }
            else{
                document.getElementById("app").innerHTML = "" +
                "<p style='margin-top: 50px;'>Something went wrong with our application... please try again another time.</p>" +
                "<form style='text-align: center'>" +
                "<input type=\"tel\" id=\"telephone\" required><br/><br/><br/>" +
                "<button type=\"button\" id=\"submitNumberButton\" onclick=\"submitNumber()\">Submit!</button>" +
                "</form>";
            }
        }
    }
    else{
        document.getElementById("app").innerHTML = "" +
        "<p style='margin-top: 50px;'>Please enter your mobile number so that you can register! Please remember, registration will only work if you are connected to the Eduroam network.</p>" +
        "<form style='text-align: center'>" +
        "<input type=\"tel\" id=\"telephone\" required><br/><br/><br/>" +
        "<button type=\"button\" id=\"submitNumberButton\" onclick=\"submitNumber()\">Submit!</button>" +
        "</form>" +
        "<p>This number format is not recognised! Try one of the below formats! (Spaces are optional)</p>" +
        "<ul>" +
        "   <li>07___ ___ ___</li>" +
        "   <li>44 7___ ___ ___</li>" +
        "</ul>";
    }
}

function logout(){
    profile = {};
    document.getElementById("app").innerHTML = "" +
    "<p style='margin-top: 50px;'>Please enter your mobile number so that you can register! Please remember, registration will only work if you are connected to the Eduroam network.</p>" +
    "<form style='text-align: center'>" +
    "<input type=\"tel\" id=\"telephone\" required><br/><br/><br/>" +
    "<button type=\"button\" id=\"submitNumberButton\" onclick=\"submitNumber()\">Submit!</button>" +
    "</form>";

    /** http://stackoverflow.com/questions/179355/clearing-all-cookies-with-javascript **/
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function removeUser(){
    var RESTReturn = "undefined";
    function cb(data) {
        RESTReturn = data;
    }
    sendRESTRequest("http://raptor.kent.ac.uk:3000/deleteUser?userNum=" + profile.userNum, "POST", cb);

    while (RESTReturn == "undefined") {
    }

    if(RESTReturn == true){
        profile = {};
        document.getElementById("app").innerHTML = "" +
        "<p style='margin-top: 50px;'>Please enter your mobile number so that you can register! Please remember, registration will only work if you are connected to the Eduroam network.</p>" +
        "<form style='text-align: center'>" +
        "<input type=\"tel\" id=\"telephone\" required><br/><br/><br/>" +
        "<button type=\"button\" id=\"submitNumberButton\" onclick=\"submitNumber()\">Submit!</button>" +
        "</form>";

        /** http://stackoverflow.com/questions/179355/clearing-all-cookies-with-javascript **/
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }
    else{
        document.getElementById("app").innerHTML = document.getElementById("app").innerHTML +
        "<p>Something went wrong with removing your credentials... please try again another time.</p>"
    }
}

function phoneNumberValidation(number){
    var phoneNumberFormat = /([4]{2}[ ]?|[0])[7][0-9]{3}[ ]?[0-9]{3}[ ]?[0-9]{3}/;
    if(number.match(phoneNumberFormat)){
        return true;
    }
    else{
        return false;
    }
}

function locationLive(){
    if(profile.hasOwnProperty("locationLive")) {
        if (!navigator.geolocation) {
            return;
        }

        function success(position) {
            var longitude = position.coords.longitude;
            var latitude = position.coords.latitude;
            var RESTReturn = "undefined";

            function cb(data) {
                RESTReturn = data;
            }

            sendRESTRequest("http://raptor.kent.ac.uk:3000/locationUpdate?userNum=" + profile.userNum + "&longitude=" + longitude + "&latitude=" + latitude, "POST", cb);

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

function endState(text){
    document.getElementById("app").innerHTML = "" +
    "<p style='margin-top: 50px;'>" + text + "</p>" +
    "<button type=\"button\" id=\"infoButton\" onclick=\"toggleInfo()\">?</button>" +
    "<button type=\"button\" id=\"logoutButton\" onclick=\"logout()\">Logout</button>" +
    "<a id=\"removeUserTag\" onclick=\"removeUser()\">Opt Out</a>";

    profile.locationLive = "true";

    if(document.cookie == "") {
        for (var key in profile) {
            if (profile.hasOwnProperty(key)) {
                setCookie(key, profile[key], 1);
            }
        }
    }

    window.setInterval(function () {
        locationLive();
    }, 10000);
}

/** http://www.w3schools.com/js/js_cookies.asp **/
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

/** http://www.w3schools.com/js/js_cookies.asp **/
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function checkforCookies(){
    if(document.cookie != "") {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            profile.name = getCookie(name);
        }
        endState("Welcome back!");
    }
    else{
        document.getElementById("app").innerHTML = "" +
        "<p style='margin-top: 50px;'>Please enter your mobile number so that you can register! Please remember, registration will only work if you are connected to the Eduroam network.</p>" +
        "<form style='text-align: center'>" +
        "<input type=\"tel\" id=\"telephone\" required><br/><br/><br/>" +
        "<button type=\"button\" id=\"submitNumberButton\" onclick=\"submitNumber()\">Submit!</button>" +
        "</form>";
    }
}

function toggleInfo(){
    var info = "<p id=\"infoText\" style='margin-top: 50px;'>LookUp is an application which encourages close-proximity interactions. Users will receive a 'LookUp' text when they are in close proximity. We want to use mobile phones to stimulate real-word face to face interactions.</p>";
    if(document.getElementById("infoText")){
        $("#infoText").remove();
    }
    else{
        document.getElementById("app").innerHTML = document.getElementById("app").innerHTML + info;
    }
}