function convertTemperature() {
    let value = parseFloat(document.getElementById("inputTemp").value);
    let unit = document.getElementById("inputUnit").value;

    let celsius, fahrenheit, kelvin;

    if (isNaN(value)) {
        alert("Please enter a valid number.");
        return;
    }

    if (unit === "celsius") {
        celsius = value;
        fahrenheit = (value * 9/5) + 32;
        kelvin = value + 273.15;
    } else if (unit === "fahrenheit") {
        celsius = (value - 32) * 5/9;
        fahrenheit = value;
        kelvin = celsius + 273.15;
    } else if (unit === "kelvin") {
        celsius = value - 273.15;
        kelvin = value;
        fahrenheit = (celsius * 9/5) + 32;
    }

    document.getElementById("celsiusResult").innerText = `Celsius: ${celsius.toFixed(2)} °C`;
    document.getElementById("fahrenheitResult").innerText = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    document.getElementById("kelvinResult").innerText = `Kelvin: ${kelvin.toFixed(2)} K`;
}
