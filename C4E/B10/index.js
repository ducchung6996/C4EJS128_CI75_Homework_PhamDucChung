const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


function clock() {
    let dateObj = new Date();
    document.getElementById("weekday").innerText = weekdays[dateObj.getDay()];
    document.getElementById("days").innerText = convertNum(dateObj.getDate());
    document.getElementById("month").innerText = months[dateObj.getMonth()];
    document.getElementById("hours").innerText = convertNum(dateObj.getHours());
    document.getElementById("minutes").innerText = convertNum(dateObj.getMinutes());
    document.getElementById("seconds").innerText = convertNum(dateObj.getSeconds());
}

function convertNum(num) {
    return num < 10 ? "0" + num : num;
}

let timeConting = setInterval(clock, 1000);

