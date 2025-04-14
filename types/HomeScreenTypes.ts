export interface menuItems {
  key: string;
  value: string;
}

export interface DropdownProps {
  menuItems: menuItems[];
  selectedItem: string;
  onChange: (item: LayoutOptions) => void;
  label: string;
}

export interface InventoryData {
  id: number;
  city: string;
  latitude: number;
  longitude: number;
  forecastSales: number;
  forecastAccuracy: number;
  salesTrend: {
    month: string;
    historic: number;
    forecast: number;
  }[];
  accuracyTrend: {
    month: string;
    historic: number;
    forecast: number;
  }[];
}

export interface cityType {
  name: string;
  lat: number;
  lng: number;
  forecastSales: number;
  forecastAccuracy: number;
}

export type LayoutOptions = "top" | "bottom" | "left" | "right" | "hide";
