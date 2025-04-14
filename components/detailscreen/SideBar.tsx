import React from 'react';
import Drawer from '@mui/material/Drawer';
import { styled, useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import StackCard from '../detailscreen/StackCard';
import Divider from '@mui/material/Divider';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { detailsPageData } from '@/utils/MockData/detailsPageGraphData';
import { useSelectedDataset } from '@/context/SelectedDatasetContext';
import { useMediaQuery } from '@mui/material';
import { DRAWER_WIDTH } from '@/utils/variableConstants';
import { PRIMARY_COLOR } from '@/utils/variableConstants';



const SideBar = ({ open, handleDrawerClose }: { open: boolean, handleDrawerClose: () => void }) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));

    const { handleSelectedDatasetIdChange } = useSelectedDataset();



    return (
        <Drawer
            sx={{
                width: DRAWER_WIDTH,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: DRAWER_WIDTH,
                    boxSizing: 'border-box',
                    position: 'absolute',
                    top: '0',
                    backgroundColor: PRIMARY_COLOR,
                    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0.5, 0.5)',
                },

            }}
            ModalProps={{
                keepMounted: true, // Better mobile performance
            }}

            variant={isMobile ? 'temporary' : 'persistent'}
            anchor="left"
            open={open}
        >
            <DrawerHeader className='flex justify-between items-center'>
                <h2 className='text-primary-active !ml-2 flex-1'>Datasets</h2>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <KeyboardDoubleArrowLeftIcon className='bg-primary-active text-black' /> : <></>}
                </IconButton>
            </DrawerHeader>

            <Divider />

            <List className='overflow-y-auto h-full scrollbar-hide !mb-6'>
                {detailsPageData.map((data) => (
                    <ListItem key={data.dataset_id} disablePadding onClick={() => handleSelectedDatasetIdChange(data.dataset_id)}>
                        <ListItemButton>
                            <StackCard cardName={data.dataset_name} cardID={data.dataset_id} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </Drawer>
    );
};

export default SideBar;