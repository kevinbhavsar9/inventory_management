import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import TinyLineChart from "../shared/Charts/TinyLineChart";

interface ForecastProps {
    label: string;
    value: string;
    graphData: {
        [key: string]: string | number;
    }[];
    graphPrimaryKey: string;
    graphSecondaryKey: string;
}

const Forecast = (ForecastData: ForecastProps) => {
    const { label, value, graphData, graphPrimaryKey, graphSecondaryKey } = ForecastData
    return (
        <div className="flex items-center justify-between mb-4">
            <div>
                <p className="text-sm text-gray-300">{label}</p>
                <p className="text-2xl font-semibold">{value}</p>
            </div>
            <div className="flex items-center gap-1">
                <TinyLineChart data={graphData} primaryKey={graphPrimaryKey} secondaryKey={graphSecondaryKey} label={label} />
                {
                    1 ? <ArrowUpwardIcon className="text-green-400" /> : <ArrowDownwardIcon className="text-red-400" />
                }

            </div>
        </div>
    );
};

export default Forecast;