const num1Input = document.querySelector("#num1");
const num2Input = document.querySelector("#num2");
const addBtn = document.querySelector("#addBtn");
const subBtn = document.querySelector("#subBtn");
const result = document.querySelector("#result");
addBtn.addEventListener("click", function () {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);
  const sum = num1 + num2;
  result.textContent = "The sum of the two numbers is: " + sum;
});
subBtn.addEventListener("click", function () {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);
  const difference = num1 - num2;
  result.textContent = "The difference of the two numbers is: " + difference;
});

