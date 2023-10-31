function calculate(num1, num2, operator) {
  const calculator = {
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
  };
  
  let result = 0;
  
  const func = calculator[operator];

  if (!func) {
    return 0;
  }

  result = calculator[operator](num1, num2);
  console.log(result);
}

calculate(50, 13, "subtract");
