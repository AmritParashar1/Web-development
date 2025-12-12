document.addEventListener('DOMContentLoaded', ()=>{
   const cityInput = document.getElementById("city-input")
   const getWeatherBtn = document.getElementById("get-weather-btn");
   const weatherInfo = document.getElementById("weather-info");
   const cityNameDisplay = document.getElementById("city-name");
   const temperature = document.getElementById("temperature");
   const weatherDescription = document.getElementById("description");
   const errorMessage = document.getElementById("error-message");

   const API_KEY = "d37ef319ca9493e7702a831e249496e2"; //emv variables

   getWeatherBtn.addEventListener("click", async ()=> {
        const city = cityInput.value.trim();
        if(!city) return;

        //it may gave error 
        //server is always in another continent.

        try {

       const weatherData = await fetchWeatherData(city);
       displayWeatherData(weatherData);
         
        } catch (error) {
            showError();
        }
   })

   async function fetchWeatherData(city) {
    //gets the data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);
    console.log(typeof response);
    console.log("RESPONSE", response);
    
    if(!response.ok) {
      throw new Error("City not found");
    }

    const data = response.json();
    return data;

   }

   function displayWeatherData(data) {
    //display
    console.log(data);
    const{name,main,weather} = data;
    cityNameDisplay.textContent = name;
    temperature.textContent = `Temperature : ${main.temp}`;
    weatherDescription.textContent = `Weather : ${weather[0].description}`;

    //unlock the display
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add(hidden);
   }

   function showError() {
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
   }


})