document.addEventListener('DOMContentLoaded', function () {
  const weatherInfoElement = document.getElementById('weather-info');
  const cityInput = document.getElementById('city-input');
  const submitButton = document.getElementById('submit-button');

  submitButton.addEventListener('click', function () {
    const cityName = cityInput.value;

    if (!cityName) {
      weatherInfoElement.innerHTML = '<p>Please enter a city name.</p>';
      return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0d46ea1cd2dd26a0ce47b5a9dd771b4c&units=metric`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        weatherInfoElement.innerHTML = `
        <style>p {color: white}</style>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Description: ${data.weather[0].description}</p>
        <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon">
        <p>Latitude: ${data.coord.lat}</p>
        <p>Longitude: ${data.coord.lon}</p>
        <p>Feels Like: ${data.main.feels_like} °C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Pressure: ${data.main.pressure} hPa</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <p>Country Code: ${data.sys.country}</p>
        <p>Rain Volume (last 3 hours): ${data.rain ? data.rain['3h'] : 'N/A'} mm</p>
        `;

      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        weatherInfoElement.innerHTML = '<p style="color:white">Failed to retrieve weather data. Please try again later.</p>';
      });
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('map').setView([0, 0], 2);
    const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    document.getElementById('submit-button').addEventListener('click', function () {
      const cityName = document.getElementById('city-input').value;
      fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${cityName}`)
        .then(response => response.json())
        .then(data => {
          if (data.length > 0) {
            const cityCoordinates = [parseFloat(data[0].lat), parseFloat(data[0].lon)];
            map.setView(cityCoordinates, 10);
            map.eachLayer(layer => {
              if (layer instanceof L.Marker) {
                map.removeLayer(layer);
              }
            });
            const cityMarker = L.marker(cityCoordinates).addTo(map);
            cityMarker.bindPopup(`<b>${cityName}</b>`).openPopup();
          } else {
            alert('City not found. Please enter a valid city name.');
          }
        })
        .catch(error => {
          console.error('Error fetching city coordinates:', error);
        });
      });
    });
    async function getIpAddress() {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const ipAddressElement = document.getElementById('ipAddress');
        ipAddressElement.textContent = ` ${data.ip}`;
        const geoData = await getGeolocationInfo(data.ip);
        displayGeolocationInfo(geoData);
      } catch (error) {
        console.error('Error:', error.message);
      }
    }

    async function getGeolocationInfo(ipAddress) {
      try {
        const geoResponse = await fetch(`https://ipinfo.io/${ipAddress}/geo`);
          const geoData = await geoResponse.json();
          return geoData;
        } catch (error) {
          console.error('Error:', error.message);
        }
      }

      function displayGeolocationInfo(geoData) {
        const geolocationInfoElement = document.getElementById('geolocationInfo');
        geolocationInfoElement.innerHTML = '';

        const ul = document.createElement('ul');

        for (const [key, value] of Object.entries(geoData)) {
          if (key == "readme") {continue;}
          const li = document.createElement('li');
          li.textContent = `${key}: ${value}`;
          ul.appendChild(li);
        }

        geolocationInfoElement.appendChild(ul);
      }
