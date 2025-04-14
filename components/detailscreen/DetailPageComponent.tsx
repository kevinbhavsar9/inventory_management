import React, { useEffect, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import DetailScreen from './DetailScreen';
import SideBar from './SideBar';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { detailsPageData } from '@/utils/MockData/detailsPageGraphData';
import { useSelectedDataset } from '@/context/SelectedDatasetContext';
import { DRAWER_WIDTH } from '@/utils/variableConstants';



const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    width: 0,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: open ? 0 : `-${DRAWER_WIDTH}px`,
    variants: [
        {
            props: ({ open }) => open,
            style: {
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
    [theme.breakpoints.down('md')]: {
        padding: 0,
        marginLeft: 0
    },
}));


export default function DetailPageComponent() {
    const { handleSelectedDatasetIdChange } = useSelectedDataset();
    const [open, setOpen] = React.useState(true);


    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };


    const initialId = useMemo(() => detailsPageData[0].dataset_id, []);

    useEffect(() => {
        handleSelectedDatasetIdChange(initialId)
    }, [])



    return (
        <Box sx={{

        }} className='flex w-full'>
            <SideBar open={open} handleDrawerClose={handleDrawerClose} />

            <button onClick={handleDrawerOpen} className='bg-primary-active text-black h-[24px] w-[24px] absolute top-3 flex items-center justify-center hover:cursor-pointer'><KeyboardDoubleArrowRightIcon /></button>

            <Main open={open}>
                <DetailScreen />
            </Main>
        </Box>
    );
}