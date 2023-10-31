function splitPascalCase(inputString) {
  const words = inputString.split(/(?=[A-Z])/);

  const result = words.join(", ");

  return result;
}

const inputString = "SplitMeIfYouCanHaHaYouCantOrYouCan";
const output = splitPascalCase(inputString);
console.log(output);
