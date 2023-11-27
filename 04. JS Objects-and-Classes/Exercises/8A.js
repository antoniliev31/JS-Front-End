function solve(input) {
  const parking = new Set();

  input.forEach((entry) => {
    const [command, number] = entry.split(", ");

    if (command === "IN") {
      parking.add(number);
    } else if (command === "OUT") {
      parking.delete(number);
    }
  });
  
  const sortNumbers = Array.from(parking).sort();
  if (sortNumbers.length === 0) {
    console.log("Parking Lot is Empty");
  } else {
    sortNumbers.forEach((kar) => {
      console.log(kar);
    });
  }
  sortNumbers.forEach((kar) => {
    console.log(kar);
  });
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
);
