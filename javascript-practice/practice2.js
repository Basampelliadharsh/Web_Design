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
let students = ["ramesh","don","man"]
students.shift();
console.log(students);