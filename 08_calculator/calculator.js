const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	const sum = array.reduce((a, b) => a + b, 0);
  return sum;
};

const multiply = function(mult) {
  const multiply = mult.reduce((a, b) => a * b, 1);
  return multiply;
};

const power = function(a, b) {
  let multiply = a;
	for(let i = 1; i < b; i++) {
    multiply *= a;
  }
  return multiply;
};

const factorial = function(num) {
  let factorial = 1;
	for(let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
