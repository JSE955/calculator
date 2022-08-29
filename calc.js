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
        case '*':
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
const calcDisplay = document.querySelector('#calcDisplay');

const numberButtons = document.querySelectorAll('.numberBtn');
const clearButton = document.querySelector('.clearBtn');

// Populates calculator's display when number button is clicked
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        calcDisplay.value = calcDisplay.value + button.textContent;
        displayValue = calcDisplay.valueAsNumber;
    });
});

// Clears calculator display and resets value
clearButton.addEventListener('click', () => {
    calcDisplay.value = "";
});