function reversedArray(count, arr){
    let resulArray = [];

    for (let index = 0; index < count; index++) {
        
        resulArray.push(arr[index]);  
    }

    console.log(resulArray.reverse().join(" "));
}

reversedArray (3, [10, 20, 30, 40, 50]);

// =============================
function reversedArray(count, arr){
    let resulArray = arr.slice(0, count).reverse().join(" ");

    console.log(resulArray);
}

reversedArray (3, [20, 30, 40, 50, 60]);