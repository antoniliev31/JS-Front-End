class Song {
  constructor(type, name, length) {
    this.type = type;
    this.name = name;
    this.length = length;
  }
}

function solve(input) {
  const typeToDisplay = input.pop();
  const [_, ...songs] = input;

  const result = songs
    .map((songAsText) => {
      const [type, name, length] = songAsText.split("_");
      const song = new Song(type, name, length);

      return song;
    })
    .filter((song) => {
      if (typeToDisplay === "all") {
        return song;
      }
      return song.type === typeToDisplay;
    })
    .map((song) => song.name)
    .join("\n");

  console.log(result);
}

solve([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
