// Creates a function for addition  on the calculator
const add = function (a, b) {
    return a + b;
}

// Creates a function for subtraction on the calculator
const subtract = function (a, b) {
    return a - b;
}
  
// Creates a function for multiplication on the calculator
const multiply = function (a, b) {
    return a * b;
} 

// Creates a function for division on the calculator
const divide = function (a, b) {
    return a / b;
} 

// Variables for the calulcator operation
let firstNumber = "";

let operationType = "";

let secondNumber = "";


// Equation that calls the function when a particular operation type is selected
let operate = function (firstNumber, operationType, secondNumber) {
    if (operationType === "+") {
        return (firstNumber + secondNumber);
    } else if (operationType === "-") {
        return (firstNumber - secondNumber); 
    } else if (operationType === "*") {
        return (firstNumber * secondNumber); 
    } else if (operationType === "/") {
        return (firstNumber / secondNumber);
    }
}

// Create the functions that populate the display when you click the 
// number buttons. You should be storing the ‘display value’ in a variable 
// somewhere for use in the next step.

const display = document.querySelector('display');

// Variables for the buttons on the calculator
const zeroButton = document.querySelector('.zero');
const oneButton = document.querySelector('.one');
const twoButton = document.querySelector('.two');
const threeButton = document.querySelector('.three');
const fourButton = document.querySelector('.four')
const fiveButton = document.querySelector('.five');
const sixButton = document.querySelector('.six');
const sevenButton = document.querySelector('.seven');
const eightButton = document.querySelector('.eight');
const nineButton = document.querySelector('.nine');
const equalsButton = document.querySelector('.equals');
const additionButton = document.querySelector('.addition');
const subtractButton = document.querySelector('.subtraction');
const multiplyButton = document.querySelector('.multiplication');
const divisionButton = document.querySelector('.division');
const clearButton = document.querySelector('.clear');

// Variable for storing the display value to track digits being entered
let displayValue = "";

function updateDisplay() {
    return displayValue;
}

// Event listeners for the buttons on the calculator to update the display when a button is clicked
zeroButton.addEventListener('click', function() {
    displayValue += '0';
});

oneButton.addEventListener('click', function() {
    displayValue += '1';
});

twoButton.addEventListener('click', function() {
    displayValue += '2';
});

threeButton.addEventListener('click', function() {
    displayValue += '3';
});

fourButton.addEventListener('click', function() {
    displayValue += '4';
});

fiveButton.addEventListener('click', function() {
    displayValue += '5';
});

sixButton.addEventListener('click', function() {
    displayValue += '6';
});

sevenButton.addEventListener('click', function() {
    displayValue += '7';
});

eightButton.addEventListener('click', function() {
    displayValue += '8';
});

nineButton.addEventListener('click', function() {
    displayValue += '9';
});

equalsButton.addEventListener('click', function() {
    return operate;
});