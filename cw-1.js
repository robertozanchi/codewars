// Duplicate Encoder (6 kyu)
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

/*
The goal of this exercise is to convert a string to a new string where each 
character in the new string is "(" if that character appears only once in the
original string, or ")" if that character appears more than once in the original
string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Input:
- string

Output: 
- string made of "(" and ")" characters

Rules:
- For each character of the input string, the output string will have
  "(" if that character appears only once
  and ")" if that character appears more than once 
- Ignore capitalization

Algorithm
- Split string into array of chars
- Loop through all chars in array, and for each:
  - If chars is in array more than once, place "(" in output array
    - Use filter to find array element === char
    - If length of return value of filter is > 1, put "(" in output array
  - Else, place ")" in output array
- Return output array
*/

// function duplicateEncode(word) {
//   let chars = word.split("");
//   let result = chars.map((char) => {
//     if (
//       chars.filter((el) => {
//         return el.toLowerCase() === char.toLowerCase();
//       }).length > 1
//     ) {
//       return ")";
//     } else {
//       return "(";
//     }
//   });
//   return result.join("");
// }

// function duplicateEncode(word) {
//   let chars = word.split("");
//   let result = chars.map((char) => {
//     if (
//       chars.filter((el) => {
//         return el.toLowerCase() === char.toLowerCase();
//       }).length > 1
//     ) {
//       return ")";
//     } else {
//       return "(";
//     }
//   });
//   return result.join("");
// }

function duplicateEncode(word) {
  let chars = word.split("");
  let result = chars.map((char) => {
    return chars.filter((el) => {
      el.toLowerCase() === char.toLowerCase();
    }).length > 1
      ? ")"
      : "(";
  });
  return result.join("");
}

/*
String loop version
*/
// function duplicateEncode(word) {
//   let result = "";
//   for (let idx = 0; idx < word.length; idx += 1) {
//     let charCount = word.split("").filter((el) => {
//       return el.toLowerCase() === word[idx].toLowerCase();
//     }).length;

//     if (charCount > 1) {
//       result += ")";
//     } else {
//       result += "(";
//     }
//   }

//   return result;
// }

console.log(duplicateEncode("din") === "(((");
console.log(duplicateEncode("recede") === "()()()");
console.log(duplicateEncode("Success") === ")())())");
console.log(duplicateEncode("(( @") === "))((");
