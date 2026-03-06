import React, { useEffect } from 'react'
import HourlyForecastCard from '../components/HourlyForecastCard'
import { Box, Grid, Typography } from '@mui/material'

export default function HourlyForecastContainer({ data }) {

    // useEffect(() => {
    //     const keys = Object.keys(data);
    //     const length = data[keys[0]].length;
    // }, [data])

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

            {/* {Array.from({ length }).map((_, index) => (
                <HourlyForecastCard
                    key={index}
                    values={keys.map((key) => data[key][index])}
                />
            ))} */}
            {data && Object.values(data.hourly)[0].map((_, i) => (
                <HourlyForecastCard hour={Object.values(data.hourly)[0][i].getHours()} tempurature={(parseFloat(Object.values(data.hourly)[1][i]) * 100).toFixed(2)} />
            )

            )}

            {
                data?.hourly?.time?.map((item) => (
                    <HourlyForecastCard hour={item.toDateString()} />
                ))
            }
        </Grid>
    )
}
