console.log("index");
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
  let i = 0;
  let j = 0;
  while (list1.length + list2.length !== result.length) {
    if (list1.length === i && list2.length > j) {
      result.push(list2[j]);
      j++;
    }
    if (list1.length > i && list2.length === j) {
      result.push(list1[i]);
      i++;
    }
    if (list1[i] <= list2[j]) {
      result.push(list1[i]);
      i++;
    }
    if (list1[i] > list2[j]) {
      result.push(list2[j]);
      j++;
    }
  }

  return result;
};
mergeTwoLists([], []);
