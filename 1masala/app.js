document.addEventListener("DOMContentLoaded", function () {
  let redLight = document.getElementById("red");
  let yellowLight = document.getElementById("yellow");
  let greenLight = document.getElementById("green");

  function switchLights() {
    redLight.style.backgroundColor = "red";
    yellowLight.style.backgroundColor = "gray";
    greenLight.style.backgroundColor = "gray";

    setTimeout(function () {
      redLight.style.backgroundColor = "gray";
      yellowLight.style.backgroundColor = "yellow";
      greenLight.style.backgroundColor = "gray";

      setTimeout(function () {
        redLight.style.backgroundColor = "gray";
        yellowLight.style.backgroundColor = "gray";
        greenLight.style.backgroundColor = "green";

        setTimeout(function () {
          switchLights();
        }, 2000); 
      }, 2000); 
    }, 2000); 
  }

  switchLights();
});
