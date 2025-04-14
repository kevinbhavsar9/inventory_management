import React from 'react';
import Switch from '@mui/material/Switch';

interface SwitchProps {
    isOn: boolean;
    onToggle: () => void;
}

export const SwitchComponent: React.FC<SwitchProps> = ({ isOn, onToggle }) => {
    return (
        <Switch
            sx={{
                '& .MuiSwitch-thumb': {
                    backgroundColor: '#fff',
                    border: '1px solid gray',
                },
                '& .MuiSwitch-track': {
                    backgroundColor: 'black',
                    border: '1px solid gray',
                    opacity: 1,
                }
            }}
            size="small"
            checked={isOn}
            onChange={onToggle} />
    );
};

export default Switch;