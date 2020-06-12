// Adjacent repeated words in a string
// https://www.codewars.com/kata/5245a9138ca049e9a10007b8/train/javascript

/*
- Declare repeated = 0
- Declare sequence = 0
- Declare previous = string[0]
- Loop through chars in string from index 1 to length - 1

- For each char
  - If char is === previous
    - add 1 to sequence
    
  - else, if current char is !== previous
    - if sequence > 1
      - repeared += 1
      - sequence = 0

  - previous = char
- return repeated
*/

function countAdjacentPairs(searchString) {
  if (!searchString) {
    return 0;
  }

  let words = searchString.split(" ");
  let repeated = 0;
  let sequence = 0;
  let previous = words[0].toLowerCase();

  for (let idx = 1; idx < words.length; idx += 1) {
    if (words[idx].toLowerCase() === previous.toLowerCase()) {
      sequence += 1;
    } else {
      if (sequence > 0) {
        repeated += 1;
        sequence = 0;
      }
    }

    previous = words[idx];
  }

  if (sequence > 0) {
    repeated += 1;
    sequence = 0;
  }

  return repeated;
}

// Solution that I love
// function countAdjacentPairs(searchString) {
//   let arr = searchString.toLowerCase().split(" ");
//   let uniqArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == arr[i + 1] && arr[i + 1] != arr[i + 2]) {
//       uniqArr.push(arr[i]);
//     }
//   }
//   return uniqArr.length;
// }

console.log(countAdjacentPairs("")); // 0
console.log(countAdjacentPairs("banana banana banana")); // 1 "Once a word has been paired, it is ignored. countAdjacentPairs('banana banana banana')"

console.log(countAdjacentPairs("orange Orange kiwi pineapple apple")); // 1

console.log(
  countAdjacentPairs(
    "banana banana banana terracotta banana terracotta terracotta pie!"
  )
); // 2

console.log(countAdjacentPairs("pineapple apple")); // 0
