// write a function that searches for an element in an array
// and returns its index. If the element is not found, return -1.

let arr = [10, 45, 15, 25, 20];

function searchIndex(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) return i;
  }
  return -1;
}

console.log(searchIndex(arr, 49));
