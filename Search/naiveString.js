console.log("Naive String");
const string = "chanwoong loled and loled";
const target = "lol";

function naiveStringSearch(string, target) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < target.length; j++) {
      //console.log(string[i + j], target[j]);
      if (string[i + j] !== target[j]) {
        // console.log("BREAK");
        break;
      }
      if (j === target.length - 1) {
        // console.log("Found one");
        counter++;
      }
    }
  }
  console.log(counter);
}

naiveStringSearch(string, target);
