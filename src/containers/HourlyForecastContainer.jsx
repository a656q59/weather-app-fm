import React from 'react'
import HourlyForecastCard from '../components/HourlyForecastCard'
import { Box, Grid, Typography } from '@mui/material'

export default function HourlyForecastContainer() {
    return (
        <Grid container
            sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                gap: 2,
                borderRadius: "20px",
                height: "100%",
                padding: "0px 20px",
                backgroundColor: "neutral.700"
            })}>
            <Typography>
                Hourly Forecast
            </Typography>
            <HourlyForecastCard />
            <HourlyForecastCard />
        </Grid>
    )
}
