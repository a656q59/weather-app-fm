import React, { useEffect } from 'react'
import HourlyForecastCard from '../components/HourlyForecastCard'
import { Box, Grid, Typography } from '@mui/material'
import iconDrizzle from "../assets/images/icon-drizzle.webp";
import DailyForecastCard from '../components/DailyForecastCard';

export default function DailyForecastContainer({ data, loading }) {
    const { time = [],
        temperature_2m_max = [],
        temperature_2m_min = [] } = data?.daily || {};

    console.log();

    return (
        <Grid container
            sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                gap: 0,
                borderRadius: "30px",
                height: "100%",
                marginLeft: "3px",
                // padding: "0px 22px",
                backgroundColor: "transparent",
                width: "100%",
                justifyContent: "space-between"
                // height: "35%"
            })}>
            <Grid item>
                <Typography>
                    Daily forecast
                </Typography>
            </Grid>
            <Grid item gap={4} sx={{ display: "flex", flexDirection: "row", height: "auto", }}>

                {data?.daily?.time?.map((t, i) => {
                    return (
                        <Grid sx={{ width: "100%" }} >
                            <DailyForecastCard
                                key={i}
                                loading={loading}
                                img={iconDrizzle}
                                day={new Date(t).toLocaleDateString("en-US", { weekday: "long" }).substring(0, 3)}
                                minTemp={temperature_2m_min[i].toFixed(0)}
                                maxTemp={temperature_2m_max[i].toFixed(0)}
                            />
                        </Grid>
                    );
                })}

            </Grid>




        </Grid >
    )
}
