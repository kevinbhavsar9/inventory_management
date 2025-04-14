'use client';

import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

const ZoomInOnLoad = ({ location }: { location: LatLngExpression }) => {
    const map = useMap();

    useEffect(() => {

        const timer = setTimeout(() => {
            map.setView(location, 4, {
                animate: true,
                duration: 9,
                easeLinearity: 0.40,
            });
        }, 1000);

        return () => clearTimeout(timer);
    }, [map, location]);

    return null;
};

export default ZoomInOnLoad;
