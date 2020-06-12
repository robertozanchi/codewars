// Convert string to camel case
// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

/*
Complete the method/function so that it converts dash/underscore delimited 
words into camel casing. The first word within the output should be capitalized
 only if the original word was capitalized (known as Upper Camel Case, also often
   referred to as Pascal case).
*/

/*
Problem
- input: string
- output: string
- rules:
  - convert dash/underscore-delimited words into camel casing
  - do not change capitalization of the first word
  - assume that the argument is always a string, can be empty
  - assume that no underscore is used within words
  - assume that no dash is used within words
  - make letters of a word beyond first letter of a word lowercase

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
toCamelCase('') // returns ''

Data structures
- Use strings and arrays and related methods

Algorithm
- declare an empty string output
- split text string argument into individual words
  - determine whether dash or underscore is used to separate words
- concatenate the first word to output as is, no caps changed
- concatenate following words with first letter capitalized and others lowercase
- return output string
*/

function toCamelCase(text) {
  let result = "";
  let words;
  if (text.includes("_")) {
    words = text.split("_");
  } else {
    words = text.split("-");
  }
  console.log(words);

  if (words) {
    result += words[0];

    for (let idx = 1; idx < words.length; idx += 1) {
      result += words[idx][0].toUpperCase() + words[idx].slice(1);
    }
  }

  return result;
}

toCamelCase("the-stealth-warrior"); // returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior"); // returns "TheStealthWarrior"
toCamelCase(""); // returns ''
