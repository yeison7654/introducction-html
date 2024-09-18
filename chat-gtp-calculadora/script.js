// Función para agregar el número o símbolo al display
function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

// Función para limpiar el display
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Función para borrar el último dígito
function deleteLast() {
  let currentDisplay = document.getElementById("display").value;
  document.getElementById("display").value = currentDisplay.slice(0, -1);
}

// Función para calcular el resultado
function calculateResult() {
  try {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
