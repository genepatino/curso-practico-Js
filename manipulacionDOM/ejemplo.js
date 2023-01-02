const h1 = document.querySelector("h1");
const parrafoId = document.querySelector("p");
const parrafoClase = document.getElementsByClassName("parrafoClase");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const btnResult = document.querySelector("#btnResult");
const printResult = document.querySelector(".printResult");
btnResult.addEventListener("click", onClickBtnResult);

const imagen = document.createElement("img");
imagen.setAttribute(
  "src",
  "https://www.faunia.es/content/dam/fau/images/descubre-faunia/planea-tu-visita/animales/aves/pollito/Pollito-Animales-Faunia-main.jpg"
);
parrafoId.append(imagen);

function onClickBtnResult() {
  const suma = input1.value + input2.value;
  console.log(suma);
  printResult.innerHTML = "Resultado " + suma;
}
