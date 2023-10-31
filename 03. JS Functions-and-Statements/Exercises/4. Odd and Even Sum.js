function sumOfDigits(number) {
    let sumEven = 0;    
    let sumOdd = 0;    
    let numberStr = number.toString();

    for (let i = 0; i < numberStr.length; i++) {
        const digit  = parseInt(numberStr[i]);
        if (digit  % 2 === 0) {
            sumEven += digit;
        } else {
            sumOdd += digit;
        }        
    }
        
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);     
}

sumOfDigits(3495892137259234)