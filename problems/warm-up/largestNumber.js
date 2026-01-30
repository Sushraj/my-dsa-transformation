//Write a function that return largest number  in an array

let arr = [34, 5, 66, 2, 7, 2, 77, 5];

function findLargest(arr) {
  if (arr.length === 0) return null;
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findLargest(arr));
