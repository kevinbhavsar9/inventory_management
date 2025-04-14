import React from 'react';
import { LineChart, Line, Tooltip } from 'recharts';

interface TooltipProps {
    active?: boolean;
    payload?: { payload: { historic: string | number; forecast: string | number } }[];
    label?: string;
}

const CustomTooltip = ({
    active = false,
    payload = [],
}: TooltipProps) => {
    return active && payload && payload.length ? (
        <div className="flex flex-col w-[150px] border border-[#F6F6F6] shadow-tooltip">
            <div className="flex flex-col p-3 gap-3 bg-white">
                <div className="flex gap-2 justify-start items-center">
                    <div className="text-[#4D4D4D] text-xs">

                        Historic :{" "}

                        <span className="font-semibold">{payload[0].payload.historic}</span>
                    </div>
                </div>
                <div className="flex gap-2 justify-start items-center">
                    <div className="text-[#4D4D4D] text-xs">
                        Forecast :{" "}
                        <span className="font-semibold">{payload[0].payload.forecast}</span>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};


interface TinyLineChartType {
    data: {
        [key: string]: string | number;
    }[];
    primaryKey: string;
    secondaryKey: string;
    label: string;
}


const TinyLineChart = ({ data, primaryKey, secondaryKey, label }: TinyLineChartType) => {
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
            }} content={<CustomTooltip label={label} />} />

        </LineChart>

    );
};


export default TinyLineChart;


