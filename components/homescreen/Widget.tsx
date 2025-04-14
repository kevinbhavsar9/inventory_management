import { InventoryData } from "@/types/HomeScreenTypes";
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import Forecast from "./Forecast";
import { formatNumberWithSuffix } from "@/utils/helper";
import { useRouter } from "next/router";


interface WidgetPropsType {
    cityData: InventoryData;
    handleLocationChange: (latitude: number, longitude: number) => void;
}

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
        <div className="from-blue-800 to-cyan-900 p-4 rounded-xl border border-blue-400 hover:cursor-pointer hover:border-primary-active text-white min-w-58 shadow-lg backdrop-blur-sm" onClick={() => handleWidgetClick(id)}>
            <div className="flex items-center justify-between mb-4 ">
                <h2 className="text-lg font-semibold">{city}</h2>
                <LocationSearchingIcon className="hover:cursor-pointer hover:text-primary-active" onClick={() => handleLocationChange(latitude!, longitude!)} />
            </div>

            <Forecast label="Forecast Sales" value={formatNumberWithSuffix(forecastSales)} graphData={salesTrend} graphPrimaryKey="historic" graphSecondaryKey="forecast" />

            <Forecast label="Forecast Accuracy" value={formatNumberWithSuffix(forecastAccuracy) + "%"} graphData={accuracyTrend} graphPrimaryKey="historic" graphSecondaryKey="forecast" />

        </div>
    );
}
