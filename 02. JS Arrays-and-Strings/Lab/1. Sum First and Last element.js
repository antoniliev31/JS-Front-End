function sumFirstAndLatElement(arr) {
    const firstElement = arr[0];
    const lastElement = arr[arr.length - 1];

    console.log(firstElement + lastElement);
}

sumFirstAndLatElement([10, 17, 22, 33]);

// ===========================================

function sumFirstAndLatElement(arr) {
    const [firstElement, ...rest] = arr;
    const lastElement = arr[arr.length - 1];

    console.log(firstElement + lastElement);
}

sumFirstAndLatElement([10, 17, 22, 35]);