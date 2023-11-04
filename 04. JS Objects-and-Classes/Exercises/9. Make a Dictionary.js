function solve(input) {
    let dictionary = new Map();
  
    input.forEach((line) => {
      const obj = JSON.parse(line);
      const term = Object.keys(obj)[0];
      const definition = Object.values(obj)[0];
      // Проверка дали термина съществува в речника
      if (dictionary.has(term)) {
        // Замяна на дефиницията
        dictionary.set(term, definition);
      } else {
        dictionary.set(term, definition);
      }
    });
  
    // Преобразуване на Map обекта обратно в масив от обекти
    const sortedDictionary = Array.from(dictionary.keys()).sort().map((term) => {
      return { [term]: dictionary.get(term) };
    });
  
    for (let i = 0; i < sortedDictionary.length; i++) {
      const term = Object.keys(sortedDictionary[i])[0];
      const definition = sortedDictionary[i][term];
      console.log(`Term: ${term} => Definition: ${definition}`);
    }
  }
  
  solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
  ]);
  