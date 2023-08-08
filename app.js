var css = document.querySelector("h3");
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var rButton = document.getElementById('randomize');
// generate a random number 1-15
//  3 alike lists with num 1-9 and A-F
// loop through the lists until counter reaches that random number and take results as XX pair to value then repeat two more times then concat the values as a string then pass them through another function.


var green = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
var red = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
var blue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

function randList(list) {
    var randNum = Math.floor(Math.random() * 15) + 1;
    x = list[randNum]
    var randNum2 = Math.floor(Math.random() * 15) + 1;
    y = list[randNum2]

    return x + y
}

function combineHex() {
    var first = randList(green);
    var second = randList(red);
    var third = randList(blue);
    var hex = first + second + third
    return hex
}

// dry DO NOT repeat yourself
function setGradient() {
    body.style.background = "linear-gradient(to right, "
        + color1.value
        + ","
        + color2.value
        + ")"

    css.textContent = body.style.background + ";";

    rButton.style.background = "linear-gradient(to right, "
        + color1.value
        + ","
        + color2.value
        + ")"


}

function randomizeColor(hex1, hex2) {
    color1.value = "#" + hex1;
    color2.value = "#" + hex2;
}
// call back function no need to call in now
color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

rButton.addEventListener('click', function () {
    randList(green);
    randList(red);
    randList(blue);
    hex1 = combineHex();
    hex2 = combineHex();
    randomizeColor(hex1, hex2);
    setGradient();
});
