function replaceAsterisks(words, text) {
  const textArray = text.split(" ");

  const wordArray = words.split(", ");

  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i].includes("*")) {
      for (let y = 0; y < wordArray.length; y++) {
        if (textArray[i].length == wordArray[y].length) {
          textArray[i] = wordArray[y];
        }
      }
    }
  }

  const modifiedArray = textArray.join(" ");

  return modifiedArray;
}

const result = replaceAsterisks('great, learning',
'softuni is ***** place for ******** new programming languages and ***** place'
);
console.log(result);
