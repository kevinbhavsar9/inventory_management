import React, { useEffect } from 'react';

import { useRouter } from 'next/router';
import { inventoryData } from '@/utils/MockData/inventoryData';
import DatasetInfo from './DatasetInfo';
import DataAccuracyDetails from './DataAccuracyDetails';


interface DetailHeaderDataType {
    dataset_name: string;
    dataset_id: string;
}



const DetailHeader = ({ data }: { data: DetailHeaderDataType }) => {
    const router = useRouter();
    const { cityid } = router.query;

    const [city, setCity] = React.useState<string>("");

    useEffect(() => {
        const tempCity = inventoryData.find((item) => item.id === parseInt(cityid ? cityid as string : ""))?.city;
        setCity(tempCity ? tempCity : "");

    }, [cityid]);



    return (
        <div className='bg-primary border border-white !max-md:min-h-20 grid grid-cols-2 max gap-2 p-2 max-md:grid-cols-1'>

            <DatasetInfo dataset_name={data.dataset_name} dataset_id={data.dataset_id} city_name={city} />

            <DataAccuracyDetails />
        </div>
    );
};

export default DetailHeader;