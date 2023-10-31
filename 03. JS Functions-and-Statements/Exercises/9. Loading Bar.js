function createLoadingBar(number) {
  const count = number / 10;
  const parcent = "%".repeat(count);
  const dots = ".".repeat(10 - count);

  if (number === 100) {
    console.log("100% Complete!");
    console.log(`[${parcent}]`);
  } else {
    console.log(`${number}% [${parcent}${dots}]`);
    console.log("Still loading...");
  }
}

createLoadingBar(10);
