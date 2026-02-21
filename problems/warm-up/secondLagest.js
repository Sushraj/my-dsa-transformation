 function secondLargest(params) {
    if(arr.length <2) {
        return "Array  should have atleast 2 elements"
    }

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if(arr[i] > secondLargest && arr[i] !== firstLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
 }



 let arr = [34, 5, 66, 2, 7, 2, 77, 5];
 let result = secondLargest(arr);
 console.log(result);