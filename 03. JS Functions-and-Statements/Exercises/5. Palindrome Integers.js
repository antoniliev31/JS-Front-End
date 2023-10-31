function checkPalindromes(arr) {
  arr.forEach((number) => {
    function isPalindrome(number) {
      const numberStr = number.toString();
      const reversedStr = numberStr.split("").reverse().join("");
      return numberStr === reversedStr;
    }
    if (isPalindrome(number)) {
      console.log("true");
    } else {
      console.log("false");
    }
  });
}

const inputArray = [32, 2, 232, 1010];
checkPalindromes(inputArray);
