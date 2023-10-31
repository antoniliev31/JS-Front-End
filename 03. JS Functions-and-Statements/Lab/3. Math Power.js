function mathPower(num, power) {
    let sum = num;
    
    for (let index = 1; index < power; index++) {
        sum = sum * num;
    }

    console.log(sum)
}

mathPower(3,4);