function solve(input) {
  const parking = [];

  input.forEach((entry) => {
    const [command, number] = entry.split(", ");

    if (command === "IN") {
      parking.push(number);
    } else if (command === "OUT") {
      const index = parking.indexOf(number);
      parking.splice(index, 1);
    }
  });

  parking.sort();
  parking.forEach((kar) => {
    console.log(kar);
  });
  
}

solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
