import { Box, Grid, Paper, Typography } from '@mui/material'
import './App.css'
import NavBar from './components/NavBar'
import styled from '@emotion/styled';
import SearchBox from './components/SearchBox';
import Minicard from './components/Minicard';
import BannerTempCard from './components/BannerTempCard';
import HourlyForecastCard from './components/HourlyForecastCard';
import useFetchWeatherData from './services/useFetchWeatherData';
import HourlyForecastContainer from './containers/HourlyForecastContainer';

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  display: "flex",
  fontSize: "30px",
  letterSpacing: ".02rem",
  justifyContent: "center",
  padding: theme.spacing(1),
  color: "neutral.0",
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const Item2 = styled(Typography)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));





function App() {
  const k = useFetchWeatherData();
  return (
    <>
      <Grid container sx={{ backgroundColor: "neutral.900", height: "100vh", color: "white", padding: "0vh 25vh" }} gap={.1}>
        <NavBar />

        <Grid size={12} sx={{ padding: "0px", display: "flex", flexDirection: "column", height: "16vh" }}>
          <Item>How's the sky looking today? </Item>
          <Item> <SearchBox /> </Item>

        </Grid>

        <Grid size={12} sx={{ display: "flex", flexDirection: "row", height: "55vh", }} gap={13}>
          <Grid size={7} sx={{ display: "flex", flexDirection: "column", }} gap={3}>
            <BannerTempCard />
            <Box size={12} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} gap={3}>

              <Minicard title="Feels Like" value="64" />
              <Minicard title="Feels Like" value="64" />
              <Minicard title="Feels Like" value="64" />
              <Minicard title="Feels Like" value="64" />



            </Box>
          </Grid>
          <Grid size={5} sx={{}}>
            <HourlyForecastContainer />

          </Grid>

        </Grid>

      </Grid>
    </>
  )
}

export default App





// -----------------------------------------------------


// Units

// Switch to Imperial/Metric

// Temperature

// Celsius (°C)
// Fahrenheit (°F)

// Wind Speed

// km/h
// mph

// Precipitation

// Millimeters (mm)
// Inches (in)

// How's the sky looking today?

// Search for a city, e.g., New York
// Search

// Feels like
{/* <!-- Insert temperature here --> */ }

// Humidity
{/* <!-- Insert humidity here --> */ }

// Wind
{/* <!-- Insert wind here -->    */ }

// Precipitation
{/* <!-- Insert precipitation here --> */ }

// Daily forecast
{/* <!-- Insert daily forecast for the next 7 days here --> */ }

// Hourly forecast
{/* <!-- Insert hourly forecast for the selected day here --> */ }
