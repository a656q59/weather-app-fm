import { fetchWeatherApi } from "openmeteo";
import { useEffect, useState } from "react";

const useFetchWeatherData = (searchPayload, units) => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchPayload?.lat == null || searchPayload?.lon == null) return;

    const params = {
      latitude: searchPayload.lat,
      longitude: searchPayload.lon,
      temperature_unit: units?.temperature ?? "celsius",
      wind_speed_unit: units?.windSpeed ?? "kmh",
      precipitation_unit: units?.precipitation ?? "mm",
      timezone: "auto",
      hourly: ["apparent_temperature", "weather_code"],
      daily: ["temperature_2m_max", "temperature_2m_min", "weather_code"],
      current: [
        "wind_speed_10m",
        "apparent_temperature",
        "precipitation",
        "relative_humidity_2m",
        "temperature_2m",
        "weather_code",
      ],
    };
    const url = "https://api.open-meteo.com/v1/forecast";

    const fetchWeatherInfo = async () => {
      setLoading(true);
      setError(null);
      try {
        const responses = await fetchWeatherApi(url, params);
        const response = responses[0];
        // Attributes for timezone and location
        const latitude = response.latitude();
        const longitude = response.longitude();
        const elevation = response.elevation();
        const utcOffsetSeconds = response.utcOffsetSeconds();

        // console.log(
        //   `\nCoordinates: ${latitude}°N ${longitude}°E`,
        //   `\nElevation: ${elevation}m asl`,
        //   `\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`,
        //   `\n weather info:`,
        //   weatherInfo,
        // );

        const current = response.current();
        const hourly = response.hourly();
        const daily = response.daily();
        // Note: The order of weather variables in the URL query and the indices below need to match!
        setWeatherInfo({
          current: {
            time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
            wind_speed_10m: current.variables(0).value(),
            apparent_temperature: current.variables(1).value(),
            precipitation: current.variables(2).value(),
            relative_humidity_2m: current.variables(3).value(),
            temperature_2m: current.variables(4).value(),
            weather_code: current.variables(5).value(),
          },
          hourly: {
            time: Array.from(
              {
                length:
                  (Number(hourly.timeEnd()) - Number(hourly.time())) /
                  hourly.interval(),
              },
              (_, i) =>
                new Date(
                  (Number(hourly.time()) +
                    i * hourly.interval() +
                    utcOffsetSeconds) *
                    1000,
                ),
            ),
            weather_code: hourly.variables(1).valuesArray(),
            apparent_temperature: hourly.variables(0).valuesArray(),
          },
          daily: {
            weather_code: daily.variables(2).valuesArray(),
            time: Array.from(
              {
                length:
                  (Number(daily.timeEnd()) - Number(daily.time())) /
                  daily.interval(),
              },
              (_, i) =>
                new Date(
                  (Number(daily.time()) +
                    i * daily.interval() +
                    utcOffsetSeconds) *
                    1000,
                ),
            ),
            temperature_2m_max: daily.variables(0).valuesArray(),
            temperature_2m_min: daily.variables(1).valuesArray(),
            weather_code: daily.variables(2).valuesArray(),
          },
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherInfo();
  }, [searchPayload, units]);

  return { weatherInfo, loading, error };
};

export default useFetchWeatherData;
