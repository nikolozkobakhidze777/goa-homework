let str = prompt("Enter a string:");
let char = prompt("Enter a character to find the FIRST occurrence:");
console.log(str.indexOf(char));

let str2 = prompt("Enter a string:");
let char2 = prompt("Enter a character to find the LAST occurrence:");
console.log(str2.lastIndexOf(char2));

let sentence = prompt("Enter a sentence:");
let wordToReplace = prompt("Enter the word you want to replace:");
let newWord = prompt("Enter the new word:");
let replacedSentence = sentence.replace(wordToReplace, newWord);
console.log(replacedSentence);

let text = prompt("Enter a sentence to replace spaces with _:");
let underscored = text.replaceAll(" ", "_");
console.log(underscored);

let s = prompt("Enter a sentence to extract the FIRST word:");
let spaceIndex = s.indexOf(" ");
let firstWord = s.slice(0, spaceIndex);
console.log(firstWord);