import { Box, Typography } from "@mui/material";
import DailyForecastCard from "../components/DailyForecastCard";
import { getWeatherIcon } from "../helpers/getWeatherIcon";

const SKELETON_DAYS = 7;

export default function DailyForecastContainer({ data, loading }) {
  const { temperature_2m_max = [], temperature_2m_min = [] } =
    data?.daily || {};

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: "30px",
        marginLeft: "3px",
        backgroundColor: "transparent",
        width: "100%",
        minWidth: 0,
        boxSizing: "border-box",
      }}
    >
      <Typography>Daily forecast</Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(3, minmax(0, 1fr))",
            sm: "repeat(4, minmax(0, 1fr))",
            md: "repeat(7, minmax(0, 1fr))",
          },
          gap: 1,
          width: "100%",
          minWidth: 0,
          boxSizing: "border-box",
        }}
      >
        {loading
          ? Array.from({ length: SKELETON_DAYS }).map((_, i) => (
              <Box key={`daily-skeleton-${i}`} sx={{ minWidth: 0, width: "100%" }}>
                <DailyForecastCard loading />
              </Box>
            ))
          : data?.daily?.time?.map((t, i) => {
              const weatherCode = data?.daily?.weather_code[i];

              return (
                <Box key={i} sx={{ minWidth: 0, width: "100%" }}>
                  <DailyForecastCard
                    img={getWeatherIcon(weatherCode)}
                    day={new Date(t)
                      .toLocaleDateString("en-US", { weekday: "long" })
                      .substring(0, 3)}
                    minTemp={temperature_2m_min[i].toFixed(0)}
                    maxTemp={temperature_2m_max[i].toFixed(0)}
                  />
                </Box>
              );
            })}
      </Box>
    </Box>
  );
}
