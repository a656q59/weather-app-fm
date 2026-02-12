import { Box, Grid, Paper, Typography } from '@mui/material'
import './App.css'
import NavBar from './components/NavBar'
import styled from '@emotion/styled';
import SearchBox from './components/SearchBox';

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
      <Grid container sx={{ backgroundColor: "neutral.900", height: "100vh", color: "white" }}>
        <NavBar />
        <Grid size={12}>
          <Item>BANNER HEADING AND SEARCH BOX COMES HERE</Item>
          <Item2><SearchBox /></Item2>
        </Grid>
        <Grid size={8}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
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
