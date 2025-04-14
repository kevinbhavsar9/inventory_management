import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DropdownProps, LayoutOptions } from '@/types/HomeScreenTypes';

export default function DropDown({ menuItems, selectedItem, onChange, label }: DropdownProps) {

    const handleChange = (event: SelectChangeEvent) => {

        onChange(event.target.value as LayoutOptions);
    };

    return (
        <Box sx={{ minWidth: 120 }} className="guide-dropdown">
            <FormControl fullWidth sx={{
                '& .MuiOutlinedInput-root': {
                    height: '40px',
                    color: 'white',
                    '& fieldset': {
                        borderColor: 'white',
                    },
                    '&:hover fieldset': {
                        borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'white',
                    },
                },
                '& .MuiSvgIcon-root': {
                    color: 'white',
                },
            }}>
                <InputLabel id="demo-simple-select-label" sx={{ color: 'white' }}>Widget Layout</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedItem}
                    label={label}
                    onChange={handleChange}
                    className='!text-white'
                >
                    {
                        menuItems.map((item) => (
                            <MenuItem value={item.key} key={item.key}>
                                {item.value}
                            </MenuItem>
                        ))
                    }

                </Select>
            </FormControl>
        </Box>
    );
}