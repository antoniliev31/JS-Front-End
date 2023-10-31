function checkIfDigitsAreSameAndSum(number) {
    const numberStr = number.toString(); // Преобразуваме числото в низ
    const firstDigit = numberStr[0]; // Вземаме първата цифра

    // Проверка дали всички цифри са еднакви
    const areAllDigitsSame = numberStr.split('').every(digit => digit === firstDigit);

    // Намиране на сумата на всички цифри
    const sum = numberStr.split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);

    // Извеждане на резултатите
    console.log(areAllDigitsSame);
    console.log(sum);
}

checkIfDigitsAreSameAndSum(1234); // Примерно извикване с вход 2222222
