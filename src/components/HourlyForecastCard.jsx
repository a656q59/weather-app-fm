import { Box, Typography } from '@mui/material'
import React from 'react'

export default function HourlyForecastCard() {
    return (
        <Box
            sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            {/* some image */}
            <Typography>
                3PM
            </Typography>
            <Typography>
                68
            </Typography>

        </Box>
    )
}
