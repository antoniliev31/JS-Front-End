function checkIfDigitsAreSameAndSum(number) {
  const numberStr = number.toString();
  let areAllDigitsSame = true;
  let sum = Number(numberStr[0]);

  for (let index = 1; index < numberStr.length; index++) {
    sum += Number(numberStr[index]);

    if (numberStr[index - 1] !== numberStr[index]) {
      areAllDigitsSame = false;
    }
  }

  console.log(areAllDigitsSame);
  console.log(sum);
}

checkIfDigitsAreSameAndSum(2222222); 
