import React from 'react'
import HourlyForecastCard from '../components/HourlyForecastCard'
import { Box, Grid, Typography } from '@mui/material'

export default function HourlyForecastContainer({ data }) {
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
                backgroundColor: "neutral.700"
            })}>
            <Typography>
                Hourly Forecast
            </Typography>
            {
                data?.hourly.map((item) => (
                    <HourlyForecastCard hour={item.time.toString()} tempurature={item.apparent_tempurature} />
                ))
            }
        </Grid>
    )
}
