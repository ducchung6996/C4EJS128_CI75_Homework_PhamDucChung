function clock() {
    const weekdays = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"];
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let days = document.getElementById("days")
    let hours = document.getElementById("hours");
    let month = document.getElementById("month");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    
    let dateObj = new Date();
    let today = dateObj.getDay();
    let currentDate = dateObj.getDate();
    let currentMonth = dateObj.getMonth();
    let currentHours = dateObj.getHours();
    let currentMinutes = dateObj.getMinutes();
    let currentSeconds = dateObj.getSeconds();

    weekday.innerHTML = weekdays[today];
    days.innerHTML = convertNum(currentDate);
    month.innerHTML = months[currentMonth];
    hours.innerHTML = convertNum(currentHours);
    minutes.innerHTML = convertNum(currentMinutes);
    seconds.innerHTML = convertNum(currentSeconds);
}
function convertNum(num) {
    return  num <  10 ? "0" + num : num;
}
let timeConting = setInterval(clock, 1000);

