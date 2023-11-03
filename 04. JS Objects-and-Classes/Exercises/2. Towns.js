function parseTable(input) {
  input
    .map((city) => {
      const [name, lat, long] = city.split(" | ");
      return {
        name,
        latitude: Number(lat).toFixed(2),
        longitude: Number(long).toFixed(2),
      };
    })
    .forEach((city) => {
      console.log(
        `{ town: '${city.name}', latitude: '${city.latitude}', longitude: '${city.longitude}' }`
      );
    });

  //   for (let row of input) {
  //     let [town, latitude, longitude] = row.split(" | ");
  //     latitude = Number(latitude).toFixed(2);
  //     longitude = Number(longitude).toFixed(2);

  //     let townInfo = {
  //       town,
  //       latitude,
  //       longitude,
  //     };

  //     console.log(townInfo);
  //   }
}

const input = [
  "Sofia | 42.696552 | 23.32601",
  "Beijing | 39.913818 | 116.363625",
];

parseTable(input);
