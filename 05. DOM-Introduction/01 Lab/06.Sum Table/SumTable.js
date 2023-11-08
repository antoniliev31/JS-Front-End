function sumTable() {
  // let table = document.querySelectorAll("table tr");
  // let total = 0;
  // for (let i = 1; i < table.length; i++) {
  //   let cols = table[i].children;
  //   let cost = cols[cols.length - 1].textContent;
  //   total += Number(cost);
  // }
  // document.getElementById("sum").textContent = total;


  const prices = Array.from(document.querySelectorAll("td:nth-child(2):not(#sum)"));
  const total = prices.reduce((acc, curr) => {
    return acc + Number(curr.textContent);
  }, 0);

  document.querySelector("#sum").textContent = total;
}
