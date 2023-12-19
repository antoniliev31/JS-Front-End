function solve(input) {
  const baristas = {};
  const baristaCount = Number(input.shift());

  for (let i = 0; i < baristaCount; i++) {
    const [name, shift, drinks] = input.shift().split(" ");
    baristas[name] = { shift, drinks: drinks.split(",") };
  }

  while (input.length > 0) {
    const [action, name, shiftOrDrink, coffeeType] = input.shift().split(" / ");

    switch (action) {
      case "Prepare":
        if (
          baristas[name].shift === shiftOrDrink &&
          baristas[name].drinks.includes(coffeeType)
        ) {
          console.log(`${name} has prepared a ${coffeeType} for you!`);
        } else {
          console.log(`${name} is not available to prepare a ${coffeeType}.`);
        }
        break;

      case "Change Shift":
        baristas[name].shift = shiftOrDrink;
        console.log(`${name} has updated his shift to: ${shiftOrDrink}`);
        break;

      case "Learn":
        if (baristas[name].drinks.includes(shiftOrDrink)) {
          console.log(`${name} knows how to make ${shiftOrDrink}.`);
        } else {
          baristas[name].drinks.push(shiftOrDrink);
          console.log(
            `${name} has learned a new coffee type: ${shiftOrDrink}.`
          );
        }
        break;

      default:
        break;
    }
  }

  Object.entries(baristas).forEach(([name, data]) => {
    console.log(`Barista: ${name}, Shift: ${data.shift}, Drinks: ${data.drinks.join(", ")}`);
  });
}

solve([
  "4",
  "Alice day Espresso,Cappuccino",
  "Bob night Latte,Mocha",
  "Carol day Americano,Mocha",
  "David night Espresso",
  "Prepare / Alice / day / Espresso",
  "Change Shift / Bob / day",
  "Learn / Carol / Latte",
  "Prepare / Bob / night / Latte",
  "Learn / David / Cappuccino",
  "Prepare / Carol / day / Cappuccino",
  "Change Shift / Alice / night",
  "Learn / Bob / Mocha",
  "Prepare / David / night / Espresso",
  "Closed",
]);
