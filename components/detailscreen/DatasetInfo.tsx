import React, { memo } from 'react';
import FolderCopyRoundedIcon from '@mui/icons-material/FolderCopyRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

interface DatasetInfoType {
    dataset_name: string,
    dataset_id: string,
    city_name?: string
}

const DatasetInfo = ({ dataset_name, dataset_id, city_name }: DatasetInfoType) => {
    return (

        <div className='bg-primary text-white h-full flex items-center justify-between border-r-[0.1px] border-gray-300 pr-4 max-md:flex-col max-sm:gap-2 max-md:items-start max-sm:border-none max-sm:pr-0 !max-sm:w-0 !max-sm:grow' >


            {/* Dataset Details */}
            <div>
                <div className='flex items-center justify-center gap-2 '>
                    <FolderCopyRoundedIcon className='text-yellow-300 !text-[20px]' />

                    <h1 className='font-semibold'>{dataset_name}</h1>
                </div>
                <div className='flex items-center gap-2'>
                    <FolderCopyRoundedIcon className='invisible !text-[20px]' />
                    <p className='text-primary-active text-xs font-semibold'>Dataset ID: {dataset_id}</p>
                </div>
            </div>


            {/* City Details */}
            {
                city_name && <div>
                    <div className='flex items-center gap-2 '>
                        <LocationOnRoundedIcon className='text-yellow-300' />
                        <h1 className='font-semibold'>{city_name}</h1>
                    </div>
                    <p className='invisible'></p>
                </div>
            }


        </div >

    );
};

export default memo(DatasetInfo);