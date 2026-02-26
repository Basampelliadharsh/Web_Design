/*let students = ["mahesh", "suresh", "ramesh", "suresh"];
console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);

let marks = [10, 20, 30, 40, 50];
console.log(marks);
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);

const btn = document.getElementById("submitBtn");
const inp = document.getElementById("nameInput");

btn.addEventListener("click", () => {
  console.log("clicked");
});
inp.addEventListener("input", (event) => {
  console.log("User is typing:", inp.value);
});

students = ["mahesh", "suresh", "ramesh", "suresh"];

console.log(students.length);

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}
let count = 0;

for (let i = 0; i < students.length; i++) {
  if (students[i] === "mahesh") {
    count++;
  }
}
console.log("The number of times mahesh appears is:", count);


let word = "javascript";
console.log(word.slice(4));
console.log(word.includes("script"));
let name = "ranjith";
console.log(name.toUpperCase());
let a = "ADHARSH";
console.log(a.toLowerCase());
console.log(a.length);
let password = "tommy";
if (password.length >= 8) {
  console.log("strong passwprd");
} else {
  console.log("weak password");
}
let username = "virat";
if (username.length >= 6) {
  console.log("valid user name");
} else {
  console.log("username must contain atleast 6 letters");
}
*/
let students = ["ramesh", "don", "man"];
students.shift();
console.log(students);
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));
console.log(checkEvenOdd(5));

function findLargest(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(findLargest(33, 5, 55));

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log("markram");
let word = "Adharsh";
let riversed = "";
for (let i = word.length - 1; i >= 0; i--) {
  riversed += word[i];
  console.log(riversed);
}

for (let i = 1; i <= 5; i++) {
  let num = "";
  for (let j = 5; j >= i; j--) {
    num += j;
  }
  console.log(num);
}
for (let i = 1; i <= 5; i++) {
  let num = "";
  for (let j = 1; j <= i; j++) {
    num += j;
  }
  console.log(num);
}
for (let i = 1; i <= 5; i++) {
  let num = "";
  for (let j = 1; j <= i; j++) {
    num += i;
  }
  console.log(num);
}
function factorial(n) {
  let result = 1;
  return 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}
console.log(factorial(10));
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));
function findLargestInArray(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
    result = largest;
  }
  return result;
}
console.log(findLargestInArray([33, 4, 55, 7, 76]));
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(10));
function capitalWords(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
console.log(capitalWords("hello peter parkour"));
function pow(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}
console.log(pow(2, 3));
console.log(pow(5, 2));
console.log(pow(3, 4));
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    total = sum += arr[i];
  }
  return total;
}
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));
function coinFlip() {
  const result = Math.random() < 0.5 ? "heads" : "tails";
  return result;
}
console.log(coinFlip());
