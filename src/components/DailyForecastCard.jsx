import { Box, Typography } from '@mui/material'
import React from 'react'

export default function DailyForecastCard({ loading, img, day = "Tue", minTemp = "20", maxTemp = "30" }) {
    if (loading) return <Box
        sx={{
            color: "white",
            border: "2px solid red"
        }}>loading...</Box>
    return (
        <Box
            sx={(theme) => ({
                display: "flex",

                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 25px",
                backgroundColor: "neutral.800",
                borderRadius: "10px",
                height: "100%",
                border: "2px solid red",
                width: "100%"


            })}
        >

            <Typography sx={{
                marginBottom: "20px"
            }}>
                {day}
            </Typography>

            <img src={img} width="40px" height="40px" alt="image" />

            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                width: "100%",
                marginTop: "20px"
            }}>
                <Typography>
                    {minTemp}
                </Typography>
                <Typography>
                    {maxTemp}
                </Typography>
            </Box>


        </ Box>
    )
}
