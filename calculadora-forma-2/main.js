let txtN1 = document.querySelector("#n1");
let txtN2 = document.querySelector("#n2");
let txtResult = document.querySelector(".result");
let btnSuma = document.querySelector("#suma");
let btnResta = document.querySelector("#resta");
let btnMultiplicacion = document.querySelector("#multi");
let btnDivision = document.querySelector("#divi");
/**
 * Evento de dectar el click en el boton suma
 */
btnSuma.addEventListener("click", () => {
  let n1 = parseFloat(txtN1.value);
  let n2 = parseFloat(txtN2.value);
  let suma = n1 + n2;
  txtResult.innerHTML = "La suma es " + suma;
});

/**
 * Evento de dectar el click en el boton dividir
 */
btnDivision.addEventListener("click", () => {
  let n1 = parseFloat(txtN1.value);
  let n2 = parseFloat(txtN2.value);
  if (n2 == 0) {
    alert("No se puded dividir entre 0");
    return;
  }
  let dividir = n1 / n2;
  txtResult.innerHTML = "La division es " + dividir;
});
