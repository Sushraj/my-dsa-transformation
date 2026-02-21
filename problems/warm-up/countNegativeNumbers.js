let arr = [10, -4, 43, 56, -7];
function countNegativeNumbers(arrOfNumbers) {
  let counter = 0;
  for (let i = 0; i < arrOfNumbers.length; i++) {
    if (arrOfNumbers[i] < 0) {
      counter++;
    }
  }
  return counter;
}

console.log(countNegativeNumbers(arr));
