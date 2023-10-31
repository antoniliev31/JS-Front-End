function reversedChars(a, b, c) {
    let inputString = [];
    
    inputString.push(a);
    inputString.push(b);
    inputString.push(c);
    
    inputString.reverse();

    function isLetter(character) {
        return /^[a-zA-Z]$/.test(character);
    }

    for (let index = 0; index < inputString.length; index++) {
        if (isLetter(inputString[index])) {
            inputString[index] = inputString[index].toUpperCase();
        }
    }
    console.log(inputString.join(" "));
}

reversedChars('1',
'L',
'&'
);
