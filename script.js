const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '03090b4956msh18916b959b00254p17bcbcjsn0fbac6b87daf',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


const getWeather = (city) => {

    cityname.innerHTML = city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)

            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            wind_degrees.innerHTML = response.wind_degrees
            wind_degrees2.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed


        })
        .catch(err => console.error(err));
}

submit.addEventListener('click', (e) => {

    e.preventDefault(); //Not to refresh 
    getWeather(city.value);
})
getWeather("Mumbai");


const getWeatherMumbai = () => {
    try {
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            cloud_pct_Mumbai.innerHTML = response.cloud_pct

            feels_like_Mumbai.innerHTML = response.feels_like
            humidity_Mumbai.innerHTML = response.humidity
            max_temp_Mumbai.innerHTML = response.max_temp
            min_temp_Mumbai.innerHTML = response.min_temp
            sunrise_Mumbai.innerHTML = response.sunrise
            sunset_Mumbai.innerHTML = response.sunset
            temp_Mumbai.innerHTML = response.temp
            wind_degrees_Mumbai.innerHTML = response.wind_degrees
            wind_speed_Mumbai.innerHTML = response.wind_speed


        })
    }
    catch (error) {
        console.error(error);
    }
}
getWeatherMumbai();


const getWeatherDelhi = () => {
    try {
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            cloud_pct_Delhi.innerHTML = response.cloud_pct

            feels_like_Delhi.innerHTML = response.feels_like
            humidity_Delhi.innerHTML = response.humidity
            max_temp_Delhi.innerHTML = response.max_temp
            min_temp_Delhi.innerHTML = response.min_temp
            sunrise_Delhi.innerHTML = response.sunrise
            sunset_Delhi.innerHTML = response.sunset
            temp_Delhi.innerHTML = response.temp
            wind_degrees_Delhi.innerHTML = response.wind_degrees
            wind_speed_Delhi.innerHTML = response.wind_speed


        })
    }
    catch (error) {
        console.error(error);
    }
}
getWeatherDelhi();


const getWeatherHaryana = () => {
    try {
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Haryana', options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            cloud_pct_Haryana.innerHTML = response.cloud_pct

            feels_like_Haryana.innerHTML = response.feels_like
            humidity_Haryana.innerHTML = response.humidity
            max_temp_Haryana.innerHTML = response.max_temp
            min_temp_Haryana.innerHTML = response.min_temp
            sunrise_Haryana.innerHTML = response.sunrise
            sunset_Haryana.innerHTML = response.sunset
            temp_Haryana.innerHTML = response.temp
            wind_degrees_Haryana.innerHTML = response.wind_degrees
            wind_speed_Haryana.innerHTML = response.wind_speed


        })
    }
    catch (error) {
        console.error(error);
    }
}
getWeatherHaryana();


const getWeatherPune = () => {
    try {
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune', options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            cloud_pct_Pune.innerHTML = response.cloud_pct

            feels_like_Pune.innerHTML = response.feels_like
            humidity_Pune.innerHTML = response.humidity
            max_temp_Pune.innerHTML = response.max_temp
            min_temp_Pune.innerHTML = response.min_temp
            sunrise_Pune.innerHTML = response.sunrise
            sunset_Pune.innerHTML = response.sunset
            temp_Pune.innerHTML = response.temp
            wind_degrees_Pune.innerHTML = response.wind_degrees
            wind_speed_Pune.innerHTML = response.wind_speed


        })
    }
    catch (error) {
        console.error(error);
    }
}
getWeatherPune();



const getWeatherKasol = () => {
    try {
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kasol', options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)

            cloud_pct_Kasol.innerHTML = response.cloud_pct
            feels_like_Kasol.innerHTML = response.feels_like
            humidity_Kasol.innerHTML = response.humidity
            max_temp_Kasol.innerHTML = response.max_temp
            min_temp_Kasol.innerHTML = response.min_temp
            sunrise_Kasol.innerHTML = response.sunrise
            sunset_Kasol.innerHTML = response.sunset
            temp_Kasol.innerHTML = response.temp
            wind_degrees_Kasol.innerHTML = response.wind_degrees
            wind_speed_Kasol.innerHTML = response.wind_speed


        })
    } catch (error) {
        console.error(error);
    }

}
getWeatherKasol();


const getWeatherPunjab = () => {

    try {
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Punjab', options)
            .then(response => response.json())
            .then((response) => {
                console.log(response)

                cloud_pct_Punjab.innerHTML = response.cloud_pct
                feels_like_Punjab.innerHTML = response.feels_like
                humidity_Punjab.innerHTML = response.humidity
                max_temp_Punjab.innerHTML = response.max_temp
                min_temp_Punjab.innerHTML = response.min_temp
                sunrise_Punjab.innerHTML = response.sunrise
                sunset_Punjab.innerHTML = response.sunset
                temp_Punjab.innerHTML = response.temp
                wind_degrees_Punjab.innerHTML = response.wind_degrees
                wind_speed_Punjab.innerHTML = response.wind_speed


            })
    }
    catch (error) {
        console.error(error);
    }
}




getWeatherPunjab();