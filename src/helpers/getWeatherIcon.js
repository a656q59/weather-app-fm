import iconSunny from "../assets/images/weatherIcons/icon-sunny.webp";
import iconCloudy from "../assets/images/weatherIcons/icon-partly-cloudy.webp";
import iconFog from "../assets/images/weatherIcons/icon-fog.webp";
import iconDrizzle from "../assets/images/weatherIcons/icon-drizzle.webp";
import iconOvercast from "../assets/images/weatherIcons/icon-overcast.webp";
import iconRain from "../assets/images/weatherIcons/icon-rain.webp";
import iconSnow from "../assets/images/weatherIcons/icon-snow.webp";
import iconStorm from "../assets/images/weatherIcons/icon-storm.webp";

export const getWeatherIcon = (weatherCode) => {
  const wCode = Number(weatherCode);
  switch (wCode) {
    case 0:
      return iconSunny;
    case 1:
    case 2:
    case 3:
      return iconCloudy;
    case 45:
    case 48:
      return iconFog;
    case 51:
    case 53:
    case 55:
      return iconDrizzle;
    case 56:
    case 57:
      return iconOvercast;
    case 61:
    case 63:
      return iconRain;
    case 66:
    case 67:
      return iconRain;
    case 71:
    case 73:
    case 75:
      return iconSnow;
    default:
      return iconStorm;
  }
};
