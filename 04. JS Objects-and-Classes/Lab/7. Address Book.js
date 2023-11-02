function solve(text) {
  let addressBook = {};

  for (let line of text) {
    let tokens = line.split(":");
    let name = tokens[0];
    let address = tokens[1];

    // Проверка за дублиращи се имена и заместване на адресите
    if (addressBook[name]) {
      addressBook[name] = address;
    } else {
      addressBook[name] = address;
    }
  }

  // Сортиране на обекта по имената
  const sortedAddressBook = Object.keys(addressBook).sort((a, b) => a.localeCompare(b)
  );

  for (let key of sortedAddressBook) {
    console.log(`${key} -> ${addressBook[key]}`);
  }
}

solve([
  "Bob:Huxley Rd",
  "John:Milwaukee Crossing",
  "Peter:Fordem Ave",
  "Bob:Redwing Ave",
  "George:Mesta Crossing",
  "Ted:Gateway Way",
  "Bill:Gateway Way",
  "John:Grover Rd",
  "Peter:Huxley Rd",
  "Jeff:Gateway Way",
  "Jeff:Huxley Rd",
]);
