// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number2 !== 0 ? number1 / number2 : 'Error: Division by zero';
}

// Helper to get input values
function getInputValues() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return { number1, number2 };
}

// Event listeners for calculator buttons
var addBtn = document.getElementById('add');
if (addBtn) {
    addBtn.addEventListener('click', function() {
        const { number1, number2 } = getInputValues();
        const result = add(number1, number2);
        document.getElementById('calculation-result').textContent = result;
    });
}

var subtractBtn = document.getElementById('subtract');
if (subtractBtn) {
    subtractBtn.addEventListener('click', function() {
        const { number1, number2 } = getInputValues();
        const result = subtract(number1, number2);
        document.getElementById('calculation-result').textContent = result;
    });
}

var multiplyBtn = document.getElementById('multiply');
if (multiplyBtn) {
    multiplyBtn.addEventListener('click', function() {
        const { number1, number2 } = getInputValues();
        const result = multiply(number1, number2);
        document.getElementById('calculation-result').textContent = result;
    });
}

var divideBtn = document.getElementById('divide');
if (divideBtn) {
    divideBtn.addEventListener('click', function() {
        const { number1, number2 } = getInputValues();
        const result = divide(number1, number2);
        document.getElementById('calculation-result').textContent = result;
    });
}
