// Simple pig latin:

// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
//  Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  str = str
    .split(" ")
    .map((word) => word.slice(1) + word[0] + "ay")
    .join(" ");
  if (str.includes("!")) {
    return str.substr(0, str.length - 2);
  } else if (str.includes("?")) {
    return str.substr(0, str.length - 2);
  }
  return str;
}
