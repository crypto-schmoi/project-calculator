// Creates a function for addition  on the calculator
let add = function (a, b) {
    return a + b;
}

// Creates a function for subtraction on the calculator
let subtract = function (a, b) {
    return a - b;
}
  
// Creates a function for multiplication on the calculator
let multiply = function (a, b) {
    return a * b;
} 

// Creates a function for division on the calculator
let divide = function (a, b) {
    return a / b;
} 

// // Variables for the calulcator operation
let firstNumber = "";

let operationType = "";

let secondNumber = "";


// Equation that calls the function when a particular operation type is selected
let operate = function (firstNumber, operationType, secondNumber) {

    firstNumber = parseFloat(firstNumber); // Convert strings to numbers
    secondNumber = parseFloat(secondNumber);

    if (operationType === "+") {
        return (firstNumber + secondNumber).toFixed(2);
    } else if (operationType === "-") {
        return (firstNumber - secondNumber).toFixed(2); 
    } else if (operationType === "*") {
        return (firstNumber * secondNumber).toFixed(2); 
    } else if (operationType === "/") {
        if (secondNumber === 0) {
            return ("Sorry no can do"); // Display error message if divided by 0
        }
        return (firstNumber / secondNumber).toFixed(2);
    }

    console.log('operate working')
}

const display = document.querySelector('.display');

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
    let displayString = "";
    if (firstNumber) {
        displayString += firstNumber;
    }
    if (operationType) {
        displayString += operationType;
    }
    if (displayValue) {
        displayString += displayValue;
    }
    return displayString;
}

let isEnteringSecondNumber = false;


// Event listeners for the buttons on the calculator to update the display when a button is clicked
zeroButton.addEventListener('click', function() {
    if (isEnteringSecondNumber) {
        displayValue += '0';
        secondNumber += '0'; // Store in the secondNumber
    } else {
        firstNumber += '0'; // Store in the firstNumber
    }
    display.textContent = updateDisplay();
});

oneButton.addEventListener('click', function() {
    if (isEnteringSecondNumber) {
        displayValue += '1';
        secondNumber += '1'; // Store in the secondNumber
    } else {
        firstNumber += '1'; // Store in the firstNumber
    }
    display.textContent = updateDisplay();
});

twoButton.addEventListener('click', function() {
    if (isEnteringSecondNumber) {
        displayValue += '2';
        secondNumber += '2'; // Store in the secondNumber
    } else {
        firstNumber += '2'; // Store in the firstNumber
    }
    display.textContent = updateDisplay();
});

threeButton.addEventListener('click', function() {
    if (isEnteringSecondNumber) {
        displayValue += '3';
        secondNumber += '3'; // Store in the secondNumber
    } else {
        firstNumber += '3'; // Store in the firstNumber
    }
    display.textContent = updateDisplay();
});

fourButton.addEventListener('click', function() {
    if (isEnteringSecondNumber) {
        displayValue += '4';
        secondNumber += '4'; // Store in the secondNumber
    } else {
        firstNumber += '4'; // Store in the firstNumber
    }
    display.textContent = updateDisplay();
});

fiveButton.addEventListener('click', function() {
    if (isEnteringSecondNumber) {
        displayValue += '5';
        secondNumber += '5'; // Store in the secondNumber
    } else {
        firstNumber += '5'; // Store in the firstNumber
    }
    display.textContent = updateDisplay();
});

sixButton.addEventListener('click', function() {
    if (isEnteringSecondNumber) {
        displayValue += '6';
        secondNumber += '6'; // Store in the secondNumber
    } else {
        firstNumber += '6'; // Store in the firstNumber
    }
    display.textContent = updateDisplay();
});

sevenButton.addEventListener('click', function() {
    if (isEnteringSecondNumber) {
        displayValue += '7';
        secondNumber += '7'; // Store in the secondNumber
    } else {
        firstNumber += '7'; // Store in the firstNumber
    }
    display.textContent = updateDisplay();
});

eightButton.addEventListener('click', function() {
    if (isEnteringSecondNumber) {
        displayValue += '8';
        secondNumber += '8'; // Store in the secondNumber
    } else {
        firstNumber += '8'; // Store in the firstNumber
    }
    display.textContent = updateDisplay();
});

nineButton.addEventListener('click', function() {
    if (isEnteringSecondNumber) {
        displayValue += '9';
        secondNumber += '9'; // Store in the secondNumber
    } else {
        firstNumber += '9'; // Store in the firstNumber
    }
    display.textContent = updateDisplay();
});

additionButton.addEventListener('click', function() {
    if (firstNumber !== "") {
        operationType = "+";
        isEnteringSecondNumber = true;
        display.textContent = updateDisplay();
    }
});

subtractButton.addEventListener('click', function() {
    if (firstNumber !== "") {
        operationType = "-";
        isEnteringSecondNumber = true;
        display.textContent = updateDisplay();
    }
});

multiplyButton.addEventListener('click', function() {
    if (firstNumber !== "") {
        operationType = "*";
        isEnteringSecondNumber = true;
        display.textContent = updateDisplay();
    }
});

divisionButton.addEventListener('click', function() {
    if (firstNumber !== "") {
        operationType = "/";
        isEnteringSecondNumber = true;
        display.textContent = updateDisplay();
    }
});

equalsButton.addEventListener('click', function() {
    if (firstNumber !== "" && operationType !== "" && secondNumber !== "") {
        secondNumber = parseFloat(displayValue); // Set the second number as the current display value
        const result = operate(firstNumber, operationType, secondNumber);
        displayValue = result.toString();
        display.textContent = displayValue; // Update the display with the result
        firstNumber = ""; 
        operationType = ""; // Reset operationType
        secondNumber = ""; // Reset secondNumber
        isEnteringSecondNumber = false; // Reset to entering the first number
    }
});


clearButton.addEventListener('click', function() {
    displayValue = "";
    firstNumber = "";
    operationType = "";
    secondNumber = "";
    display.textContent = updateDisplay();
});
