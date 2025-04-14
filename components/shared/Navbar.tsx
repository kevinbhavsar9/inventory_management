import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import DropDown from './DropDown';
import { NavbarDropDownMenuItem } from '@/utils/constants';
import { useWidgetLayout } from '@/context/CityLayoutContext';
import { useRouter } from 'next/router';


export default function MenuAppBar() {
    const { selectedLayout, handleWidgetLayoutChange } = useWidgetLayout();

    const router = useRouter();
    const pathname = router.pathname;

    const handleLogoClick = () => {
        // Handle logo click event here
        router.push('/')
    }

    return (
        <AppBar position="static" >
            <Toolbar className='bg-secondary shadow-2xl text-white'>
                {/* <IconButton
                    size="large"
                    edge="start"
                    aria-label="menu"
                    sx={{
                        mr: 2, minHeight: {
                            xs: '64px', //navbar fix for the screen below 600px
                            sm: '64px',
                        },
                    }}
                >
                    <MenuIcon className='text-white' />
                </IconButton> */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={handleLogoClick} className='hover:cursor-pointer'>
                    Inventro
                </Typography>

                {
                    pathname === "/" && <div className='px-2'>
                        <DropDown menuItems={NavbarDropDownMenuItem} selectedItem={selectedLayout} onChange={handleWidgetLayoutChange} label={"widgetLayoutChange"} />
                    </div>
                }

                <div>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>

                </div>

            </Toolbar>
        </AppBar>
    );
}
