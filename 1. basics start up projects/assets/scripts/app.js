const defaultResult = 0;
let currentResult = defaultResult;

// gets input from input field
function getUserNumberInput() {
    return parseInt(usrInput.value);
}

// generatrs and writes calculator log
function creatAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    creatAndWriteOutput('+', initialResult, enteredNumber);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    creatAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    creatAndWriteOutput('*', initialResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    creatAndWriteOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
