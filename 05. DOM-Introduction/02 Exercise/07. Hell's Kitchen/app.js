function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let input = JSON.parse(
      document.getElementById("inputs").getElementsByTagName("textarea")[0].value
    );
    console.log(input);
    let bestRestaurantResult = container.getElementById("#bestRestaurant").getElementsByTagName('p')[0].value;
      bestRestaurantResult = "Test";
  }
}
