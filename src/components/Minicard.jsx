import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Minicard({ title, value, loading }) {
    if (loading) return

    (
        <Box sx={(theme) => ({
            backgroundColor: theme.palette.neutral.main,
            display: "flex",
            borderRadius: "13px",
            flexDirection: "column",
            padding: "14px 20px",
            // maxWidth: "190px",
            width: "100%",

        })}>

            <Typography sx={{ fontSize: "10px", marginBottom: "7px" }}>{title}</Typography>


            <Typography sx={{
                color: "white"
            }}>
                --
            </Typography>
        </Box>
    )

    return (
        <Box sx={(theme) => ({
            backgroundColor: theme.palette.neutral.main,
            display: "flex",
            borderRadius: "13px",
            flexDirection: "column",
            padding: "14px 20px",
            // maxWidth: "190px",
            width: "100%"
        })}>
            <Box sx={{ fontSize: "10px", marginBottom: "7px" }}>{title}</Box>
            <Box>{value}</Box>

        </Box>
    )
}
