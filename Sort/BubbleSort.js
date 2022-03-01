console.log("Bubble Sort");

const arrVal = [4, 5, 2, 1, 7, 9];
const arrVal2 = [9, 1, 2, 3, 4, 5];
//Basic Idea is that while looping Through, you put biggest Element to end of Index,
// and the next Iteration, you have to compare arr.length-1 of item instead of arr.length;
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let swapped = false;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swapped = true;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (!swapped) {
      //if nothing has Swapped then break the loop;
      break;
    }
  }
  return arr;
}
bubbleSort(arrVal2);
//const result = bubbleSort(arrVal2);
// console.log("result: ", result);
