//imposto le variabili
const button = document.getElementById("my-btn");
const img = document.getElementById("pic");

button.addEventListener("click", function () {
  if (img.classList.contains("spenta")) {
    img.setAttribute("src", "assets/img/yellow_lamp.png");
    button.innerHTML = "Spegni"
  }
});
