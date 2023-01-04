"use strict";

const dateElement = document.getElementById("dateTime");
const display = document.getElementById("display");
const borders = document.getElementsByClassName("border");
const messageElement = document.getElementById("message");
const startFrom = document.getElementById("startFrom");
const toValue = document.getElementById("toValue");
const generateButton = document.getElementById("generateButton");
const replayElement = document.getElementById("playAgain");
const correctColor = "#00aa00";
const incorrectColor = "#ff0000";
const dateUpdate = function () {
    dateElement.innerHTML = new Date();
};
let resetDisplay;
let randomNumber;
let userInput;

setInterval(dateUpdate, 1000);
replayElement.style.display = "none";

function updateDisplay(value) {
    if (display.innerHTML === "0" || resetDisplay === true) {
        display.innerHTML = value;
        resetDisplay = false;
    } else {
        display.innerHTML += value;
    }
    if (generateButton.innerHTML === "Generated!")
        generateButton.innerHTML = "Generate";
}
function playAgain() {
    display.innerHTML = "0";
    randomNumber = 0;
    messageElement.innerHTML = "";
    replayElement.style.display = "none";
}
function generateRandomNumber(startFrom, endValue) {
    randomNumber = Math.trunc(
        Math.random() * (Number(endValue.value) - 1) + Number(startFrom.value),
    );
    generateButton.innerHTML = "Generated!";
}
function guessNumber() {
    userInput = Number(display.innerHTML);
    if (userInput === randomNumber) {
        console.log("Executed");
        document.getElementById("topBorder").style.backgroundColor =
            correctColor;
        document.getElementById("bottomBorder").style.backgroundColor =
            correctColor;
        document.getElementById("leftBorder").style.backgroundColor =
            correctColor;
        document.getElementById("rightBorder").style.backgroundColor =
            correctColor;
        messageElement.style.backgroundColor = correctColor;
        messageElement.style.color = "white";
        messageElement.innerHTML = `Yay... That's my number!`;
        replayElement.style.display = "block";
        resetDisplay = true;
    } else if (userInput > randomNumber) {
        console.log("Executed");
        document.getElementById("topBorder").style.backgroundColor =
            incorrectColor;
        document.getElementById("bottomBorder").style.backgroundColor =
            incorrectColor;
        document.getElementById("leftBorder").style.backgroundColor =
            incorrectColor;
        document.getElementById("rightBorder").style.backgroundColor =
            incorrectColor;
        messageElement.style.backgroundColor = incorrectColor;
        messageElement.style.color = "white";
        messageElement.innerHTML = `Hmm... You went a bit high there.`;
        display.innerHTML = 0;
    } else if (userInput < randomNumber) {
        console.log("Executed");
        document.getElementById("topBorder").style.backgroundColor =
            incorrectColor;
        document.getElementById("bottomBorder").style.backgroundColor =
            incorrectColor;
        document.getElementById("leftBorder").style.backgroundColor =
            incorrectColor;
        document.getElementById("rightBorder").style.backgroundColor =
            incorrectColor;
        messageElement.style.backgroundColor = incorrectColor;
        messageElement.style.color = "white";
        messageElement.innerHTML = `Umm... That's a bit low.`;
        display.innerHTML = 0;
    }
}