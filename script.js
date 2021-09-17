'use strict';
//every button on the index.html
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
const historic = document.querySelector('.historic');
let tmpValue = '';
let index = 0;
let indexSwap = false;
let historicString = '';
let outputMath = [];
let result = 0;

//chears all values
function clear() {
  outputMath.splice(0);
  historicString = '';
  result = 0;
  output.value = 0;
  historic.value = '';
  tmpValue = '';
  index = 0;
}
//keep the historic updated.
function displayHistoric(array) {
  if (array.length == 2) {
    historicString = `${array[0]} ${array[1]}`;
  } else if (array.length == 3) {
    historicString = `${array[0]} ${array[1]} ${array[2]}`;
  } else {
    if (!(array = [])) {
    }
  }
  historic.value = historicString;
}
//controls if we're typing elemt A (outputMath[0]) or element B (outputMath[2]) of a operation
function swapIndex() {
  if (index == 0) {
    index = 2;
  } else {
    if (!(outputMath.length > 0)) {
      index = 0;
    }
  }
  indexSwap = true;
}
//main function, where every input is monitored
function outputBox(input) {
  //basically whenever the user types an input, this block will make a decision based on the outputMath array (which is the source for all operations).
  if ('*-+/'.includes(input)) {
    if (outputMath.length == 0) {
      outputMath[index] = 0;
      outputMath[1] = input;
    } else if (outputMath.length == 3) {
      equal(outputMath);
      outputMath[1] = input;
    } else {
      outputMath[1] = input;
    }

    swapIndex();
    //input is a number
  } else if (typeof input === 'number') {
    if (indexSwap) {
      tmpValue = '';
      indexSwap = false;
    }
    if (outputMath[index] == undefined) {
      tmpValue += String(input);
      outputMath[index] = tmpValue;
      tmpValue = '';
      console.log('here A');
    } else {
      tmpValue = String(outputMath[index]);
      tmpValue += String(input);
      outputMath[index] = tmpValue;
      tmpValue = '';
      console.log('here B');
    }
    console.log(outputMath);
    output.value = outputMath[index];
    //dealing with decimal/float point numbers
  } else if (input == '.' || input == ',') {
    if (outputMath[index] == undefined) {
      tmpValue = '0.';
      outputMath[index] = tmpValue;
    } else if (!outputMath[index].includes('.')) {
      tmpValue = outputMath[index];
      tmpValue += '.';
      outputMath[index] = tmpValue;
    }
    output.value = outputMath[index];
  }

  displayHistoric(outputMath);
  //   console.log(` [${outputMath}] - tmp: ${tmpValue} - index: ${index}`);
}
//Equal function with destructuring technique
function equal(input) {
  let [a = 0, opTemp = '+', b = 0] = input;
  let aTemp = Number(a);
  let bTemp = Number(b);

  //   if (!(total == 'null')) {
  //     aTemp = total;
  //   }
  if (opTemp == '+') {
    result = aTemp + bTemp;
  }

  if (opTemp == '-') {
    result = aTemp - bTemp;
  }

  if (opTemp == '/') {
    if (bTemp == 0) {
      result = 'Error';
    } else {
      result = aTemp / bTemp;
    }
  }

  if (opTemp == '*') {
    result = aTemp * bTemp;
  }
  output.value = result;
  outputMath.splice(0);
  //handling division by 0
  if (result == 'Error') {
    outputMath.splice(0);
    index = 0;
  } else {
    outputMath[0] = result;
  }
  tmpValue = '';
  //   console.log(` [${outputMath}] - tmp: ${tmpValue} - index: ${index}`);
}
clear();

//listener for when the key is pressed, turns the UI to active
document.addEventListener('keydown', function (e) {
  if (e.key === '1') {
    btnOne.classList.add('keyactive');
  }
  if (e.key === '2') {
    btnTwo.classList.add('keyactive');
  }
  if (e.key === '3') {
    btnThree.classList.add('keyactive');
  }
  if (e.key === '4') {
    btnFour.classList.add('keyactive');
  }
  if (e.key === '5') {
    btnFive.classList.add('keyactive');
  }
  if (e.key === '6') {
    btnSix.classList.add('keyactive');
  }
  if (e.key === '7') {
    btnSeven.classList.add('keyactive');
  }
  if (e.key === '8') {
    btnEight.classList.add('keyactive');
  }
  if (e.key === '9') {
    btnNine.classList.add('keyactive');
  }
  if (e.key === '0') {
    btnZero.classList.add('keyactive');
  }
  if (e.key === '.' || e.key === ',') {
    btnPoint.classList.add('keyactive');
  }
  if (e.key === '/') {
    btnDivide.classList.add('keyactive');
  }
  if (e.key === '*') {
    btnMultiply.classList.add('keyactive');
  }
  if (e.key === '-') {
    btnSubtract.classList.add('keyactive');
  }
  if (e.key === '+') {
    btnAddition.classList.add('keyactive');
  }
  if (e.key === 'Escape') {
    btnClear.classList.add('keyactive');
  }
  if (e.key === 'Enter') {
    btnEqual.classList.add('keyactive');
  }
});
//listener for when the key is released, turns the UI off
document.addEventListener('keyup', function (e) {
  if (e.key === '1') {
    outputBox(1);
    btnOne.classList.remove('keyactive');
  }
  if (e.key === '2') {
    outputBox(2);
    btnTwo.classList.remove('keyactive');
  }
  if (e.key === '3') {
    outputBox(3);
    btnThree.classList.remove('keyactive');
  }
  if (e.key === '4') {
    outputBox(4);
    btnFour.classList.remove('keyactive');
  }
  if (e.key === '5') {
    outputBox(5);
    btnFive.classList.remove('keyactive');
  }
  if (e.key === '6') {
    outputBox(6);
    btnSix.classList.remove('keyactive');
  }
  if (e.key === '7') {
    outputBox(7);
    btnSeven.classList.remove('keyactive');
  }
  if (e.key === '8') {
    outputBox(8);
    btnEight.classList.remove('keyactive');
  }
  if (e.key === '9') {
    outputBox(9);
    btnNine.classList.remove('keyactive');
  }
  if (e.key === '0') {
    outputBox(0);
    btnZero.classList.remove('keyactive');
  }
  if (e.key === '.' || e.key === ',') {
    outputBox(',');
    btnPoint.classList.remove('keyactive');
  }
  if (e.key === '/') {
    outputBox('/');
    btnDivide.classList.remove('keyactive');
  }
  if (e.key === '*') {
    outputBox('*');
    btnMultiply.classList.remove('keyactive');
  }
  if (e.key === '-') {
    outputBox('-');
    btnSubtract.classList.remove('keyactive');
  }
  if (e.key === '+') {
    outputBox('+');
    btnAddition.classList.remove('keyactive');
  }
  if (e.key === 'Escape') {
    clear();
    btnClear.classList.remove('keyactive');
  }
  if (e.key === 'Enter') {
    equal(outputMath);
    btnEqual.classList.remove('keyactive');
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
