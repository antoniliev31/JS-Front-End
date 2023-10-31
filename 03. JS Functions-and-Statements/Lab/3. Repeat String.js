function repeatString(word, count) {
  let result = "";

  for (let i = 0; i < count; i++) {
    result += word;
  }
  console.log(result);
}

repeatString("String", 2);
