var displaySeconds = false; // Global variable to track whether to show seconds

function updateTime() {
    var currentTime = new Date(); // Gets the current time
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var name = "";


    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }


    var timeString = hours + ":" + minutes;


    if (displaySeconds) {
        timeString += ":" + seconds;
    }

    var timeElement = document.getElementById("time");
    timeElement.innerHTML = timeString;


    document.getElementById("time").onmouseover = function (){addSeconds()}
    document.getElementById("time").onmouseout = function (){removeSeconds()}
}

document.getElementById("name").contentEditable;


function addSeconds(){
    displaySeconds = true;
    updateTime();
}

function removeSeconds(){
    displaySeconds = false;
    updateTime();
}
updateTime();
setInterval(updateTime, 1000);
