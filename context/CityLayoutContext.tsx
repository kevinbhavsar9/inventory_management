import React, { createContext, useContext, useState, ReactNode } from 'react';
import { LayoutOptions } from '@/types/HomeScreenTypes';

interface WidgetLayoutType {
    selectedLayout: LayoutOptions;
    handleWidgetLayoutChange: (item: LayoutOptions) => void;
}


const WidgetLayoutContext = createContext<WidgetLayoutType | undefined>(undefined);


export const WidgetLayoutProvider = ({ children }: { children: ReactNode }) => {
    const [selectedLayout, setSelectedLayout] = useState<LayoutOptions>('top');
    const handleWidgetLayoutChange = (item: LayoutOptions) => {
        setSelectedLayout(item);
    }

    return (
        <WidgetLayoutContext.Provider value={{ selectedLayout, handleWidgetLayoutChange }}>
            {children}
        </WidgetLayoutContext.Provider>
    );
};

export const useWidgetLayout = () => {
    const context = useContext(WidgetLayoutContext);
    if (!context) {
        throw new Error('useSharedState must be used within a SharedStateProvider');
    }
    return context;
};
