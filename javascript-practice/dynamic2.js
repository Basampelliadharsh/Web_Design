const button = document.getElementById("changeparabutton");
const dynamic = document.getElementById("dynamicContent");

button.addEventListener("click", function () {
  dynamic.innerHTML = "<p>push it adds the end of the element in array<p/>";
});
const box = document.getElementById("box");
const addbtn = document.getElementById("addbutton");
const removelastbtn = document.getElementById("removelastbtn");
let count = 1;

addbtn.addEventListener("click", () => {
  const newElement = document.createElement("div");
  newElement.textContent = "Elememt " + count++;
  box.appendChild(newElement);
});
removelastbtn.addbEventListener("click", () => {
  if (box.children.length > 0) {
    box.removeChild(box.lastElementChild);
  }
});
