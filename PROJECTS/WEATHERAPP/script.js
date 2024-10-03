 const apikey = "3a4583ea3fd6157dab3c67c9a67b7908";
 const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

 const searchBox = document.querySelector(".searchbox");
 const searchBtn = document.querySelector(".searchbtn");

 const weatherIcon = document.querySelector(".mainimg");



 async function checkWeather(city) {
    const response = await fetch(apiurl+ city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidityper').innerHTML = data.main.humidity + "%";
    document.querySelector('.windspeed').innerHTML = data.wind.speed + "km/hr";


    if(data.weather[0].main = "Clouds"){

        weatherIcon.src = "./img/clouds.png";


    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./img/clear.png";

    }

    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./img/rain.png";

    }

    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./img/drizzle.png";

    }

    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./img/mist.png";

    }



    
 }

 searchBtn.addEventListener("click"  , ()=>{

     checkWeather(searchBox.value.trim());
 })

 searchBox.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
         // Call addTask when Enter key is pressed

         checkWeather(searchBox.value.trim());
    }
});

