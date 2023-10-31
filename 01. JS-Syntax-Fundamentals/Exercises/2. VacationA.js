function priceForASinglePerson(count, type, day) {
  const prices = {
    Students: {
      Friday: 8.45,
      Saturday: 9.8,
      Sunday: 10.46,
    },
    Business: {
      Friday: 10.9,
      Saturday: 15.6,
      Sunday: 16,
    },
    Regular: {
      Friday: 15,
      Saturday: 20,
      Sunday: 22.5,
    },
  };
  const price = prices[type][day];
  let sum = 0;
  sum = count * price;

  if (type === "Students" && count >= 30) {
    sum -= sum * 0.15;
  }
  if (type === "Business" && count >= 100) {
    sum = count - 10 * price;
  }
  if (type === "Regular" && count >= 10 && count <= 20) {
    sum -= sum * 0.05;
  }

  console.log(`Total price: ${sum.toFixed(2)}`);
}

priceForASinglePerson(40, "Regular", "Saturday");
