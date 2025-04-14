import React, { useState } from 'react';
import LineChartWithRefLines from '../shared/Charts/LineChartWithRefLines';
import { ToggleLegends } from './ToggleLegends';
import { TableData } from '@/utils/MockData/detailsPageGraphData';

const Visualizations = ({ data }: { data: TableData[] }) => {

    const [visibility, setVisibility] = useState({
        consumption: true,
        aiForecast: true,
        finalForecast: true,
        prevForecast: true,
    });

    return (
        <div className='grid grid-cols-1 gap-2 p-2 bg-secondary grow-1'>
            <div className='min-h-10'><ToggleLegends visibility={visibility} setVisibility={setVisibility} /></div>
            <div className=''><LineChartWithRefLines visibility={visibility} data={data} /></div>
        </div>
    );
};

export default Visualizations;