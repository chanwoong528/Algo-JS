console.log("Insertion Sort");
const arrVal = [4, 5, 2, 1, 7, 9];
const arrVal2 = [9, 1, 2, 3, 4, 5];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
    console.log(arr);
  }
  return arr;
}

insertionSort(arrVal2);
