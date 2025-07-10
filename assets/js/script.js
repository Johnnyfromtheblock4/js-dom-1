// //imposto le variabili
const button = document.getElementById("my-btn");
const img = document.getElementById("pic");

// button.addEventListener("click", function () {
//   if (button.innerHTML.includes(`Accendi`)) {
//     img.setAttribute(`src`, `assets/img/yellow_lamp.png`);
//     button.innerHTML = `Spegni`;
//   } else {
//     img.setAttribute(`src`, `assets/img/white_lamp.png`);
//     button.innerHTML = `Accendi`;
//   }
// });

button.addEventListener("click", function () {
  if (img.src.includes(`yellow_lamp.png`)) {
    img.src = `assets/img/white_lamp.png`;
    button.innerText = `Accendi`;
  } else {
    img.src = `assets/img/yellow_lamp.png`;
    button.innerText = `Spegni`;
  }
});
