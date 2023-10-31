function calculatePriceForTheatre(day, age) {
    // Дефиниране на цените в обект
    const prices = {
        Weekday: { 0: 12, 18: 18, 122: 12 },
        Weekend: { 0: 15, 18: 20, 122: 15 },
        Holiday: { 0: 5, 18: 12, 122: 10 }
    };

    // Проверка дали денят съществува в обекта
    if (prices.hasOwnProperty(day)) {
        const priceRanges = prices[day];

        // Намиране на съответната цена за възрастта
        let price = 0;
        for (const rangeAge in priceRanges) {
            if (age >= Number(rangeAge)) {
                price = priceRanges[rangeAge];
            }
        }

        if (price > 0) {
            console.log(`${price}$`);
            return;
        }
    }

    console.log("Error!");
}

calculatePriceForTheatre("Holiday", 15);
