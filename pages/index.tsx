'use client'
import dynamic from 'next/dynamic'
import { useMemo, useState, useCallback, useEffect } from 'react';
import { cityType, InventoryData } from '@/types/HomeScreenTypes';
import { inventoryData } from '@/utils/MockData/inventoryData';
import { LatLngExpression } from 'leaflet';
import { useWidgetLayout } from '@/context/CityLayoutContext';
import WidgetContainer from '@/components/homescreen/WidgetContainer';

//Map is imported dynamically as it is heavy component
const DynamicMap = dynamic(() => import("@/components/homescreen/Map"), {
  ssr: false,
})

const Index = () => {

  //context gives user the selected layout for widgets
  const { selectedLayout } = useWidgetLayout();

  const cities: cityType[] = useMemo(() => {
    return inventoryData.map((item: InventoryData) => ({ name: item.city, lat: item.latitude, lng: item.longitude, forecastSales: item.forecastSales, forecastAccuracy: item.forecastAccuracy }))
  }, [])

  //state for map navigation - lat and lon - changes when user click on the navigation button
  const [selectedAltitudes, setSelectedAltitudes] = useState<LatLngExpression>([40.7128, -74.006]);

  //setter function for location change
  const handleLocationChange = useCallback((latitude: number, longitude: number) => {
    setSelectedAltitudes([latitude, longitude]);
  }, [])


  // Defer until browser is idle or after short timeout for better performace and increased First contentful paint
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => setShowMap(true));
    } else {
      setTimeout(() => setShowMap(true), 200);
    }
  }, []);


  return <>

    {
      selectedLayout !== "hide" && <WidgetContainer selectedAltitudes={selectedAltitudes} handleLocationChange={handleLocationChange} />
    }
    {showMap && <DynamicMap selectedAltitudes={selectedAltitudes} cities={cities} />}
  </>
};

export default Index;
