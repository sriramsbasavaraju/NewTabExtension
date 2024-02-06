const date = Date().now;




function updateTime() {
    var currentTime = new Date(); // Gets the current time
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    
    // Add leading zeros to hours, minutes, and seconds if they are less than 10
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;

    document.getElementById("time").innerHTML = timeString; // Updates the HTML element with id 'time'
}