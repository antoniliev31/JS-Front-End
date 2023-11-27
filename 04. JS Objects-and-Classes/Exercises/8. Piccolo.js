function solve(input) {
  let parking = [];

  input.forEach((entry) => {
    const [command, number] = entry.split(", ");

    if (command === "IN") {
      parking.push(number);
    } else if (command === "OUT") {
      parking = parking.filter(carNumber => carNumber !== number);
    }
  });

  if (parking.length === 0) {
    console.log("Parking Lot is Empty");
  } else {
    parking.sort();
    parking.forEach((car) => {
      console.log(car);
    });
  }
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);
