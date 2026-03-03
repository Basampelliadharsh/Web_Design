const count = document.getElementById("count");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");
decreaseBtn.addEventListener("click", function () {
  count.textContent--;
});
resetBtn.addEventListener("click", function () {
  count.textContent = 0;
});
increaseBtn.addEventListener("click", function () {
  count.textContent++;
});
