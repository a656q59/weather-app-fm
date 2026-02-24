import React from 'react'
import HourlyForecastCard from '../components/HourlyForecastCard'
import { Box, Grid, Typography } from '@mui/material'

export default function HourlyForecastContainer() {
    return (
        <Grid container
            sx={(theme) => ({ display: "flex", flexDirection: "column", gap: 2, border: "2px solid red", height: "100%", padding: "0px 10px", backgroundColor: "neutral.700" })}>
            <Typography>
                Hourly Forecast
            </Typography>
            <HourlyForecastCard />
            <HourlyForecastCard />
        </Grid>
    )
}
