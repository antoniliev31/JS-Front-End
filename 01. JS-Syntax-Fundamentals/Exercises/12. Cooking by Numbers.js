function calculator(numStr, ...cmd) {
  let num = Number(numStr);
  const operation = [...cmd];

  for (let index = 0; index < operation.length; index++) {
    switch (operation[index]) {
      case "chop":
        num /= 2;        
        break;
      case "dice":
        num = Math.sqrt(num);       
        break;
      case "spice":
        num += 1;        
        break;
      case "bake":
        num *= 3;        
        break;
      case "fillet":
        num -= num * 0.2;        
        break;
    }
    console.log(num);
  }
}

calculator("9", "dice", "spice", "chop", "bake", "fillet");
