import { Box } from '@mui/material'
import React from 'react'

export default function Minicard({ title, value }) {
    return (
        <Box sx={(theme) => ({
            backgroundColor: theme.palette.neutral.main,
            display: "flex",
            borderRadius: "13px",
            flexDirection: "column",
            padding: "15px 20px",
            maxWidth: "190px",
            width: "190px"
        })}>
            <Box sx={{ fontSize: "10px", marginBottom: "7px" }}>{title}</Box>
            <Box>{value}</Box>

        </Box>
    )
}
