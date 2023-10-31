function sortingNumbers(numbers) {
    const sortedNumbers = numbers.sort((a, b) => a - b);
    const result = [];
  
    for (let i = 0; i < Math.ceil(numbers.length / 2); i++) {
      result.push(sortedNumbers[i]);
      if (i !== numbers.length - 1 - i) {
        result.push(sortedNumbers[numbers.length - 1 - i]);
      }
    }
  
    return result;
  }
  
  const sortedArray = sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 94]);
  console.log(sortedArray);
  