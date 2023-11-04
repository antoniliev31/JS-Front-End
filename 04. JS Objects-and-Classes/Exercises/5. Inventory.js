function solve(input) {
  let heroes = [];
  input.forEach((cmd) => {
    const [heroName, heroLevel, heroItems] = cmd.split(" / ");
    heroes.push({
      name: heroName,
      level: heroLevel,
      items: heroItems.split(", "),
    });
  });

  heroes.sort((a, b) => a.level - b.level);

  heroes.forEach((h) => {
    console.log(`Hero: ${h.name}`);
    console.log(`level => ${h.level}`);
    console.log(`items => ${h.items.join(", ")}`);
  });
}

solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
