// Task 1.

let userInput = prompt("Please enter only number");

function sum(num) {
  if (Number.isNaN(num)) {
    return "Invalid Input. Please enter a valid number";
  }
  if (num === 0) {
    return 0;
  }
  return num + sum(num - 1);
}

console.log(sum(Number(userInput)));

// Task 2.

let number = 54637;
let digitsNumber = number.toString().split("");

console.log(digitsNumber);

// Task 3.

let numArr = [4, -9, -98, -1, 444, 3, -555];

function changeCharacter(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      return arr[i] * -1;
    }
  }
}

console.log(changeCharacter(numArr));

// Task 4.

const givenArr = [12, 45, 88, 1, 567, 3, 91];

function odd(arr) {
  let result = [];
  for (let array of arr) {
    if (array % 2 !== 0) {
      result.push(array);
    }
  }
  return result;
}

console.log(odd(givenArr));

//  Task 5.

let array = [
  true,
  false,
  72,
  32,
  44,
  2345,
  "Jack",
  "Damjan",
  false,
  1000,
  null,
  "",
  100,
  undefined,
  NaN,
  1,
  22,
];

let testArray = array.filter(Number);

console.log(testArray);
