import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DropDown from './DropDown';
import { NavbarDropDownMenuItem } from '@/utils/constants';
import { useWidgetLayout } from '@/context/CityLayoutContext';
import { useRouter } from 'next/router';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import Tooltip from './Tooltip';
import { SECONDARY_COLOR } from '@/utils/variableConstants';


export default function Navbar({ handleShowTour }: { handleShowTour: () => void }) {
    const { selectedLayout, handleWidgetLayoutChange } = useWidgetLayout();

    const router = useRouter();
    const pathname = router.pathname;

    return (
        <AppBar position="static" className='bg-secondary' sx={{
            minHeight: { xs: '64px', sm: '64px' },
            backgroundColor: SECONDARY_COLOR
        }}>
            <Toolbar className='bg-secondary shadow-2xl text-white'>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => router.push('/')} className='hover:cursor-pointer'>
                    <Tooltip toolTipText='Go to Home' placement='bottom'>
                        Inventro
                    </Tooltip>
                </Typography>

                {
                    pathname === "/" && <>
                        <div className='px-2'>
                            <DropDown menuItems={NavbarDropDownMenuItem} selectedItem={selectedLayout} onChange={handleWidgetLayoutChange} label={"widgetLayoutChange"} />
                        </div>
                        <div>
                            <Tooltip toolTipText='Tour' placement='bottom'>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <SmartToyIcon onClick={handleShowTour} className='text-white' />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </>
                }


            </Toolbar>
        </AppBar>
    );
}
