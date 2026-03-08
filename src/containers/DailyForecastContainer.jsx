import React, { useEffect } from 'react'
import HourlyForecastCard from '../components/HourlyForecastCard'
import { Box, Grid, Typography } from '@mui/material'
import iconDrizzle from "../assets/images/icon-drizzle.webp";
import DailyForecastCard from '../components/DailyForecastCard';

export default function DailyForecastContainer({ data }) {
    const { time = [], apparent_temperature = [] } = data?.hourly || {};



    return (
        <Grid container
            sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                gap: 2,
                borderRadius: "30px",
                height: "100%",
                marginLeft: "3px",
                padding: "20px 22px",
                backgroundColor: "transparent",
                width: "100%"
            })}>
            <Typography>
                Daily forecast
            </Typography>

            <DailyForecastCard img={iconDrizzle} day="Tue" minTemp="20" maxTemp="30" />




        </Grid>
    )
}
