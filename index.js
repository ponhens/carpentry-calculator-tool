function countHypotenuse() {
  const lengthValue = document.getElementById("length-value").value;
  const heigthValue = document.getElementById("heigth-value").value;

  const hypotenuse = Math.sqrt(
    lengthValue * lengthValue + heigthValue * heigthValue
  );
  const degree = (Math.atan(heigthValue / lengthValue) * 180) / Math.PI;

  console.log("degree " + degree);

  document.getElementById("pyth-result").innerText =
    roundUpToThreeDecimals(hypotenuse);
}

function countUsingTan(event) {
  if (event.target.id == "tan-heigth-value") {
    const heigthValue = event.target.value;
    console.log(event.target.value, " sin");
    const degreeValue = document.getElementById("degree-value").value;
    const lengthValue = heigthValue / Math.tan((degreeValue * Math.PI) / 180);
    console.log(lengthValue, " sin");
    document.getElementById("tan-length-value").value =
      roundUpToThreeDecimals(lengthValue);
  }
  if (event.target.id == "tan-length-value") {
    const lengthValue = event.target.value;
    console.log(event.target.value, " cos");
    const degreeValue = document.getElementById("degree-value").value;
    const heigthValue = lengthValue * Math.tan((degreeValue * Math.PI) / 180);
    console.log(heigthValue, " cos");
    document.getElementById("tan-heigth-value").value =
      roundUpToThreeDecimals(heigthValue);
  }

  if (event.target.id == "degree-value") {
    const degreeValue = event.target.value;
    const lengthValue = document.getElementById("tan-length-value").value;
    const heigthValue = lengthValue * Math.tan((degreeValue * Math.PI) / 180);
    document.getElementById("tan-heigth-value").value =
      roundUpToThreeDecimals(heigthValue);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("heigth-value")
    .addEventListener("input", countHypotenuse);
  document
    .getElementById("length-value")
    .addEventListener("input", countHypotenuse);
  countHypotenuse();

  document
    .getElementById("tan-heigth-value")
    .addEventListener("input", countUsingTan);
  document
    .getElementById("tan-length-value")
    .addEventListener("input", countUsingTan);
  document
    .getElementById("degree-value")
    .addEventListener("input", countUsingTan);
  countUsingTan();
});

function roundUpToThreeDecimals(num) {
  return Math.ceil(num * 1000) / 1000;
}
