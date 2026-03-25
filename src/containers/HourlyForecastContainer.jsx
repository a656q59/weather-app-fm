import React, { useEffect, useState } from 'react'
import HourlyForecastCard from '../components/HourlyForecastCard'
import { Box, Grid, Typography } from '@mui/material'
import iconDrizzle from "../assets/images/icon-drizzle.webp";
import Dropdown from '../components/ui/Dropdown';

export default function HourlyForecastContainer({ data }) {
    const { time = [], apparent_temperature = [] } = data?.hourly || {};
    // data.hourly.time.map(item =>)
    const [value, setValue] = useState(0);
    const handleChange = (value) => {
        setValue(value)
    }
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
                height: "auto",
                marginLeft: "3px",
                padding: "20px 22px",
                backgroundColor: "neutral.700"
            })}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <Typography>
                    Hourly Forecast
                </Typography>
                <Dropdown value={value} onClick={handleChange} />
            </Box>

            {/* {Array.from({ length }).map((_, index) => (
                <HourlyForecastCard
                    key={index}
                    values={keys.map((key) => data[key][index])}
                />
            ))} */}

            {/* {time.map((t, i) => {
                const hour = new Date(t).getHours();

                return (
                    <HourlyForecastCard
                        key={i}
                        hour={hour > 12 ? hour - 12 : hour}
                        tempurature={(temperature[i] * 100).toFixed(2)}
                    />
                );
            })} */}

            {data?.hourly?.time?.map((t, i) => {
                // console.log(, new Date(t).getDay(), value, "<-------------tempurature")
                if (new Date(t).getDay() !== value) return;
                if (new Date(t).getHours() < 15 || new Date(t).getHours() > 22) return;
                const hour = new Date(t).getHours();
                return (
                    <HourlyForecastCard
                        key={i}
                        img={iconDrizzle}
                        hour={hour > 12 ? hour - 12 : hour}
                        tempurature={(apparent_temperature[i]).toFixed(0)}
                    />
                );
            })}
        </Grid>
    )
}
