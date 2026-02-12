const loginform = document.getElementById("loginform");
const inputinput = document.getElementById("email");
const passwordinput = document.getElementById("password");
loginform.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = inputinput.value;
  const password = passwordinput.value;
  login(email, password);
});
let emails = [
  "adarsh@gmail.com",
  "john@gmail.com",
  "lee@gmail.com",
  "tom@gmail.com",
  "ayan@gmail.com",
];
let passwords = ["09876", "12345", "123456", "098765", "0987654"];

function login(email, password) {
  let index = emails.indexOf(email);
  if (index === -1) {
    console.log("invalid email");
  } else if (passwords[index] !== password) {
    console.log("invalid password");
  } else {
    console.log("Login successful");
  }
}
