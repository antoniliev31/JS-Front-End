function focused() {
  const inputs = Array.from(document.querySelectorAll("input"));

  // Variant 1
  //   inputs.forEach((input) => {
  //     input.addEventListener("focus", (e) => {
  //       e.target.parentElement.className = "focused";
  //     });
  //     input.addEventListener("blur", (e) => {
  //       e.target.parentElement.className = "";
  //     });
  //   });

  // Variant 2 whit Class
  // inputs.forEach((input) => {
  //   input.addEventListener("focus", (e) => {
  //     e.target.parentElement.classList.add("focused");
  //   });
  //   input.addEventListener("blur", (e) => {
  //     e.target.parentElement.classList.remove("focused");
  //   });
  // });

  // Variant 3
  for (const input of inputs) {
    input.addEventListener('focus', onFocus);
    input.addEventListener('blur', onBlur);
  }

  function onFocus(e){
    e.target.parentElement.classList.add("focused");
  }
  function onBlur(e){
    e.target.parentElement.classList.remove("focused");
  }
}
