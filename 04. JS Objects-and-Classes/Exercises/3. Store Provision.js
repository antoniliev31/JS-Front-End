function solve(currentStock, deliveredStock) {
    // Как от два масива да направим един
    const products = [...currentStock, ...deliveredStock];
    // Reduce
    // products.reduce((acc, curr, i) => {}, {})
    
    // Може да ни даде и индекса на елемента
    const stock = products.reduce((acc, curr, i) => {
        // Тук записваме функцията, която искаме да се изпълнява
        if (i % 2 !== 0) {
            return acc;
        }

        if (!acc.hasOwnProperty(curr)) {
            acc[curr] = 0;                
        } 

        acc[curr] += Number(products[i + 1]);

        return acc;        
    }, {})
    // Само за проверка 
    // console.log(JSON.stringify(stock))

    // Принтим в правилния формат
    Object.keys(stock).forEach((key) => {
        console.log(`${key} -> ${stock[key]}`)
    });
}

solve(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
    )