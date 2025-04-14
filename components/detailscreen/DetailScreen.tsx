import React, { useEffect, useState, useMemo } from 'react';
import Visualizations from './Visualizations';
import DetailHeader from './DetailHeader';
import TableComponent from '../shared/Table';
import { detailsPageData, detailsPageDataElemType, dummyGraphData, TableData } from '@/utils/MockData/detailsPageGraphData';
import { useSelectedDataset } from '@/context/SelectedDatasetContext';



const DetailScreen: React.FC = () => {

    const { selectedDatasetId } = useSelectedDataset();

    const [pageData, setPageData] = useState<detailsPageDataElemType>({ dataset_name: "", dataset_id: "", data: dummyGraphData });


    useEffect(() => {
        const tempPageData = detailsPageData.find((data) => data.dataset_id === selectedDatasetId);
        if (tempPageData) {
            setPageData(tempPageData);
        }
    }, [selectedDatasetId]);

    const headersArr = useMemo(() => pageData.data.map((data: TableData) => data.quarter), []);
    const rowTitleArr = ["Consumption", "AI_Forecast", "Final_Forecast", "Previous_Forecast"]




    return (
        <div className={`flex flex-col h-full w-full overflow-auto  box-border gap-2 p-2 `}>
            <DetailHeader data={{
                dataset_name: pageData.dataset_name,
                dataset_id: pageData.dataset_id
            }} />
            <Visualizations data={pageData.data} />
            <TableComponent headersTitle='Quarter' headersArr={headersArr} data={pageData.data} rowTitleArr={rowTitleArr} />
        </div>
    );
};

export default DetailScreen;