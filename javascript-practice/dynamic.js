const updateContentButton = document.getElementById("updateContentBtn");
const dynamicContentDiv = document.getElementById("dynamicContent");
const up = document.getElementById("testBtn");
const form = document.getElementById("check");
const demo = document.getElementById("point");
const momo = document.getElementById("output");

updateContentButton.addEventListener("click", function () {
  dynamicContentDiv.innerHTML = "<p>Quick check</p>";
});
up.addEventListener("click", function () {
  dynamicContentDiv.innerHTML = "<p>electro magnetic forces</p>";
});
form.addEventListener("click", function () {
  dynamicContentDiv.innerHTML = "<p>synchronization</p>";
});
demo.addEventListener("click", function () {
  dynamicContentDiv.innerHTML = "<p>tomorrow we will connect</p>";
});
momo.addEventListener("click", function () {
  dynamicContentDiv.innerHTML = "<p>are we ready</p>";
});
