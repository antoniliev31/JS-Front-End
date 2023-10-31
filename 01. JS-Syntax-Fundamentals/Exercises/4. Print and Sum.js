function printAndSum(startNum, endNum) {
    let nums = [];
    let sum = 0;
    for (let i = startNum; i <= endNum; i++) {
        nums.push(i);
        sum += i;       
    }

    console.log(nums.join(' ')); 
    console.log(`Sum: ${sum}`); 
}

printAndSum(5, 10);