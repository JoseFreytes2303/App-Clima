const apiKey = '62ae85d5791ca95a2f221223482abcc2';
const diferenciaKelvin = 273.15;

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value;
    if (ciudad) {
        fetchDatosClima(ciudad);
    }
});

function fetchDatosClima(ciudad) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => mostrarDatosClima(data));
}

function mostrarDatosClima(data) {
    const divDatoClima = document.getElementById('datosClima');
    divDatoClima.innerHTML = '';

    const ciudadNombre = data.name;
    const paisNombre = data.sys.country;
    const temperatura = data.main.temp;
    const humedad = data.main.humidity
    const descripcion = data.weather[0].description;

    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent =  `${ciudadNombre}, ${paisNombre} ` ;

    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura - diferenciaKelvin)}°C`;

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es: ${humedad}%`

    const descripcionInfo = document.createElement('p');
    descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`;

    divDatoClima.appendChild(ciudadTitulo);
    divDatoClima.appendChild(temperaturaInfo);
    divDatoClima.appendChild(humedadInfo);
    divDatoClima.appendChild(descripcionInfo);
}
