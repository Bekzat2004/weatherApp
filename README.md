# Weather Forecast Project by Kanay Bekzat SE-2210
## Description of Project

The Weather Forecast Project utilizes several APIs to provide a comprehensive weather forecasting experience. The main APIs used, along with their specific usage, are:

1. **OpenWeatherMap API:**
   - Used to display real-time weather data for a city entered by the user.
   - Information displayed includes temperature, weather description, icon representation, coordinates (latitude and longitude), feels-like temperature, humidity, pressure, wind speed, and country code.
   - More information: [OpenWeatherMap API Documentation](https://openweathermap.org/api).

2. **OpenStreetMap:**
   - Used to display the location of the city entered by the user on an interactive map.
   - Enhances the user experience by providing a visual representation of the location using OpenStreetMap tiles.
   - More information: [OpenStreetMap](https://www.openstreetmap.org/).

3. **IPify API:**
   - Used to retrieve the public IP address of the user.
   - Provides an additional layer of convenience by automatically determining the user's IP address.
   - More information: [IPify API Documentation](https://www.ipify.org/).

4. **IPinfo API:**
   - Used to display detailed IP geolocation information of the user.
   - Enhances the project's capability to provide users with information about their current location.
   - More information: [IPinfo API Documentation](https://ipinfo.io/developers).


## Project Overview

The Weather Forecast Project combines weather data from OpenWeatherMap with interactive maps powered by Leaflet. Users can input their location or allow the application to retrieve their IP address to display local weather conditions. Additional features provided by IPify and IPinfo enhance user convenience.

## Design solution

**Bootstrap Styling - Grayscale Theme:**
   - The project styling is based on Bootstrap, and the Grayscale theme from [Start Bootstrap](https://startbootstrap.com/theme/grayscale) was used.
   - Bootstrap provides a responsive and visually appealing design, enhancing the overall user interface.

## Setup Instructions

1. **Install Node.js:**
   - Download Node.js from the [official Node.js website](https://nodejs.org/).

2. **Install Express:**
   - Open a terminal, navigate to the directory where `server.js` is located, and run the following command to install Express:
     ```bash
     npm install express
     ```

3. **Run the Server:**
   - In the same terminal, run the following command to start the server:
     ```bash
     node server.js
     ```
   - This will start the server, and you should see a message indicating that it's running on [http://localhost:3000](http://localhost:3000).


