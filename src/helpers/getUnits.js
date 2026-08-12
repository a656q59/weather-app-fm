export const getUnits = (title) => {
  if (title === "Feels Like") {
    return "°";
  }
  if (title === "Humidity") {
    return "%";
  }
  if (title === "Wind") {
    return "km/h";
  }
  if (title === "Precipitation") {
    return "mm";
  }
  if (title === "Temperature") {
    return "°";
  }
  return "";
};
