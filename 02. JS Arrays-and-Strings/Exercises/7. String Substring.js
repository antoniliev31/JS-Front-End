function findSubstring(wordToFind, text) {
  const textroToInspect = text.split(" ");
  for (let i = 0; i < textroToInspect.length; i++) {
    if (textroToInspect[i].toLowerCase() === wordToFind.toLowerCase()) {
      console.log(wordToFind);
      return;
    }
  }

  console.log(`${wordToFind} not found!`);
}

findSubstring(
  "javascript",
  "Javascript is the best javascript programming language"
);
