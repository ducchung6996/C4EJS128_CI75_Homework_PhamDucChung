const weekdays = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"];
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];


function clock() {
    let dateObj = new Date();
    let days = document.getElementById("days")
    let hours = document.getElementById("hours");
    let month = document.getElementById("month");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");

    weekday.innerText = weekdays[dateObj.getDay()];
    days.innerText = convertNum(dateObj.getDate());
    month.innerText = months[dateObj.getMonth()];
    hours.innerText = convertNum(dateObj.getHours());
    minutes.innerText = convertNum(dateObj.getMinutes());
    seconds.innerText = convertNum(dateObj.getSeconds());
}

function convertNum(num) {
    return  num <  10 ? "0" + num : num;
}
let timeConting = setInterval(clock, 1000);

