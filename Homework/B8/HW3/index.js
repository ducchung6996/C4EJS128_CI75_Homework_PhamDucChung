let date = parseInt(prompt('Nhập vào ngày'));
let month = parseInt(prompt('Nhập vào tháng'));
let year = parseInt(prompt('Nhập vào năm'));
let monthsHave31Days = [1, 3, 5, 7, 8, 10, 12];

if (monthsHave31Days.includes (month)) {
    totalDayOfThisMonth = 31
} else if (month == 2 && (year % 4 == 0)) {
    totalDayOfThisMonth = 29
} else if (month == 2 && (year % 4 != 0)) {
    totalDayOfThisMonth = 28
} else {
    totalDayOfThisMonth = 30
}

if (date == totalDayOfThisMonth) {
    date = 1
    month += 1
} else {
    date += 1
}

if (month >= 12) {
    month = 1
    year +=1
}

if (date > 0 && date <= totalDayOfThisMonth) {
    dateFormat = true
} else {
    dateFormat = false
}

if (month > 0 && month <= 12) {
    monthFormat = true
} else {
    monthFormat = false
}

if (year > 0) {
    yearFormat = true
} else {
    yearFormat = false
}

if (dateFormat == true && monthFormat == true && yearFormat == true) {
    alert(`Ngày mai là:\nNgày ${date} tháng ${month} năm ${year}`)
} else {
    alert(`Bạn đã nhập sai`)
}