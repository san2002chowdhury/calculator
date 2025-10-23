const inputBox = document.querySelector("input");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const decimal = document.querySelector(".decimal")
const deleteOne = document.querySelector('.delete-one');
const deleteAll = document.querySelector('.delete-all');
const evaluation = document.querySelector("#valuation");


let operand1 = 0;
let operand2 = 0;
let result = 0;
let expression = "";


numbers.forEach(number => {
    number.addEventListener("click", () => {
        inputBox.value += number.value;
    })
})
operators.forEach(operator => {
    operator.addEventListener("click", () => {
        operand1 = Number(inputBox.value);
        expression = operator.innerHTML;
        inputBox.value = "";
    })
})

decimal.addEventListener("click", () => {
    if (!inputBox.value.includes('.'))
        inputBox.value += '.';
    return false;
})

deleteOne.addEventListener("click", () => {
    inputBox.value = inputBox.value.slice(0, -1);
})

deleteAll.addEventListener("click", () => {
    inputBox.value = "";
})

evaluation.addEventListener("click", () => {
    operand2 = Number(inputBox.value);
    if (expression === '+') {
        result = operand1 + operand2;
        inputBox.value = result;
        operand1 = result;
        result = 0;
        operand2 = 0;
    }
    else if (expression === '-') {
        result = operand1 - operand2;
        inputBox.value = result;
        operand1 = result;
        result = 0;
        operand2 = 0;
    }
    else if (expression === '*') {
        result = operand1 * operand2;
        inputBox.value = result;
        operand1 = result;
        result = 0;
        operand2 = 0;
    }
    else if (expression === '/') {
        result = operand1 / operand2;
        inputBox.value = result.toFixed(2);
        operand1 = result;
        result = 0;
        operand2 = 0;
    }
    else if (expression === '%') {
        result = operand1 / 100;
        inputBox.value = result;
        operand1 = result;
        result = 0;
        operand2 = 0;
    }
    else if (expression === 'x^') {
        result = operand1 ** operand2;
        inputBox.value = result;
        operand1 = result;
        result = 0;
        operand2 = 0;
    }

})

