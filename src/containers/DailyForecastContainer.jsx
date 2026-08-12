import { Box, Grid, Typography } from "@mui/material";
import iconDrizzle from "../assets/images/weatherIcons/icon-drizzle.webp";
import DailyForecastCard from "../components/DailyForecastCard";

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
        {data?.daily?.time?.map((t, i) => (
          <Box key={i} sx={{ minWidth: 0, width: "100%" }}>
            <DailyForecastCard
              loading={loading}
              img={iconDrizzle}
              day={new Date(t)
                .toLocaleDateString("en-US", { weekday: "long" })
                .substring(0, 3)}
              minTemp={temperature_2m_min[i].toFixed(0)}
              maxTemp={temperature_2m_max[i].toFixed(0)}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
