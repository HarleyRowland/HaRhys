/**
 * Created by arbenhaxha on 12/02/2016.
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
        var RESTReturn = "undefined";
        function cb(data) {
            RESTReturn = data;
        }
        sendRESTRequest("http://raptor.kent.ac.uk:3000/numberStatus?userNum=" + profile.userNum, "POST", cb);

        while (RESTReturn == "undefined") {
        }

        if(RESTReturn == 1){
            endState("Welcome back! ~(˘▾˘~)");
        }
        else if(RESTReturn == 2){
            document.getElementById("app").innerHTML = "" +
            "<p style='margin-top: 50px;'>Your number is already registered. Please enter the verification code we have sent you. (If you cannot find it, it is advised you remove your number and register again)</p>" +
            "<form style='text-align: center'>" +
            "<input type=\"tel\" id=\"verificationCode\" required><br/><br/><br/>" +
            "<button type=\"button\" id=\"submitVerificationCodeButton\" onclick=\"submitVerificationCode()\">Send</button><br/><br/><br/>" +
            "</form>" +
            "<button type=\"button\" id=\"removeUserButton\" onclick=\"removeUser()\">Remove my number!</button>";
        }
        else{
            profile.fingerPrint = new Fingerprint().get();
            var RESTReturn = "undefined";
            function cb(data) {
                RESTReturn = data;
            }
            sendRESTRequest("http://raptor.kent.ac.uk:3000/newUser?userNum=" + profile.userNum + "&deviceID=" + profile.fingerPrint, "POST", cb);

            while (RESTReturn == "undefined") {
            }

            if(RESTReturn == true){
                document.getElementById("app").innerHTML = "" +
                "<p style='margin-top: 50px;'>Please enter the verification code that we are sending you!</p>" +
                "<form style='text-align: center'>" +
                "<input type=\"tel\" id=\"verificationCode\" required><br/><br/><br/>" +
                "<button type=\"submit\" id=\"submitVerificationCodeButton\" onclick=\"submitVerificationCode()\">Submit!</button>" +
                "</form>";
            }
            else{
                document.getElementById("app").innerHTML = "" +
                "<p style='margin-top: 50px;'>Something went wrong with our application... please try again another time.</p>" +
                "<form style='text-align: center'>" +
                "<input type=\"tel\" id=\"telephone\" required><br/><br/><br/>" +
                "<button type=\"submit\" id=\"submitNumberButton\" onclick=\"submitNumber()\">Submit!</button>" +
                "</form>";
            }
        }
    }
    else{
        document.getElementById("app").innerHTML = "" +
        "<p style='margin-top: 50px;'>Please enter your mobile number so that we can send you a verification code!</p>" +
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

function submitVerificationCode(){
    if(document.getElementById("verificationCode").value) {
        profile.verificationCode = document.getElementById("verificationCode").value;
        var RESTReturn = "undefined";
        function cb(data) {
            RESTReturn = data;
        }
        sendRESTRequest("http://raptor.kent.ac.uk:3000/authenticatePhoneNumber?userNum=" + profile.userNum + "&authenticationCode=" + profile.verificationCode , "POST", cb);

        while (RESTReturn == "undefined") {
        }

        if(RESTReturn == true){
            endState("Account created! Good Job! ~(˘▾˘~)");
        }
        else if(RESTReturn == false){
            document.getElementById("app").innerHTML = "" +
            "<p style='margin-top: 50px;'>Please enter the verification code that we are sending you!</p>" +
            "<form  style='text-align: center'>" +
            "<input type=\"tel\" id=\"verificationCode\" required><br/><br/><br/>" +
            "<button type=\"button\" id=\"submitVerificationCodeButton\" onclick=\"submitVerificationCode()\">Submit!</button>" +
            "</form>" +
            "<p>The given verification code was incorrect. Make sure to take care when inputting it. If you believe you require a new verification code, remove your number and register again.</p>" +
            "<button type=\"button\" id=\"removeUserButton\" onclick=\"removeUser()\">Remove my number!</button>";
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

function togglePlay(){
    var resolve;
    profile.togglePlay == "on" ? resolve = 0 : resolve = 1;
    var RESTReturn = "undefined";
    function cb(data) {
        RESTReturn = data;
    }
    sendRESTRequest("http://raptor.kent.ac.uk:3000/changePlayStatus?userNum=" + profile.userNum + "&play=" + resolve, "POST", cb);

    while (RESTReturn == "undefined") {
    }

    if(RESTReturn == true) {
        profile.togglePlay == "on" ? profile.togglePlay = "off" : profile.togglePlay = "on";
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
        "<p style='margin-top: 50px;'>Please enter your mobile number so that we can send you a verification code!</p>" +
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

function locationLive(){
    if(profile.hasOwnProperty("locationLive") && profile.hasOwnProperty("togglePlay")) {
        if (profile.togglePlay == "on") {
            if (!navigator.geolocation) {
                return;
            }

            function success(position) {
                profile.longitude = position.coords.longitude;
                profile.latitude = position.coords.latitude;
                var RESTReturn = "undefined";

                function cb(data) {
                    RESTReturn = data;
                }

                sendRESTRequest("http://raptor.kent.ac.uk:3000/locationUpdate?userNum=" + profile.userNum + "&longitude=" + profile.longitude + "&latitude=" + profile.latitude, "POST", cb);

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

function phoneNumberValidation(number){
    var phoneNumberFormat = /([4]{2}[ ]?|[0])[7][0-9]{3}[ ]?[0-9]{3}[ ]?[0-9]{3}/;
    if(number.match(phoneNumberFormat)){
        return true;
    }
    else{
        return false;
    }
}

function endState(text){
    document.getElementById("app").innerHTML = "" +
    "<p style='margin-top: 50px;'>" + text + "</p>" +
    "<input type=\"checkbox\" checked data-toggle=\"toggle\" id=\"togglePlayCheckbox\" data-on=\"LookUp ON\" data-off=\"LookUp OFF\" onchange=\"togglePlay()\"> </input>" +
    "<button type=\"button\" id=\"infoButton\" onclick=\"toggleInfo()\">?</button>" +
    "<button type=\"button\" id=\"removeUserButton\" onclick=\"removeUser()\">Opt Out</button>";

    var RESTReturn = "undefined";
    function cb(data) {
        RESTReturn = data;
    }
    sendRESTRequest("http://raptor.kent.ac.uk:3000/getPlayStatus?userNum=" + profile.userNum, "POST", cb);

    while (RESTReturn == "undefined") {
    }

    if(RESTReturn == true){
        $("#togglePlayCheckbox").bootstrapToggle("on");
        profile.togglePlay = "on";
    }
    else if(RESTReturn == false){
        $("#togglePlayCheckbox").bootstrapToggle("off");
        profile.togglePlay = "off";
    }

    profile.locationLive = "true";

    if(document.cookie == "") {
        for (var key in profile) {
            if (profile.hasOwnProperty(key)) {
                setCookie(key, profile[key], 1);
            }
        }
    }

    window.setInterval(function(){
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
        endState("Welcome back! ~(˘▾˘~)");
    }
    else{
        document.getElementById("app").innerHTML = "" +
        "<p style='margin-top: 50px;'>Please enter your mobile number so that we can send you a verification code!</p>" +
        "<form style='text-align: center'>" +
        "<input type=\"tel\" id=\"telephone\" required><br/><br/><br/>" +
        "<button type=\"button\" id=\"submitNumberButton\" onclick=\"submitNumber()\">Submit!</button>" +
        "</form>";
    }
}

function toggleInfo(){
    var info = "<p id=\"infoText\" style='margin-top: 50px;'>LookUp is an application which encourages close-proximity interactions. It will send a text message to users of LookUp in close proximity and tell them to look up. We want to use mobile phones to encourage real-word interactions.</p>";
    if(document.getElementById("app").innerHTML.indexOf(info) > -1){
        document.getElementById("app").innerHTML = document.getElementById("app").innerHTML.replace(info, "");
    }
    else{
        document.getElementById("app").innerHTML = document.getElementById("app").innerHTML + info;
    }
}