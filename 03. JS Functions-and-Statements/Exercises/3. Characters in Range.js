function printCharactersInRange(char1, char2) {
  const startCode = char1.charCodeAt(0);
  const endCode = char2.charCodeAt(0);
  let characters = [];

  for (
    let i = Math.min(startCode, endCode) + 1;
    i <= Math.max(startCode, endCode) - 1;
    i++
  ) {
    const character = String.fromCharCode(i);
    characters.push(character);
  }
  console.log(characters.join(" "));
}

printCharactersInRange("C", "#");
