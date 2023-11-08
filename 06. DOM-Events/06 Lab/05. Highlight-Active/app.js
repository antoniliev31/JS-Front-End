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
  inputs.forEach((input) => {
    input.addEventListener("focus", (e) => {
      e.target.parentElement.classList.add("focused");
    });
    input.addEventListener("blur", (e) => {
      e.target.parentElement.classList.remove("focused");
    });
  });
}
