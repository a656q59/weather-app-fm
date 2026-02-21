import { Box, Grid, Paper, Typography } from '@mui/material'
import './App.css'
import NavBar from './components/NavBar'
import styled from '@emotion/styled';
import SearchBox from './components/SearchBox';
import Minicard from './components/Minicard';
import BannerTempCard from './components/BannerTempCard';
import HourlyForecastCard from './components/HourlyForecastCard';

const Item = styled(Typography)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
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

  return (
    <>
      <Grid container sx={{ backgroundColor: "neutral.900", height: "100vh", color: "white" }} >
        <NavBar />
        <Grid size={12} sx={{ border: "2px solid white" }}>
          <Item>BANNER HEADING AND SEARCH BOX COMES HERE</Item>
          <SearchBox />
        </Grid>
        <Grid size={12} sx={{ border: "2px solid gold", display: "flex", flexDirection: "row" }}>
          <Grid size={7} sx={{ display: "flex", flexDirection: "column", border: "2px solid red" }} gap={3}>
            <BannerTempCard />
            <Grid size={12} sx={{ display: "flex", flexDirection: "row", border: "2px solid red" }} gap={3}>

              <Grid size={4}><Minicard title="Feels Like" value="64" /></Grid>
              <Grid size={4}><Minicard title="Feels Like" value="64" /></Grid>
              <Grid size={4}><Minicard title="Feels Like" value="64" /></Grid>
              <Grid size={4}><Minicard title="Feels Like" value="64" /></Grid>



            </Grid>
          </Grid>
          <Grid size={5} sx={{ border: "2px solid red", }}>
            <HourlyForecastCard />
            <HourlyForecastCard />
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
