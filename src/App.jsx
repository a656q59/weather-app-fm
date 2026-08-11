import { Box, Grid } from "@mui/material";
import "./App.css";
import NavBar from "./components/NavBar";
import styled from "@emotion/styled";
import SearchBox from "./components/SearchBox";
import Minicard from "./components/Minicard";
import BannerTempCard from "./components/BannerTempCard";
import useFetchWeatherData from "./services/useFetchWeatherData";
import HourlyForecastContainer from "./containers/HourlyForecastContainer";
import DailyForecastContainer from "./containers/DailyForecastContainer";

import iconLoading from "../../assets/images/icon-loading.svg";
import { useEffect, useState } from "react";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  display: "flex",
  letterSpacing: ".02rem",
  justifyContent: "center",
  padding: theme.spacing(1),
  color: "neutral.0",
  width: "100%",
  [theme.breakpoints.up("xs")]: {
    fontSize: "22px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "30px",
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

function App() {
  const { weatherInfo, loading, error } = useFetchWeatherData();
  const [value, setValue] = useState(0);
  const handleChange = (value) => {
    setValue(value);
  };

  useEffect(() => {
    setValue(weatherInfo?.hourly?.time[0].getDay());
  }, [weatherInfo]);

  if (loading)
    return (
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          backgroundColor: "neutral.900",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={iconLoading} alt="Loading weather" />
      </Box>
    );

  return (
    <Box
      sx={{
        backgroundColor: "neutral.900",
        minHeight: "100vh",
        width: "100%",
        color: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        sx={{
          width: "100%",
          maxWidth: "1740px",
          px: { xs: 2.5, sm: 4, md: 6, lg: "15%" },
          py: { xs: 2, md: 0 },
          gap: { xs: 2, md: 0.1 },
          boxSizing: "border-box",
        }}
      >
        <NavBar />

        <Grid
          size={12}
          sx={{
            padding: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Item>How's the sky looking today?</Item>
          <Item sx={{ maxWidth: "100%" }}>
            <Box sx={{ width: "100%", maxWidth: 600 }}>
              <SearchBox />
            </Box>
          </Item>
        </Grid>

        <Grid
          container
          size={12}
          spacing={{ xs: 2, md: 1 }}
          sx={{
            alignItems: {
              xs: "stretch",
              md: "flex-start",
            },
          }}
        >
          <Grid
            size={{ xs: 12, md: 8 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              py: { xs: 1, md: "0px" },
              px: { xs: 0, md: "10px" },
            }}
          >
            <BannerTempCard />
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2, minmax(0, 1fr))",
                  sm: "repeat(4, minmax(0, 1fr))",
                },
                width: "100%",
                gap: { xs: 1.5, sm: 3 },
              }}
            >
              <Minicard
                title="Feels Like"
                value={
                  weatherInfo?.current?.apparent_temperature.toFixed(0) * 10
                }
                loading={loading}
              />
              <Minicard
                title="Humidity"
                value={weatherInfo?.current?.relative_humidity_2m}
                loading={loading}
              />
              <Minicard
                title="Wind"
                value={weatherInfo?.current?.wind_speed_10m.toFixed(0)}
                loading={loading}
              />
              <Minicard
                title="Precipitation"
                value={weatherInfo?.current?.precipitation}
                loading={loading}
              />
            </Box>

            <DailyForecastContainer data={weatherInfo} loading={loading} />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <HourlyForecastContainer
              data={weatherInfo}
              value={value}
              onClick={handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
