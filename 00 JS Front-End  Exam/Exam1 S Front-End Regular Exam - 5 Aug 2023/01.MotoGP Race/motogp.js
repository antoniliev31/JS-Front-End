function solve(input) {
  // Първият ред съдържа броят на участниците
  const numRiders = Number(input.shift());
  const riders = {};

  // Обработка на информацията за участниците
  for (let i = 0; i < numRiders; i++) {
    const info = input.shift();

    const [name, fuel, position] = info.split("|");
    riders[name] = {
      fuel: Number(fuel),
      position: Number(position),
    };
  }

  // Обработка на останалите събития
  let cmdLine = input.shift();

  while (cmdLine !== "Finish") {
    const [event, ...eventData] = cmdLine.split(" - ");

    switch (event) {
      case "StopForFuel": {
        const riderName = eventData[0];
        const minimumFuel = Number(eventData[1]);
        const changedPosition = Number(eventData[2]);
        // After StopForFuel
        if (riders[riderName].fuel < minimumFuel) {
          riders[riderName].position = changedPosition;
          console.log(
            `${riderName} stopped to refuel but lost his position, now he is ${changedPosition}.`
          );
        } else {
          console.log(`${riderName} does not need to stop for fuel!`);
        }
        break;
      }

      case "Overtaking": {
        const firstRiderName = eventData[0];
        const secondRiderName = eventData[1];
        // After Overtaking
        const firstRiderposition = riders[firstRiderName].position;
        const secondRiderposition = riders[secondRiderName].position;
        if (firstRiderposition < secondRiderposition) {
          riders[firstRiderName].position = secondRiderName;
          riders[secondRiderName].position = firstRiderposition;
          console.log(`${firstRiderName} overtook ${secondRiderName}!`);
        }
        break;
      }

      case "EngineFail": {
        const riderName = eventData[0];
        const lapsLeft = eventData[1];
        // After EngineFail
        delete riders[riderName];
        console.log(
          `${riderName} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`
        );
        break;
      }
    }

    cmdLine = input.shift();
  }

  for (const riderName in riders) {
    console.log(`${riderName}`);
    console.log(`  Final position: ${riders[riderName].position}`);
  }
}

solve([
  "3",
  "Valentino Rossi|100|1",
  "Marc Marquez|90|2",
  "Jorge Lorenzo|80|3",
  "StopForFuel - Valentino Rossi - 50 - 1",
  "Overtaking - Marc Marquez - Jorge Lorenzo",
  "EngineFail - Marc Marquez - 10",
  "Finish",
]);
