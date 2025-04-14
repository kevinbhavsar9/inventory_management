import { InventoryData } from "@/types/HomeScreenTypes";
// import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import DescriptionIcon from '@mui/icons-material/Description';
import PinDropIcon from '@mui/icons-material/PinDrop';
import Forecast from "./Forecast";
import { formatNumberWithSuffix } from "@/utils/helper";
import { useRouter } from "next/router";
import Tooltip from "../shared/Tooltip";


interface WidgetPropsType {
    cityData: InventoryData;
    handleLocationChange: (latitude: number, longitude: number) => void;
}
//widget component 
export default function Widget({ cityData, handleLocationChange }: WidgetPropsType) {

    const router = useRouter();

    const {
        id,
        city,
        forecastAccuracy,
        forecastSales,
        salesTrend,
        accuracyTrend,
        latitude,
        longitude,
    } = cityData;

    const handleWidgetClick = (id: number) => {
        // Handle widget click event here
        router.push(`/details/${id}`)
    }



    return (
        <div className="from-blue-800 to-cyan-900 p-4 rounded-xl border border-blue-400 hover:border-primary-active text-white min-w-58 shadow-lg backdrop-blur-sm" >
            <div className="flex items-center justify-between mb-4 ">
                <Tooltip toolTipText={`View details`} placement="top">

                    <h2 className="text-lg font-semibold hover:cursor-pointer" onClick={() => handleWidgetClick(id)}>{city}</h2>
                </Tooltip>
                <div className="flex">

                    {/* Button for location navigation */}
                    <Tooltip toolTipText={`Navigate to ${city}`} placement="top"><PinDropIcon className="hover:cursor-pointer hover:text-primary-active mr-2" onClick={() => handleLocationChange(latitude!, longitude!)} /></Tooltip>

                    {/* Button for details page  */}
                    <Tooltip toolTipText={`View details`} placement="top"><DescriptionIcon className="hover:cursor-pointer hover:text-primary-active" onClick={() => handleWidgetClick(id)} /></Tooltip>
                </div>
            </div>

            <Forecast label="Forecast Sales" value={formatNumberWithSuffix(forecastSales)} graphData={salesTrend} graphPrimaryKey="historic" graphSecondaryKey="forecast" />

            <Forecast label="Forecast Accuracy" value={formatNumberWithSuffix(forecastAccuracy) + "%"} graphData={accuracyTrend} graphPrimaryKey="historic" graphSecondaryKey="forecast" />

        </div>
    );
}
