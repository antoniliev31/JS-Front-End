function solve() {
  let textToTransform = document.getElementById("text").value.split(" ");
  const cmd = document.getElementById("naming-convention").value;
  let result = "";

  if (cmd === "Camel Case") {
    textToTransform.forEach((word, index) => {
      textToTransform[index] = index !== 0
        ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        : word.toLowerCase();
    });
    result = textToTransform.join("");
    document.getElementById("result").innerText = result;

  } else if (cmd === "Pascal Case") {
    textToTransform.forEach((word, index) => {
      textToTransform[index] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    result = textToTransform.join("");
    document.getElementById("result").innerText = result;

  } else {
    document.getElementById("result").innerText = "Error!";
  }
}
