const temperature = 10;
const windSpeed = 9.7;
const windChillContainer = document.querySelector("#wind-chill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChillContainer.textContent = calculateWindChill(temperature, windSpeed).toFixed(1) + "°C";
}
else {
    windChillContainer.textContent = "N/A";
}

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * (windSpeed ** 0.16) + 0.3965 * temperature * (windSpeed ** 0.16);
}