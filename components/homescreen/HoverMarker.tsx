import { Marker, Popup } from 'react-leaflet';
import { useRef } from 'react';
import L from 'leaflet';
import { cityType } from '@/types/HomeScreenTypes';
import { LatLngExpression } from 'leaflet';

export type CityWithoutLatLng = Omit<cityType, 'lat' | 'lng'>;

const myIcon = new L.Icon({
    iconUrl: "/assets/marker.svg",
    iconRetinaUrl: "/assets/marker.svg",
    popupAnchor: [-0, -0],
    iconSize: [50, 45],
    className: "text-red-500",
});

const HoverMarker = ({ position, city }: { position: LatLngExpression, city: CityWithoutLatLng }) => {
    const markerRef = useRef<L.Marker>(null);

    const handleMouseOver = () => {
        if (markerRef.current) {
            markerRef.current.openPopup();
        }
    };

    const handleMouseOut = () => {
        if (markerRef.current) {
            markerRef.current.closePopup();
        }
    };

    return (
        <Marker
            key={city.name}
            position={position}
            ref={markerRef}
            icon={myIcon}
            zIndexOffset={100}
            eventHandlers={{
                mouseover: handleMouseOver,
                mouseout: handleMouseOut,
            }}
        >
            <Popup>
                <div className='!z-50'>
                    <h4 className="text-lg font-bold">{city.name}</h4>
                    <p className="text-sm text-gray-600">Forecast Sales: {city.forecastSales}</p>
                    <p className="text-sm text-gray-600">Forecast Accuracy: {city.forecastAccuracy}</p>
                </div>
            </Popup>

        </Marker>
    );
};

export default HoverMarker;
