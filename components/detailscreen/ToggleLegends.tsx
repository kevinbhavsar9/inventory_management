import React, { SetStateAction } from "react";
import { SwitchComponent } from "../shared/Switch";
import { graphColorValues } from "@/utils/constants";


export interface linesVisibility {
    consumption: boolean;
    aiForecast: boolean;
    finalForecast: boolean;
    prevForecast: boolean;
}

const labelMap: Record<keyof typeof graphColorValues, string> = {
    consumption: "Consumption",
    aiForecast: "AI Forecast",
    finalForecast: "Final Forecast",
    prevForecast: "Previous Forecast",
};

type LineKey = keyof typeof graphColorValues;


const GraphLabel = ({ keyName }: { keyName: LineKey }) => {
    const color = graphColorValues[keyName];
    const label = labelMap[keyName];

    return <p style={{ color }}>{label}</p>;
};

export const ToggleLegends = ({ visibility, setVisibility }: { visibility: linesVisibility, setVisibility: React.Dispatch<SetStateAction<linesVisibility>> }) => {


    return (
        <div className="flex items-center justify-around gap-2 h-full flex-wrap">
            {Object.entries(visibility).map(([key, value]) => (
                <label key={key} className={`flex items-center gap-1 font-semibold text-sm`}>
                    <SwitchComponent

                        isOn={value} onToggle={() => setVisibility((prev: linesVisibility) => ({ ...prev, [key]: !prev[key as keyof linesVisibility] }))} />

                    <GraphLabel keyName={key as LineKey} />

                </label>
            ))}
        </div>
    );
};
