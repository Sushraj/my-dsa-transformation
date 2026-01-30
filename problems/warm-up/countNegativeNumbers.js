let arr = [10, -4, 43, 56, -7];
function countNegativeNumbers(arrOfNumbers) {
  console.log("arrOfNumbers", arrOfNumbers);

  let counter = 0;
  for (let i = 0; i < arrOfNumbers.length; i++) {
    // console.log(arrOfNumbers[i]);

    if (arrOfNumbers[i] < 0) {
      counter++;
    }
  }
  return counter;
}

console.log(countNegativeNumbers(arr));
