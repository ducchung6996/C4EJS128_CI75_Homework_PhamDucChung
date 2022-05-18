const buttons = document.getElementsByClassName("numb");
const result = document.getElementById("result");
const screen = document.getElementById("screen");
const math = document.getElementsByClassName("math");
let temp = "";

for (let number of buttons) {
    number.addEventListener('click', function () {
        screen.innerText = temp;
        screen.innerText += this.value;
        temp += this.value;
        console.log(temp);
    });
}

for (let number of math) {
    number.addEventListener('click', function () {
        screen.innerText += this.value;
        temp += this.value;
        console.log(temp);
    });
}

function equal() {
    let result = eval(temp);
    screen.innerText = parseFloat((result).toPrecision(12));
    temp = "";
}

function erase() {
    screen.innerText = "";
    temp = "";
}

function undo () {
    let nums = screen.innerText;
    screen.innerText = nums.slice(0, -1);
    let temp1 = temp;
    temp = temp1.slice(0, -1);
}
