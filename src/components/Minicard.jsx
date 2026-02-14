import React from 'react'

export default function Minicard({ title, value }) {
    return (
        <div sx={{
            border: "2px solid red",
            bgColor: "red",
            display: "flex",
            flexDirection: "column"
        }}>
            <div>{title}</div>
            <div>{value}</div>

        </div>
    )
}
