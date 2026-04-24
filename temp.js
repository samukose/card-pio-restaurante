let celsius = document.getElementById("celsius");
let resultado = document.getElementById("resultado");

function converter() {
    let celsiusValue = parseFloat(celsius.value);
    let fahrenheitValue = (celsiusValue * 9/5) + 32;
    resultado.textContent = `${celsiusValue}°C é igual a ${fahrenheitValue.toFixed(2)}°F.`;

    if(celsiusValue == null || isNaN(celsiusValue)) {
        resultado.textContent = "Por favor, digite uma temperatura válida em Celsius.";
    }
}