import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import { useSelectedDataset } from '@/context/SelectedDatasetContext';

const StackCard = ({ cardName, cardID }: { cardName: string, cardID: string, }) => {
    const { selectedDatasetId } = useSelectedDataset();
    return (
        <div className={`flex flex-row justify-between items-center bg-primary text-gray-300 p-2 rounded-lg shadow-2xs shadow-white/30 w-full hover:bg-primary-light ${selectedDatasetId === cardID ? 'bg-primary-light' : ''}`}>
            <div className='flex flex-col gap-2'>
                <h1>{cardName}</h1>
                <p>{cardID}</p>
            </div>
            <div>
                <MailIcon />
            </div>
        </div>
    );
};

export default StackCard;