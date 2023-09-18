// Creates a function for addition  on the calculator
const add = function (a, b) => a + b;

// Creates a function for subtraction on the calculator
const subtract = function (a, b) => a - b;
  
// Creates a function for multiplication on the calculator
const multiply = function (a, b) => a * b;

// Creates a function for division on the calculator
const divide = function (a, b) => a / b;

// Variables for the calulcator operation
let firstNumber = "";

let operationType = "";

let secondNumber = "";

// Write an equation that is firstNumber, operator, secondNumber
const operate = function (firstNumber, operationType, secondNumber) {
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

- a function that takes the 2 numbers (from the variable) and applies 
the operation to it (call the new function "operate")


