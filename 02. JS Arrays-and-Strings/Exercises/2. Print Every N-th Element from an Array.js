function printEveryNThElementFromArray(numbers, count) {
   let newArray = [];

  for (let i = 0; i < numbers.length; i += count) {
    // newArray.push(numbers[i]);
    newArray.push(numbers[i])
  }
  
  return newArray;
}
const sortedArray = printEveryNThElementFromArray(["5", "20", "31", "4", "20"], 2);
  console.log(sortedArray);

