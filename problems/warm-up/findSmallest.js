let arr = [2, 5, 3, -2, 6, -7];

function fetchSmallest(arr) {
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

console.log(fetchSmallest(arr));
