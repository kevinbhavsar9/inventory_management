import React from 'react';
import { LineChart, Line, Tooltip } from 'recharts';


// Graph Data Structure - [
// const data = [
//     { month: "Jan", historic: 9100, forecast: 9300 },
//     { month: "Feb", historic: 9400, forecast: 9600 },
//     { month: "Mar", historic: 9700, forecast: 9900 },
//     { month: "Apr", historic: 10000, forecast: 10100 },
// ];


interface TinyLineChartType {
    data: {
        [key: string]: string | number;
    }[];
    primaryKey: string;
    secondaryKey: string;
}


const TinyLineChart = ({ data, primaryKey, secondaryKey }: TinyLineChartType) => {
    return (
        <LineChart width={70} height={50} data={data}>
            <Line type="monotone" dataKey={primaryKey} stroke="#346b77" strokeWidth={2} />
            <Line type="monotone" dataKey={secondaryKey} strokeDasharray="red" strokeWidth={1} />
            <Tooltip position={{ y: 0 }} wrapperStyle={{
                zIndex: 99,
                position: 'absolute',
                top: '30px',
                transform: 'translateX(-50%)',
                pointerEvents: 'none',
            }} />

        </LineChart>

    );
};


export default TinyLineChart;


