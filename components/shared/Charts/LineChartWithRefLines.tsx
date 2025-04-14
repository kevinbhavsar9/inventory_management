import { TableData } from '@/utils/MockData/detailsPageGraphData';
import { graphColorValues } from '@/utils/constants';
import React from 'react';
import { linesVisibility } from '@/components/detailscreen/ToggleLegends';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ReferenceLine,
    ResponsiveContainer,
    Text,
    ReferenceArea
} from 'recharts';
import { PRIMARY_ACTIVE_COLOR } from '@/utils/variableConstants';
import { useMediaQuery, useTheme } from '@mui/material';



const CustomizedLabelB = () => {
    const theme = useTheme();
    const isAbove600 = useMediaQuery(theme.breakpoints.up('sm')); // sm = 600px
    const isAbove300 = useMediaQuery(theme.breakpoints.up('xs')); // sm = 600px
    const dynamicX = isAbove600 ? -100 : isAbove300 ? -50 : -30;

    return (
        <Text
            x={dynamicX}
            y={0}
            dx={-60}
            dy={30}
            width={280}
            transform={`rotate(${-90})`}
            color='white'
            fontSize={12}
        >
            Cons. (K FT)
        </Text>
    );
};

const LineChartWithRefLines = ({ visibility, data }: { visibility: linesVisibility, data: TableData[] }) => {




    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 50,
                    left: 20,
                    bottom: 5,
                }}
            >
                <XAxis dataKey="quarter" stroke='#4d7ea8' tick={{ fill: '#5b6063', fontSize: '12px' }} tickLine={{ stroke: '#5b6063' }} />
                <YAxis stroke='#4d7ea8' tick={{ fill: '#5b6063', fontSize: '12px' }} tickLine={{ stroke: '#5b6063' }} label={<CustomizedLabelB />} />
                <Tooltip />
                <CartesianGrid vertical={true} horizontal={false} stroke="#ccc" strokeDasharray="3 3" />
                <ReferenceLine ifOverflow="visible"
                    segment={[
                        { x: "Q1 2025", y: 0 },
                        { x: "Q1 2025", y: 40100 },
                    ]}
                    stroke={PRIMARY_ACTIVE_COLOR} label="Max PV PAGE" />

                <ReferenceArea x1="Q4 2023" x2="Q1 2025" fill='transparent' label={{ value: 'Historical', position: 'top', fill: PRIMARY_ACTIVE_COLOR }} />

                <ReferenceArea x1="Q1 2025" x2="Q2 2026" fill='transparent' label={{ value: 'Forecast', position: 'top', fill: PRIMARY_ACTIVE_COLOR }} />

                <Line
                    key={`consumption`}
                    type="linear"
                    dataKey="Consumption"
                    stroke={`${graphColorValues.consumption}`}
                    hide={!visibility.consumption}
                />

                <Line
                    key={`aiForecast`}
                    type="linear"
                    dataKey="AI_Forecast"
                    stroke={`${graphColorValues.aiForecast}`}
                    strokeDasharray="5 5"
                    hide={!visibility.aiForecast}
                />

                <Line
                    key={`finalForecast`}
                    type="linear"
                    dataKey="Final_Forecast"
                    stroke={`${graphColorValues.finalForecast}`}
                    strokeDasharray="5 5"
                    hide={!visibility.finalForecast}
                />

                <Line
                    key={`prevForecast`}
                    type="linear"
                    dataKey="Previous_Forecast"
                    stroke={`${graphColorValues.prevForecast}`}
                    strokeDasharray="5 5"
                    hide={!visibility.prevForecast}
                />

            </LineChart>
        </ResponsiveContainer>
    );

}


export default LineChartWithRefLines