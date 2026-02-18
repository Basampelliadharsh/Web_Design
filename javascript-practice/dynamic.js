const updateContentButton = document.getElementById("updateContentBtn");
const dynamicContentDiv = document.getElementById("dynamicContent");
const up = document.getElementById("testBtn");
const form = document.getElementById("check");
const demo = document.getElementById("point");
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
const elementsContainer = document.getElementById("elementsContainer");
const createElementBtn = document.getElementById("createElementBtn");

createElementBtn.addEventListener("click", () => {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = `Dynamically created element`;
  elementsContainer.appendChild(newParagraph);
});
deleteFirstElementBtn.addEventListener("click", () => {
  if (elementsContainer.children.length > 0) {
    elementsContainer.removeChild(elementsContainer.children[0]);
  }
});
