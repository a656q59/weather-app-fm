export const METRIC_UNITS = {
  temperature: "celsius",
  windSpeed: "kmh",
  precipitation: "mm",
};

export const IMPERIAL_UNITS = {
  temperature: "fahrenheit",
  windSpeed: "mph",
  precipitation: "inch",
};

export const isMetricSystem = (units) =>
  units?.temperature === METRIC_UNITS.temperature &&
  units?.windSpeed === METRIC_UNITS.windSpeed &&
  units?.precipitation === METRIC_UNITS.precipitation;

const UNIT_LABELS = {
  FeelsLike: {
    celsius: "°",
    fahrenheit: "°",
  },
  Temperature: {
    celsius: "°",
    fahrenheit: "°",
  },
  Humidity: {
    default: "%",
  },
  Wind: {
    kmh: " km/h",
    mph: " mph",
  },
  Precipitation: {
    mm: " mm",
    inch: " in",
  },
};

export const getUnits = (title, units = METRIC_UNITS) => {
  const labels = UNIT_LABELS[title];
  if (!labels) return "";

  if (title === "Humidity") return labels.default;

  if (title === "Feels Like" || title === "Temperature") {
    return labels[units.temperature] ?? "°";
  }

  if (title === "Wind") {
    return labels[units.windSpeed] ?? "";
  }

  if (title === "Precipitation") {
    return labels[units.precipitation] ?? "";
  }

  return "";
};
