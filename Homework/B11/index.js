const buttons = document.getElementsByClassName("numb");
const result = document.getElementById("result");
const subScreen = document.getElementById("sub-screen");
const mainScreen = document.getElementById("main-screen");
const math = document.getElementsByClassName("math");
const dot = document.getElementsByClassName("dot")

function equal() {
    if (subScreen.innerText == "" || mainScreen.innerText == "") {
        return
    }
    let result = eval(subScreen.innerText + mainScreen.innerText);
    mainScreen.innerText = parseFloat((result).toPrecision(12));
    subScreen.innerText = "";
}

for (let number of buttons) {
    number.addEventListener('click', function () {
        mainScreen.innerText += this.value;
    });
}

for (let number of math) {
    number.addEventListener('click', function () {
        if (subScreen.innerText != "" && mainScreen.innerText != "") {
            let result = eval(subScreen.innerText + mainScreen.innerText);
            subScreen.innerText = (parseFloat((result).toPrecision(12)) + " " + this.value);
            mainScreen.innerText = "";
        }
        if (subScreen.innerText == "") {
            subScreen.innerText += (mainScreen.innerText + " " + this.value);
            mainScreen.innerText = "";
        } else {
            return
        }
    });
}

function dots() {
    if (mainScreen.innerText.includes('.')) {
        return
    }
    mainScreen.innerText += ".";
}

function erase() {
    mainScreen.innerText = "";
    subScreen.innerText = "";
}

function undo() {
    let nums = mainScreen.innerText;
    mainScreen.innerText = nums.slice(0, -1);
}
