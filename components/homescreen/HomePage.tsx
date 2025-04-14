'use client'
import { useWidgetLayout } from "@/context/CityLayoutContext";
import { cityType, InventoryData } from "@/types/HomeScreenTypes";
import { inventoryData } from "@/utils/MockData/inventoryData";
import { LatLngExpression } from "leaflet";
import dynamic from "next/dynamic";
import { useMemo, useState, useCallback, useEffect } from "react";
import WidgetContainer from "./WidgetContainer";

//Map is imported dynamically as it is heavy component
const DynamicMap = dynamic(() => import("@/components/homescreen/Map"), {
    ssr: false,
})

const HomePage = () => {

    //context gives user the selected layout for widgets
    const { selectedLayout } = useWidgetLayout();
    
    //state for map navigation - lat and lon - changes when user click on the navigation button
    const [selectedAltitudes, setSelectedAltitudes] = useState<LatLngExpression>([40.7128, -74.006]);
    const [showMap, setShowMap] = useState(false);

    const cities: cityType[] = useMemo(() => {
        return inventoryData.map((item: InventoryData) => ({ name: item.city, lat: item.latitude, lng: item.longitude, forecastSales: item.forecastSales, forecastAccuracy: item.forecastAccuracy }))
    }, [])

    

    const handleLocationChange = useCallback((latitude: number, longitude: number) => {
        setSelectedAltitudes([latitude, longitude]);
    }, [])


    // Defer until browser is idle or after short timeout for better performace and increased First contentful paint

    useEffect(() => {
        if ('requestIdleCallback' in window) {
            requestIdleCallback(() => setShowMap(true));
        } else {
            setTimeout(() => setShowMap(true), 200);
        }
    }, []);

    return (
        <>
            {selectedLayout !== "hide" && <WidgetContainer selectedAltitudes={selectedAltitudes} handleLocationChange={handleLocationChange} />}
            {showMap && <DynamicMap selectedAltitudes={selectedAltitudes} cities={cities} />}
        </>
    )
}

export default HomePage