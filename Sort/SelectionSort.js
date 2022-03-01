console.log("Selection Sort");
const arrVal = [4, 5, 2, 1, 7, 9];
const arrVal2 = [9, 1, 2, 3, 4, 5];
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (i !== min) {
      //swap with the min
      console.log("-------------------");
      console.log(arr);
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
      console.log(arr);
      console.log("-------------------");
    }
  }
  return arr;
}
selectionSort(arrVal2);
