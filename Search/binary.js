console.log("Binary Search");
const arrTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const targetVal = 5;

function binarySearch(arr, target) {
  let found = false;
  let targetIdx = -1;
  let startIdx = 0;
  let endIdx = arr.length - 1;
  let midIdx = Math.floor((startIdx + endIdx) / 2);
  let counter = 0;
  while (!found) {
    counter++;
    if (
      arr[startIdx] === target ||
      arr[endIdx] === target ||
      arr[midIdx] === target
    ) {
      found = true;
      arr[startIdx] === target
        ? (targetIdx = startIdx)
        : arr[endIdx] === target
        ? (targetIdx = endIdx)
        : (targetIdx = midIdx);
      break;
    } else {
      if (arr[midIdx] > target && midIdx <= endIdx) {
        endIdx = midIdx - 1;
        midIdx = Math.floor((startIdx + endIdx) / 2);
      }
      if (arr[midIdx] < target && midIdx >= startIdx) {
        startIdx = midIdx + 1;
        midIdx = Math.floor((startIdx + endIdx) / 2);
      } else {
        break;
      }
    }
  }
  console.log("result: ", arr[targetIdx], targetIdx, found, counter);
}
function binarySearchBetter(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (arr[mid] !== target && start <= end) {
    if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  if (arr[mid] === target) {
    return mid;
  }
  return -1;
}

// binarySearch(arrTest, targetVal);
console.log(binarySearchBetter(arrTest, targetVal));
