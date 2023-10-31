function sumOfDigits(number) {
    let sum = 0;    
    const numberStr = number.toString();

    for (let i = 0; i < numberStr.length; i++) {
        
        sum += parseInt(numberStr[i]); // Number(numberStr[i]);
    }
        
    console.log(sum);     
}

sumOfDigits(97561);