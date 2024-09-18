//let formSuma = document.querySelector("#formSuma");
let formSuma = document.getElementById("formSuma");

formSuma.addEventListener("submit", (e) => {
  e.preventDefault();
  let n1 = e.target.nmbN1.value;
  let n2 = e.target.nmbN2.value;
  let btnOperacionData = document.querySelectorAll(".btn-operacion");
  btnOperacionData.forEach((element) => {
    element.addEventListener("click", () => {
      let value = element.getAttribute("value");
      if (value == "Sumar") {
        var flN1 = parseFloat(n1);
        var flN2 = parseFloat(n2);
        var result = flN1 + flN2;
      } else if (value == "Restar") {
        var flN1 = parseFloat(n1);
        var flN2 = parseFloat(n2);
        var result = flN1 - flN2;
      } else if (value == "Multiplicar") {
        var flN1 = parseFloat(n1);
        var flN2 = parseFloat(n2);
        var result = flN1 * flN2;
      } else if (value == "Dividir") {
        var flN1 = parseFloat(n1);
        var flN2 = parseFloat(n2);
        var result = flN1 / flN2;
      }
      document.querySelector(".result").innerHTML = "Resultado : " + result;
    });
  });
});
