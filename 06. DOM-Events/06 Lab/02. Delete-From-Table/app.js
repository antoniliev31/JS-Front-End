function deleteByEmail() {
  const inputElemnt = document.querySelector('input[name="email"]');
  const tableRows = Array.from(document.querySelector("tbody").children);
  const resultElement = document.querySelector("#result");
  let isDeleted = false;

  for (const row of tableRows) {
    const emailCell = row.children[1];
    console.log(emailCell);

    if (emailCell.textContent === inputElemnt.value) {
      row.remove();
      isDeleted = true;
    }
  }

  if (isDeleted) {
    resultElement.textContent = "Deleted.";
  } else {
    resultElement.textContent = "Not found.";
  }

  inputElemnt.value = "";
}
