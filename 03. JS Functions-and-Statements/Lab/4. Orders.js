function calculateOrders(order, quantity) {
  let sum = 0;

  const product = {
    coffee: 1.5,
    water: 1.0,
    coke: 1.4,
    snacks: 2.0,
  };

  sum = product[order] * quantity;

  console.log(sum.toFixed(2))
}

calculateOrders("coffee", 2);
