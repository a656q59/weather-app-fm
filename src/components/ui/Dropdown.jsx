import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MenuItem } from '@mui/material';

export default function Dropdown({ value = -1, onClick }) {

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }



    const [open, setOpen] = useState(false);

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                backgroundColor: "neutral.700",
                                color: "white"
                            },
                        },
                    }}
                    sx={{
                        "& .MuiInputBase-input": {
                            padding: "5px 10px ",
                            color: "white"
                        },
                        "& .MuiPaper-root": {
                            backgroundColor: "blue"
                        }
                    }}
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={value}

                    onChange={(e) => onClick(e.target.value)}
                >
                    <MenuItem value={-1}></MenuItem>
                    <MenuItem value={0}>Sunday</MenuItem>
                    <MenuItem value={1}>Monday</MenuItem>
                    <MenuItem value={2}>Tuesday</MenuItem>
                    <MenuItem value={3}>Wednesday</MenuItem>
                    <MenuItem value={4}>Thursday</MenuItem>
                    <MenuItem value={5}>Friday</MenuItem>
                    <MenuItem value={6}>Saturday</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}
