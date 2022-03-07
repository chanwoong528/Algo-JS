console.log("LeetCode");
var isPalindrome = function (x) {
  let strInput = x.toString();

  let reverseInput = "";
  for (let i = strInput.length; i >= 0; i--) {
    reverseInput = reverseInput + strInput.charAt(i);
  }

  if (reverseInput === strInput) return true;

  return false;
};
//console.log(isPalindrome(121));

var romanToInt = function (s) {
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1 && roman[s.charAt(i + 1)] > roman[s.charAt(i)])
      total = total - roman[s.charAt(i)];
    else total = total + roman[s.charAt(i)];
  }
  console.log(total);
  return total;
};
//romanToInt("MCMXCIV");

var longestCommonPrefix = function (strs) {
  for (let i = 0; i < strs[0].length; i++) {
    for (j = 0; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        console.log(strs[0].slice(0, i));
        return strs[0].slice(0, i);
      }
    }
  }
};

//longestCommonPrefix(["flower", "flow", "flight"]);
//console.log(longestCommonPrefix(["a"]));
var isValid = function (s) {
  const stack = [];
  let popItem;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else if (s[i] === ")") {
      popItem = stack.pop();
      console.log(popItem);
      if (popItem !== "(") return false;
    } else if (s[i] === "}") {
      console.log(popItem);
      popItem = stack.pop();
      if (popItem !== "{") return false;
    } else if (s[i] === "]") {
      console.log(popItem);
      popItem = stack.pop();
      if (popItem !== "[") return false;
    }
  }

  if (stack.length === 0) {
    return true;
  }
  return false;
};
//console.log(isValid("(){}[]"));
var mergeTwoLists = function (list1, list2) {
  let result = [];
  while (list1.length && list2.length) {
    if (list1[0] <= list2[0]) {
      result.push(list1[0]);
      list1.shift();
    }
    if (list1[0] > list2[0]) {
      result.push(list2[0]);
      list2.shift();
    }
  }
  if (list1.length) {
    result = result.concat(list1);
  } else if (list2.length) {
    result = result.concat(list2);
  }

  return result;
};
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
// leetcode example
// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }
// var mergeTwoLists = function (list1, list2) {
//   const start = new ListNode(0);
//   let p1 = list1;
//   let p2 = list2;
//   let p = start;
//   while (p1 && p2) {
//     if (p1.val <= p2.val) {
//       p.next = p1;
//       p1 = p1.next;
//     } else {
//       p.next = p2;
//       p2 = p2.next;
//     }
//     p = p.next;
//   }
//   if (p1) {
//     p.next = p1;
//   } else if (p2) {
//     p.next = p2;
//   }
//   return start.next;
// };

const nums = [1, 3, 5, 6];
var searchInsert = function (nums, target) {
  if (target > nums[nums.length - 1]) {
    return nums.length;
  }
  if (target < nums[0]) {
    return 0;
  }
  for (let i = 0; i < nums.length; i++) {
    console.log(`${nums[i]} : ${i}`);
    if (target === nums[i]) {
      return i;
    } else if (target > nums[i - 1] && target < nums[i]) {
      return i;
    }
  }
};
//console.log(searchInsert(nums, 2));

const haystack = "hello",
  needle = "ll";

var strStr = function (haystack, needle) {
  let index;
  let counter = 0;
  let found = false;
  if (needle.length === 0) return 0;
  for (let i = 0; i < haystack.length; i++) {
    if (found === true) {
      break;
    }
    for (let j = 0; j < needle.length; j++) {
      console.log(`${haystack[i + j]}  :  ${needle[j]}`);
      if (haystack[i + j] !== needle[j]) {
        break;
      }
      if (j === needle.length - 1) {
        index = i;
        counter++;
        found = true;
      }
    }
  }

  return counter === 0 ? -1 : index;
};
//console.log(strStr(haystack, needle));
const nums1 = [-1, 0, 3, 5, 9, 12],
  target = 9;
var search = function (nums, target) {
  let s = 0;
  let e = nums.length - 1;
  let m = Math.floor((s + e) / 2);
  while (nums[m] !== target && s <= e) {
    if (nums[m] > target) {
      e = m - 1;
    } else {
      s = m + 1;
    }
    m = Math.floor((s + e) / 2);
  }
  if (nums[m] === target) {
    return m;
  }
  return -1;
};

console.log(search(nums1, target));
