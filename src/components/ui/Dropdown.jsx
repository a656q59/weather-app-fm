import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { InputLabel, MenuItem } from '@mui/material';

export default function Dropdown() {
    const handleChange = (value) => {
        setAge(value)
    }
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }


    const [age, setAge] = useState('');
    const [open, setOpen] = useState(false);

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                    sx={{
                        border: "2px solid red",
                        "& .MuiInputBase-input": {
                            padding: "5px 10px ",
                            color: "white"
                        }
                    }}
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={age}

                    onChange={(e) => handleChange(e.target.value)}
                >
                    <MenuItem value={0}>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}
