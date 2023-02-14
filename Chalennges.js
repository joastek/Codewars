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
