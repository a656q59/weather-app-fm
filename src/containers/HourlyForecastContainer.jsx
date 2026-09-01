import HourlyForecastCard from "../components/HourlyForecastCard";
import { Box, Grid, Skeleton, Typography } from "@mui/material";
import Dropdown from "../components/ui/Dropdown";
import { getWeatherIcon } from "../helpers/getWeatherIcon";

const SKELETON_HOURS = 8;

export default function HourlyForecastContainer({
  data,
  value,
  onClick,
  loading,
}) {
  const { apparent_temperature = [] } = data?.hourly || {};

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: "30px",
        height: "auto",
        marginLeft: "3px",
        padding: "20px 22px",
        backgroundColor: "neutral.700",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography>Hourly Forecast</Typography>
        {loading ? (
          <Skeleton
            variant="rounded"
            width={120}
            height={36}
            sx={{ bgcolor: "neutral.600", borderRadius: "8px" }}
          />
        ) : (
          <Dropdown value={value} onClick={onClick} />
        )}
      </Box>

      {loading
        ? Array.from({ length: SKELETON_HOURS }).map((_, i) => (
            <HourlyForecastCard key={`hourly-skeleton-${i}`} loading />
          ))
        : data?.hourly?.time?.map((t, i) => {
            if (new Date(t).getDay() !== value) return null;
            if (new Date(t).getHours() < 15 || new Date(t).getHours() > 22)
              return null;
            const hour = new Date(t).getHours();
            const weatherCode = data?.hourly?.weather_code[i];
            return (
              <HourlyForecastCard
                key={i}
                img={getWeatherIcon(weatherCode)}
                hour={hour > 12 ? hour - 12 : hour}
                tempurature={apparent_temperature[i].toFixed(0)}
              />
            );
          })}
    </Grid>
  );
}
