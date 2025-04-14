import React, { useMemo } from 'react';
import { InventoryData } from '@/types/HomeScreenTypes';
import { inventoryData } from '@/utils/MockData/inventoryData';
import { useWidgetLayout } from '@/context/CityLayoutContext';
import Widget from "@/components/homescreen/Widget";
import { LatLngExpression } from 'leaflet';


interface WidgetContainerProps {
    selectedAltitudes: LatLngExpression;
    handleLocationChange: (latitude: number, longitude: number) => void;
}

const WidgetContainer = ({ handleLocationChange }: WidgetContainerProps) => {
    const { selectedLayout } = useWidgetLayout();

    const layoutwiseChildClasses: { [key: string]: string } = useMemo(() => {
        return {
            "top": "flex overflow-x-scroll",
            "right": "flex flex-col overflow-y-scroll",
            "left": "flex flex-col items-start overflow-y-scroll",
            "bottom": "flex overflow-x-scroll"
        }
    }, [])

    return (
        <div className="guide-cards p-6 flex flex-col z-30 overflow-hidden h-full">
            <h1 className="text-xl font-semibold text-white z-20">Forecast Insights</h1>
            <div
                className={`gap-4 ${layoutwiseChildClasses[selectedLayout]} py-4 z-20 scrollbar-hide`}
            >
                {
                    inventoryData.map((item: InventoryData) => (<Widget key={`${item.latitude}_${item.longitude}`} cityData={item} handleLocationChange={handleLocationChange} />))
                }

            </div>
        </div>
    );
};

export default WidgetContainer;