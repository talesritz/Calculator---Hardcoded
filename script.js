'use strict';

const btnOne = document.querySelector('.one');
const btnTwo = document.querySelector('.two');
const btnThree = document.querySelector('.three');
const btnFour = document.querySelector('.four');
const btnFive = document.querySelector('.five');
const btnSix = document.querySelector('.six');
const btnSeven = document.querySelector('.seven');
const btnEight = document.querySelector('.eight');
const btnNine = document.querySelector('.nine');
const btnZero = document.querySelector('.zero');
const btnClear = document.querySelector('.clear');
const btnDivide = document.querySelector('.divide');
const btnMultiply = document.querySelector('.multiply');
const btnSubtract = document.querySelector('.subtract');
const btnAddition = document.querySelector('.addition');
const btnEqual = document.querySelector('.equal');
const btnPoint = document.querySelector('.point');
const output = document.querySelector('.output');
let outputString = '';
let outputMath = [];
let empty = true;
let result = 0;
let a, operator, b;
let decimal = false;

function clear() {
  outputMath.splice(0);
  outputString = '';
  result = 0;
  empty = true;
  output.textContent = 0;
  decimal = false;
}

function displayString(array) {
  for (let i = 0; i < array.length; i++) {
    outputString += array[i];
  }
  output.textContent = outputString;
  outputString = '';
}

function isDecimal(el) {
  if (el.includes('.')) {
    decimal = true;
    return true;
  } else {
    decimal = false;
    return false;
  }
}

// it shows two elements and the operator (ex: a + b), it works around the outputMath Array, which will always be filled with 3 values. [0, 1, 2]
function outputBox(input) {
  //We have 3 variables a, b and operator. These are temporary variables in case the user types numbers with more than 1 character.
  if (typeof input === 'number' && empty) {
    outputMath[0] = input;
    displayString(outputMath);
    //this transform numbers into strings in case we get a number with more than 1 character, like 222, 5112
  } else if (typeof input === 'number' && outputMath.length == 1) {
    outputMath[0] = Number((outputMath[0] += String(input)));
    displayString(outputMath);

    // if the person types a operator or commas (, .)
  } else if (typeof input != 'number') {
    //if statement specifically in case the user types . or ,
    //the boolean deciman verifies if the number already is a float, if it is, it just igores this whole
    if (input === ',' || input === '.') {
      if (outputMath.length == 0) {
        outputMath[0] = String(0 + '.');
        decimal = true;
        displayString(outputMath);
        //checking first value
      } else if (outputMath.length == 1) {
        //verifies if the element already has a , or .
        if (!isDecimal(String(outputMath[0]))) {
          outputMath[0] = String(outputMath[0] + '.');
          decimal = true;
        }
        displayString(outputMath);
        //checking if the third element it's there
      } else if (outputMath.length == 2 && !decimal) {
        outputMath[2] = 0 + '.';
        decimal = true;
        displayString(outputMath);
      } else if (outputMath.length == 3) {
        //verifies if the element already has a , or .
        if (!isDecimal(String(outputMath[2]))) {
          outputMath[2] = String(outputMath[2] + '.');
          decimal = true;
        }
        displayString(outputMath);
        //   } else if (!decimal) {
        //     outputMath[2] = Number((outputMath[2] += '.'));
        //     decimal = true;
        //     displayString(outputMath);
      }
    } else if ('* / + -'.includes(input)) {
      if (outputMath.length == 3) {
        equal(outputMath);
        outputMath[1] = input;
        decimal = false;
      } else {
        operator = input;
        outputMath[1] = operator;
        decimal = false;
        displayString(outputMath);
      }
    }
    //if the third element is still undefined
  } else if (typeof input === 'number' && outputMath.length == 2) {
    outputMath[2] = input;
    displayString(outputMath);
  } else if (typeof input === 'number' && outputMath.length === 3) {
    outputMath[2] = Number((outputMath[2] += String(input)));
    displayString(outputMath);
  }
  empty = false;
}

function equal(input) {
  if (input.length == 0) {
    output.textContent = 0;
  } else {
    for (let i = 0; i <= input.length; i++) {
      //addition
      if (input[i + 1] == '+') {
        result = input[i] + input[i + 2];
        //subtraction
      } else if (input[i + 1] == '-') {
        result = input[i] - input[i + 2];
        //division
      } else if (input[i + 1] == '/') {
        result = input[i] / input[i + 2];
        //multiplication
      } else if (input[i + 1] == '*') {
        result = input[i] * input[i + 2];
      }
    }
  }
  output.textContent = result;
  outputMath.splice(0);
  outputMath[0] = result;
}

clear();
//keyboard listener
document.addEventListener('keyup', function (e) {
  if (e.key === '1') {
    outputBox(1);
  }
  if (e.key === '2') {
    outputBox(2);
  }
  if (e.key === '3') {
    outputBox(3);
  }
  if (e.key === '4') {
    outputBox(4);
  }
  if (e.key === '5') {
    outputBox(5);
  }
  if (e.key === '6') {
    outputBox(6);
  }
  if (e.key === '7') {
    outputBox(7);
  }
  if (e.key === '8') {
    outputBox(8);
  }
  if (e.key === '9') {
    outputBox(9);
  }
  if (e.key === '0') {
    outputBox(0);
  }
  if (e.key === '.' || e.key === ',') {
    outputBox(',');
  }
  if (e.key === '/') {
    outputBox('/');
  }
  if (e.key === '*') {
    outputBox('*');
  }
  if (e.key === '-') {
    outputBox('-');
  }
  if (e.key === '+') {
    outputBox('+');
  }
  if (e.key === 'Escape') {
    clear();
  }
  if (e.key === 'Enter') {
    equal(outputMath);
  }
});

btnClear.addEventListener('click', function () {
  //add code here
  clear();
});

btnZero.addEventListener('click', function () {
  outputBox(0);
});

btnOne.addEventListener('click', function () {
  outputBox(1);
});

btnTwo.addEventListener('click', function () {
  outputBox(2);
});

btnThree.addEventListener('click', function () {
  outputBox(3);
});

btnFour.addEventListener('click', function () {
  outputBox(4);
});

btnFive.addEventListener('click', function () {
  outputBox(5);
});

btnSix.addEventListener('click', function () {
  outputBox(6);
});

btnSeven.addEventListener('click', function () {
  outputBox(7);
});

btnEight.addEventListener('click', function () {
  outputBox(8);
});

btnNine.addEventListener('click', function () {
  outputBox(9);
});

btnDivide.addEventListener('click', function () {
  outputBox('/');
});

btnMultiply.addEventListener('click', function () {
  outputBox('*');
});

btnSubtract.addEventListener('click', function () {
  outputBox('-');
});

btnAddition.addEventListener('click', function () {
  outputBox('+');
});

btnPoint.addEventListener('click', function () {
  outputBox(',');
});

btnEqual.addEventListener('click', function () {
  equal(outputMath);
});
