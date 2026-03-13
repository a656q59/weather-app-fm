import React, { useEffect } from 'react'
import HourlyForecastCard from '../components/HourlyForecastCard'
import { Box, Grid, Typography } from '@mui/material'
import iconDrizzle from "../assets/images/icon-drizzle.webp";
import DailyForecastCard from '../components/DailyForecastCard';

export default function DailyForecastContainer({ data }) {
    console.log(data, "<--------------------data");
    const { time = [],
        temperature_2m_max = [],
        temperature_2m_min = [] } = data?.daily || {};



    return (
        <Grid container
            sx={(theme) => ({
                display: "flex",
                border: "2px solid yellow",
                flexDirection: "column",
                gap: 2,
                borderRadius: "30px",
                height: "100%",
                marginLeft: "3px",
                padding: "0px 0px",
                backgroundColor: "transparent",
                width: "100%"
            })}>
            <Typography>
                Daily forecast
            </Typography>
            <Grid container display="flex" direction="row" justifyContent="space-between" gap={3}>

                {data?.daily?.time?.map((t, i) => {


                    return (
                        <DailyForecastCard
                            key={i}
                            img={iconDrizzle}
                            day={new Date(t).toLocaleDateString("en-US", { weekday: "long" }).substring(0, 3)}
                            minTemp={temperature_2m_min[i].toFixed(0)}
                            maxTemp={temperature_2m_max[i].toFixed(0)}
                        />
                    );
                })}

            </Grid>




        </Grid >
    )
}
