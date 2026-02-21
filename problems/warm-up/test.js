// let arr = [33, 56, 2, 4, 5, 23, 3];

// function searchElement(arr, x) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === x) {
//       return i;
//     }
//   }
//    return -1;
// }

// console.log(searchElement(arr, 44));

function fetchNegative(arr) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      counter++;
    }
  }

  return counter;
}

let arr = [2, 5, 3];
console.log(fetchNegative(arr));
