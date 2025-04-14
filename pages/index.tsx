'use client'
import dynamic from 'next/dynamic'
import { useMemo, useState, useCallback, useEffect } from 'react';
import { cityType, InventoryData } from '@/types/HomeScreenTypes';
import { inventoryData } from '@/utils/MockData/inventoryData';
import { LatLngExpression } from 'leaflet';
import { useWidgetLayout } from '@/context/CityLayoutContext';
import WidgetContainer from '@/components/homescreen/WidgetContainer';

const DynamicMap = dynamic(() => import("@/components/homescreen/Map"), {
  ssr: false,
})

const Index = () => {

  const { selectedLayout } = useWidgetLayout();

  const cities: cityType[] = useMemo(() => {
    return inventoryData.map((item: InventoryData) => ({ name: item.city, lat: item.latitude, lng: item.longitude, forecastSales: item.forecastSales, forecastAccuracy: item.forecastAccuracy }))
  }, [])

  const [selectedAltitudes, setSelectedAltitudes] = useState<LatLngExpression>([40.7128, -74.006]);

  const handleLocationChange = useCallback((latitude: number, longitude: number) => {
    setSelectedAltitudes([latitude, longitude]);
  }, [])

  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    // Defer until browser is idle or after short timeout
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => setShowMap(true));
    } else {
      setTimeout(() => setShowMap(true), 200); // fallback
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
