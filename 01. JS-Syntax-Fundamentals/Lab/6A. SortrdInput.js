function findLargestNumber (...input) {
    if (input.length < 1) {
        console.log("Error!");
        return;
    }
    
    const sortedInput = input.sort(function(a, b){
        return b - a;
    });

    const hightNumber = sortedInput[0];
    const smallestNumber = sortedInput[sortedInput.length-1]

    console.log(`The largest number is ${hightNumber}.`);
    
}

findLargestNumber (-3, -5, -22.5);
