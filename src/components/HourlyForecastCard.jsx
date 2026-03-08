import { Box, Typography } from '@mui/material'
import React from 'react'

export default function HourlyForecastCard({ img, hour = "3", tempurature = "68" }) {
    return (
        <Box
            sx={(theme) => ({
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 20px",
                backgroundColor: "neutral.800",
                borderRadius: "10px"
            })}
        >
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
            }}>
                <img src={img} alt="Image" width="35px" height="35px" />
                < Typography >
                    {hour} PM
                </Typography>
            </Box>

            <Typography>
                {tempurature}
            </Typography>



        </ Box>
    )
}
