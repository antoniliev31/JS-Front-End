function findAllSpecialWords(inputText) {
    const textArray = inputText.split(" ");
    const letterPattern = /^[a-zA-Z]+$/;
  
    textArray
      .filter(word => word.startsWith("#") && word.length > 1 && letterPattern.test(word.slice(1)))
      .forEach(word => {
        console.log(word.replace("#", ""));
    });
}
  
  const inputText = 'Nowadays everyone uses # to tag a #special word in #socialMedia';
  findAllSpecialWords(inputText);
  