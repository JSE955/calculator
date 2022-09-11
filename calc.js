function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case 'x':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
        default:
            console.log('No appropriate operator');
    }
}

let displayValue;
let currentOperator = "";
let firstOperand;
let nextClick = false;

const calcDisplay = document.querySelector('#calcDisplay');

const numberButtons = document.querySelectorAll('.numberBtn');
const operatorButtons = document.querySelectorAll('.operatorBtn');
const equalButton = document.querySelector('.equalBtn');
const clearButton = document.querySelector('.clearBtn');

// Populates calculator's display when number button is clicked
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (nextClick === true) {
            nextClick = false;
            calcDisplay.value = "";
        }
        calcDisplay.value = calcDisplay.value + button.textContent;
        displayValue = calcDisplay.valueAsNumber;
    });
});

// Sets up operation to be performed
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (currentOperator != "") {
            displayValue = operate(currentOperator, firstOperand, displayValue);
            calcDisplay.value = displayValue;
        }
        firstOperand = displayValue;
        currentOperator = button.textContent;
        nextClick = true;
    });
});

equalButton.addEventListener('click', () => {
    displayValue = operate(currentOperator, firstOperand, displayValue);
    calcDisplay.value = displayValue;
    firstOperand = displayValue;
    nextClick = true;
    currentOperator = "";
})

// Clears calculator display and resets value
clearButton.addEventListener('click', () => {
    calcDisplay.value = "";
    currentOperator = "";
    firstOperand = undefined;
    displayValue = undefined;
    nextClick = false;
});