function findSmallestOfThreeNumbers(x, y, z) {
  let num = x;

  if (y < num) {
    num = y;
  }
  if (z < num) {
    num = z;
  }

  console.log(num);
}

findSmallestOfThreeNumbers(2,
    2,
    2
    );
