import { Box } from '@mui/material'
import React from 'react'

export default function Minicard({ title, value }) {
    return (
        <Box sx={{
            border: "2px solid red",
            bgColor: "green",
            display: "flex",
            flexDirection: "column"
        }}>
            <Box>{title}</Box>
            <Box>{value}</Box>

        </Box>
    )
}
