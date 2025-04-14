import React, { createContext, useContext, useState, ReactNode } from 'react';
import { detailsPageDataElemType } from '@/utils/MockData/detailsPageGraphData';

interface SelectedDatasetContextType {
    selectedDatasetId: string;
    handleSelectedDatasetIdChange: (item: string) => void;
}


const SelectedDatasetContext = createContext<SelectedDatasetContextType | undefined>(undefined);


export const SelectedDatasetProvider = ({ children }: { children: ReactNode }) => {
    const [selectedDatasetId, setSelectedDatasetId] = useState<string>('');
    const handleSelectedDatasetIdChange = (item: string) => {
        setSelectedDatasetId(item);
    }

    return (
        <SelectedDatasetContext.Provider value={{ selectedDatasetId, handleSelectedDatasetIdChange }}>
            {children}
        </SelectedDatasetContext.Provider>
    );
};

export const useSelectedDataset = () => {
    const context = useContext(SelectedDatasetContext);
    if (!context) {
        throw new Error('useSharedState must be used within a SharedStateProvider');
    }
    return context;
};
