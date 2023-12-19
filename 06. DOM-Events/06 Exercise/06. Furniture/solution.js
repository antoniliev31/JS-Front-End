function solve() {
  let inputPlaceholder = document.getElementById("exercise").getElementsByTagName("textarea")[0];
  let button = document.getElementById("exercise").getElementsByTagName("button")[0];
  button.addEventListener("click", add);
  let tbody = document.querySelector(".wrapper.card-wrapper .row .col-md-12 table tbody");

  function add() {
    // Прочитане на JSON обекта от текстовото поле
    let furnitureData = JSON.parse(inputPlaceholder.value);

    // Дефиниране на отделните свойства на обекта
    let furniture = {
      name: furnitureData[0].name,
      img: furnitureData[0].img,
      price: furnitureData[0].price,
      decFactor: furnitureData[0].decFactor,
    };
    
    // Примерен изход в конзолата
    console.log(furniture.name);
    console.log(furniture.img);
    console.log(furniture.price);
    console.log(furniture.decFactor);
  }
}
