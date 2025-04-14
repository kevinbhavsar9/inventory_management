import React, { ReactNode } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { PopperPlacementType } from '@mui/material';

export default function BasicTooltip({ toolTipText, placement, children }: { toolTipText: string, placement: string, children: ReactNode }) {
    return (
        <Tooltip title={toolTipText} placement={placement as PopperPlacementType}>
            <span>{children}</span>
        </Tooltip>
    );
}
