import React, { useState, useMemo, useEffect, useRef, memo } from 'react';
import { InventoryData } from '@/types/HomeScreenTypes';
import { inventoryData } from '@/utils/MockData/inventoryData';
import { useWidgetLayout } from '@/context/CityLayoutContext';
import Widget from "@/components/homescreen/Widget";
import { LatLngExpression } from 'leaflet';


interface WidgetContainerProps {
    selectedAltitudes: LatLngExpression;
    handleLocationChange: (latitude: number, longitude: number) => void;
}

//Container for holding all the widgets

const WidgetContainer = ({ handleLocationChange }: WidgetContainerProps) => {
    const { selectedLayout } = useWidgetLayout();
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollTop, setCanScrollTop] = useState(false);
    const [canScrollBottom, setCanScrollBottom] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (selectedLayout === "left" || selectedLayout === "right")
            setCanScrollBottom(true);
        if (selectedLayout === "top" || selectedLayout === "bottom")
            setCanScrollRight(true);
    }, [selectedLayout]);

    useEffect(() => {
        const checkScroll = () => {
            const el = scrollRef.current;
            if (el) {
                setCanScrollRight(
                    el.scrollWidth > el.clientWidth &&
                    el.scrollLeft + el.clientWidth + 20 < el.scrollWidth
                );
                setCanScrollLeft(el.scrollLeft > 0);
                setCanScrollTop(el.scrollTop > 0);
                setCanScrollBottom(
                    el.scrollTop + el.clientHeight + 10 < el.scrollHeight
                );
            }
        };

        checkScroll(); // on mount
        window.addEventListener("resize", checkScroll); // on resize

        const el = scrollRef.current;
        el?.addEventListener("scroll", checkScroll); // on scroll

        return () => {
            window.removeEventListener("resize", checkScroll);
            el?.removeEventListener("scroll", checkScroll);
        };
    }, []);

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
                className={`gap-4 ${layoutwiseChildClasses[selectedLayout]} py-4 z-20 scrollbar-hide`} ref={scrollRef}
            >

                {/* top scroll blur for left and right layouts*/}
                {canScrollTop &&
                    (selectedLayout === "left" || selectedLayout === "right") && (
                        <div
                            className={`pointer-events-none absolute h-10 w-60 bg-gradient-to-r from-lightgray to-gray-100 shadow-sm rounded-lg opacity-20 backdrop-blur-sm z-50 ${selectedLayout === "left" && "left-8 top-12"
                                } ${selectedLayout === "right" && "right-8 top-12"}`}
                        />
                    )}

                {/* left scroll blur for right and left layouts */}

                {canScrollLeft &&
                    (selectedLayout === "top" || selectedLayout === "bottom") && (
                        <div
                            className={`pointer-events-none absolute left-0 h-60 w-10 bg-gradient-to-r from-lightgray to-gray-100 shadow-sm rounded-lg opacity-20 backdrop-blur-sm z-50 ${selectedLayout === "top" && "top-16"
                                } ${selectedLayout === "bottom" && "bottom-8"}`}
                        />
                    )}


                {inventoryData.map((item: InventoryData) => (
                    <Widget
                        key={`${item.latitude}_${item.longitude}`}
                        cityData={item}
                        handleLocationChange={handleLocationChange}
                    />
                ))}

                {/* right scroll blur for top and bottom layouts*/}

                {canScrollRight &&
                    (selectedLayout === "top" || selectedLayout === "bottom") && (
                        <div
                            className={`pointer-events-none absolute right-0 h-60 w-10 bg-gradient-to-r from-lightgray to-gray-100 shadow-sm rounded-lg opacity-20 backdrop-blur-sm z-50 ${selectedLayout === "top" && "top-16"
                                } ${selectedLayout === "bottom" && "bottom-8"}`}
                        />
                    )}

                {/* bottom scroll blur for left and right layouts*/}
                {canScrollBottom &&
                    (selectedLayout === "left" || selectedLayout === "right") && (
                        <div
                            className={`pointer-events-none absolute w-60 h-10  bg-gradient-to-r from-lightgray to-gray-100 shadow-sm rounded-lg opacity-20 backdrop-blur-sm z-50 ${selectedLayout === "left" && "left-8 bottom-4"
                                } ${selectedLayout === "right" && "right-8 bottom-4"}`}
                        />
                    )}

            </div>
        </div >
    );
};

export default memo(WidgetContainer);