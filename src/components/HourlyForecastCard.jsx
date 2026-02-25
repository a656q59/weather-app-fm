import { Box, Typography } from '@mui/material'
import React from 'react'

export default function HourlyForecastCard({ img, hour = "3 PM", tempurature = "68" }) {
    return (
        <Box
            sx={(theme) => ({
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 20px",
                backgroundColor: "neutral.800",
                borderRadius: "10px"
            })}
        >
            {/* some image */}
            < Typography >
                {hour}
            </Typography>
            <Typography>
                {tempurature}
            </Typography>

        </ Box>
    )
}
