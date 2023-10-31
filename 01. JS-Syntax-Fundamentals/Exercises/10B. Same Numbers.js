function checkIfDigitsAreSameAndSum(number) {
    const digits = number.toString().split("").map(Number); 
    
    // Проверка дали всички цифри са еднакви
    const isConsistent = new Set(digits).size === 1;    

    // Намиране на сумата на всички цифри
    const sum = digits.reduce((total, number) => total + number, 0);

    // Извеждане на резултатите
    console.log(isConsistent);
    console.log(sum);
}

checkIfDigitsAreSameAndSum(2222222); // Примерно извикване с вход 2222222
