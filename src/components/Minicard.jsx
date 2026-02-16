import { Box } from '@mui/material'
import React from 'react'

export default function Minicard({ title, value }) {
    return (
        <Box sx={{
            border: "2px solid red",
            bgColor: "green",
            display: "flex",
            borderRadius: "13px",
            flexDirection: "column",
            padding: "12px 10px"
        }}>
            <Box sx={{ fontSize: "10px" }}>{title}</Box>
            <Box>{value}</Box>

        </Box>
    )
}
