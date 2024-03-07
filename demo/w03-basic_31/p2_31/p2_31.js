//const盽计querySelector琩高ˉˇ盽计
const userInput = document.querySelector('#input-number');

const cBtn = document.querySelector('#btn-c');
const fBtn = document.querySelector('#btn-f');

const currentCalculationOutput = document.querySelector('#current-calculation');

const defaultResult = 0;
//计穦э跑砞let跑计
let currentCalculation = defaultResult;

function getUserInput() {
  // return userInput.value
  return parseInt(userInput.value);
}

function outputResult(result, text) {
  currentCalculationOutput.textContent = text;
  currentCalculationOutput.textContent = result;
}

//operand笲衡じ
function c() {
  const operand1 = currentCalculation;

  currentCalculation = operand1 + operand2;
  const calTest = `${operand1} + ${operand2}`;
  //console.log(`${operand1} + ${operand2} = ${current - calculation}`);
  //outputResult(current - calculation, calTest);
}

cBtn.addEventListener('click', c);

function f() {
  f = ((C * 9.0) / 5 + 32).toFixed(2);
}

fBtn.addEventListener('click', f);
