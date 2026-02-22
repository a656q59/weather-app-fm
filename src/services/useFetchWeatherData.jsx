import { fetchWeatherApi } from "openmeteo";
import { useEffect, useState } from "react";


const useFetchWeatherData = () => {
    const [weatherInfo, setWeatherInfo] = useState(null);





    useEffect(() => {
        if (weatherInfo) {
            console.log(weatherInfo);
        }
        const params = {
            latitude: 52.52,
            longitude: 13.41,
            hourly: "temperature_2m",
            current: ["wind_speed_10m", "apparent_temperature", "precipitation", "relative_humidity_2m"],
        };
        const url = "https://api.open-meteo.com/v1/forecast";

        const fetchWeatherInfo = async () => {
            const responses = await fetchWeatherApi(url, params);

            // Process first location. Add a for-loop for multiple locations or weather models
            const response = responses[0];

            // console.log("error occured");


            // Attributes for timezone and location
            const latitude = response.latitude();
            const longitude = response.longitude();
            const elevation = response.elevation();
            const utcOffsetSeconds = response.utcOffsetSeconds();

            console.log(
                `\nCoordinates: ${latitude}°N ${longitude}°E`,
                `\nElevation: ${elevation}m asl`,
                `\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`,
            );

            const current = response.current();
            const hourly = response.hourly();

            // Note: The order of weather variables in the URL query and the indices below need to match!
            setWeatherInfo({
                current: {
                    time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
                    wind_speed_10m: current.variables(0).value(),
                    apparent_temperature: current.variables(1).value(),
                    precipitation: current.variables(2).value(),
                    relative_humidity_2m: current.variables(3).value(),
                },
                hourly: {
                    time: Array.from(
                        { length: (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval() },
                        (_, i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
                    ),
                    temperature_2m: hourly.variables(0).valuesArray(),
                },
            })
        }
        fetchWeatherInfo();
    }, [])



    // The 'weatherData' object now contains a simple structure, with arrays of datetimes and weather information
    // console.log(
    //     `\nCurrent time: ${weatherData.current.time}\n`,
    //     `\nCurrent wind_speed_10m: ${weatherData.current.wind_speed_10m}`,
    //     `\nCurrent apparent_temperature: ${weatherData.current.apparent_temperature}`,
    //     `\nCurrent precipitation: ${weatherData.current.precipitation}`,
    //     `\nCurrent relative_humidity_2m: ${weatherData.current.relative_humidity_2m}`,
    // );
    // console.log("\nHourly data:\n", weatherData.hourly)

    return weatherInfo;
}

export default useFetchWeatherData