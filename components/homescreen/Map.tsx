
import { MapContainer, TileLayer } from 'react-leaflet'

import React, { memo } from "react";
import "leaflet/dist/leaflet.css";

import ZoomInOnLoad from './ZoomSmoothLoad';
import { LatLngExpression } from 'leaflet';
import { cityType } from '@/types/HomeScreenTypes';
import HoverMarker from './HoverMarker';

const Map = ({ selectedAltitudes, cities }: { selectedAltitudes: LatLngExpression, cities: cityType[] }) => {

    const latitude = cities[0].lat;
    const longitude = cities[0].lng;


    return (

        <MapContainer className='guide-map h-full w-full absolute top-0 left-0 z-0' center={[latitude, longitude]} zoom={3} minZoom={3} zoomControl={false} doubleClickZoom maxBounds={[[-85, -180], [85, 180]]} maxBoundsViscosity={1.0} >
            <ZoomInOnLoad location={selectedAltitudes} />
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://carto.com/">CARTO</a>'
            />
            {cities.map((city) => {
                const { lat, lng, ...rest } = city;

                return (
                    <HoverMarker position={[city.lat, city.lng]} city={rest} key={`${lat}_${lng}`} />
                )
            })}
        </MapContainer>

    );
};

export default memo(Map);
