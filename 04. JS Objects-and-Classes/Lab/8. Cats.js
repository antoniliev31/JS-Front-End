

function createCats(input) {
    class Cat {
        constructor(name, age) {
          this.name = name;
          this.age = age;
        }
      
        meow() {
          console.log(`${this.name}, age ${this.age} says Meow`);
        }
      }
  for (let catInfo of input) {
    let [name, age] = catInfo.split(" ");
    let cat = new Cat(name, age);
    cat.meow();
  }
}

const catData = ["Candy 1", "Poppy 3", "Nyx 2"];
createCats(catData);
