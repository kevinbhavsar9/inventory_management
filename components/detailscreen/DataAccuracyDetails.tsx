import React from 'react';

const DatasetInfo = () => {
    return (

        <div className='text-white flex items-center justify-center max-md:justify-start'>
            <div className='w-64 flex justify-around items-center bg-primary-light border border-primary-light rounded py-1 max-sm:grow max-sm:w-0 '>
                <div className='flex flex-col items-center justify-center h-full'>
                    <h2 className='text-gray-300 text-nowrap text-xs'>STABILITY</h2>
                    <p>80%</p>
                </div>
                <div className='flex flex-col items-center justify-center h-full'>
                    <h2 className='text-gray-300 text-nowrap text-xs'>ACCURACY</h2>
                    <p>80%</p>
                </div>
            </div>
        </div>

    );
};

export default DatasetInfo;