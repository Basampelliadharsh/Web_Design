const button = document.getElementById("changeparabutton");
const dynamic = document.getElementById("dynamicContent");

button.addEventListener("click", function () {
  dynamic.innerHTML = "<p>push it adds the end of the element in array<p/>";
});
