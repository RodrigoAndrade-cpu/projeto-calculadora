
var display = document.querySelector("#display");

function showDisplay(value) {
    if (value == ".") {
        diaplay.value = "0";
    }
    display.value += value;
}

function clearALL() {
    display.value = "";
}

function result() {
    let y = eval(display.value);
    display.value = y;

    if (display.value == "undefined") {
        display.value = "";
    }
}