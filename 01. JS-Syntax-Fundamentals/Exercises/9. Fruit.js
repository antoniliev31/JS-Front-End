function fruitCalculate(fruitName, grams, pricePerKg) {
    const kg = (grams / 1000)
    const price = kg * pricePerKg;


    console.log(`I need $${price.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruitName}.`)
}

fruitCalculate('apple', 1563, 2.35)