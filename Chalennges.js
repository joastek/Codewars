////Convert a String to a Number!/////
////We need a function that can transform a string into a number. What ways of achieving this do you know?////

function generateHashtag(string) {
  if (string.trim() === "") return false;

  const stringWithCamelCase = string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  const stringWithHashtag = `#${stringWithCamelCase.trim()}`;

  return stringWithHashtag.length > 140 ? false : stringWithHashtag;
}

console.log(generateHashtag("hello word"));

//////////Extract the domain name from a URL///////
/////Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:///
function domainName(url) {
  url = url.replace("http://", "");
  url = url.replace("https://", "");
  url = url.replace("www.", "");
  return url.split(".")[0];
}

console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("www.xakep.ru"));

//////////Good vs evil////////

function goodVsEvil(good, evil) {
  const goodGuy = good
    .split(" ")
    .map(Number)
    .reduce((a, b) => a + b, 0);
  const badGuy = evil
    .split(" ")
    .map(Number)
    .reduce((a, b) => a + b, 0);

  if (goodGuy > badGuy) {
    console.log("Battle Result: Good triumphs over Evil");
  } else {
    console.log("Battle Result: Evil eradicates all trace of Good");
  }
}

console.log(goodVsEvil("1 1 1 1 1 1", "2 2 2 2 2 1 1"));

const numBers = "1";

console.log(Number(numBers));

function solution(str) {
  return str.split("").reverse().join("");
}
console.log(solution("numbers"));
function squareSum1(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] ** 2;
  }
  return sum;
}

console.log(squareSum1([4]));

////regex validate PIN code/////

function validatePIN(pin) {
  let sum = 0;
  for (let i = 4; i === pin.length; i++) {
    sum += pin[i];
  }
}

console.log(validatePIN("11123"));

const grow = (x) => x.reduce((a, b) => a * b);
console.log(grow([2, 3]));

function disemvowel(str) {
  str = str.replace(/[aeiou]/gi, "");

  return str;
}

console.log(disemvowel("This website is for losers LOL"));

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

console.log(greet("jan"));

// function friend(friends) {
//   friends = friends.replace(/[aeiou]/gi, "");
//   return friends;
// }

function friend(friends) {
  return friends.filter(function (item) {
    return item.length === 4;
  });
}

console.log(friend(["Ryan", "Kieran", "Mark"]));

////////who like this?//////////
const likes = (names, length = names.length) =>
  length < 1
    ? "no one like this"
    : length < 2
    ? `${names[0]} like this`
    : length < 3
    ? `${names[0]} and ${names[1]} like this`
    : length < 4
    ? `${names[0]},${names[1]} and ${names[2]} others like this`
    : `${names[0]},${names[1]} and ${length - 2} others like this`;

console.log(["Alex", "Jacob", "Mark", "Max"]);
const name1 = ["Alex", "Jacob", "Mark", "Max"];

const name2 = name1[0];
const name3 = name1[1];
const [x, y] = name1;
console.log(x, y);

////remove first and last character
function removeChar(str, length = str.length - 1) {
  return str.substring(1, length);
}

console.log(removeChar("eloquent"));

//Square(n) Sum
// function squareSum(numbers) {}
// const squareSum = (x) => x.reduce((a, B) => a ** 2 + B ** 2);
// console.log(squareSum([1, 2]));
// console.log(squareSum([1, 2, 4, 6]));
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i] ** 2;
// }
// return sum;

/////Credit Card Mask
const maskify = (cc, num = 4, mask = "*") =>
  ("" + cc).slice(0, -num).replace(/./g, mask) + ("" + cc);
console.log(maskify("4556364607935616"));

//Stop gninnipS My sdroW!
const word = "hell";
const spinWords = (string) => string.split("").reverse().join("");
console.log(spinWords("Welcome"));
function spinWords1(string) {
  const words = string.split(" ");
  console.log(words);
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      words[i] = words[i].split("").reverse().join("");
    }
  }
  return words.join(" ");
}

console.log(spinWords1("Welcome hell"));
