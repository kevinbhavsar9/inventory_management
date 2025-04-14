export interface TableData {
  quarter: string;
  Consumption?: number;
  AI_Forecast?: number;
  Final_Forecast?: number;
  Previous_Forecast?: number;
}

export interface detailsPageDataElemType {
  dataset_name: string;
  dataset_id: string;
  data: TableData[];
}

export const dummyGraphData = [
  { quarter: "Q4 2023", Consumption: 610 },
  { quarter: "Q1 2024", Consumption: 490 },
  { quarter: "Q2 2024", Consumption: 530 },
  { quarter: "Q3 2024", Consumption: 720 },
  { quarter: "Q4 2024", Consumption: 690 },
  {
    quarter: "Q1 2025",
    AI_Forecast: 790,
    Consumption: 830,
    Final_Forecast: 820,
    Previous_Forecast: 780,
  },

  {
    quarter: "Q2 2025",
    AI_Forecast: 760,
    Final_Forecast: 740,
    Previous_Forecast: 400,
  },

  {
    quarter: "Q3 2025",
    AI_Forecast: 720,
    Final_Forecast: 690,
    Previous_Forecast: 420,
  },

  {
    quarter: "Q4 2025",
    AI_Forecast: 700,
    Final_Forecast: 670,
    Previous_Forecast: 440,
  },

  {
    quarter: "Q1 2026",
    AI_Forecast: 730,
    Final_Forecast: 700,
    Previous_Forecast: 460,
  },

  {
    quarter: "Q2 2026",
    AI_Forecast: 760,
    Final_Forecast: 750,
    Previous_Forecast: 490,
  },
];

export const detailsPageData: detailsPageDataElemType[] = [
  {
    dataset_name: "InventoryFlow_QtrlyForecast",
    dataset_id: "DS8458490",
    data: [
      { quarter: "Q4 2023", Consumption: 610 },
      { quarter: "Q1 2024", Consumption: 490 },
      { quarter: "Q2 2024", Consumption: 530 },
      { quarter: "Q3 2024", Consumption: 720 },
      { quarter: "Q4 2024", Consumption: 690 },
      {
        quarter: "Q1 2025",
        AI_Forecast: 790,
        Consumption: 830,
        Final_Forecast: 820,
        Previous_Forecast: 780,
      },

      {
        quarter: "Q2 2025",
        AI_Forecast: 760,
        Final_Forecast: 740,
        Previous_Forecast: 400,
      },

      {
        quarter: "Q3 2025",
        AI_Forecast: 720,
        Final_Forecast: 690,
        Previous_Forecast: 420,
      },

      {
        quarter: "Q4 2025",
        AI_Forecast: 700,
        Final_Forecast: 670,
        Previous_Forecast: 440,
      },

      {
        quarter: "Q1 2026",
        AI_Forecast: 730,
        Final_Forecast: 700,
        Previous_Forecast: 460,
      },

      {
        quarter: "Q2 2026",
        AI_Forecast: 760,
        Final_Forecast: 750,
        Previous_Forecast: 490,
      },
    ],
  },
  {
    dataset_name: "StockPulse_Analytics",
    dataset_id: "DS8458491",
    data: [
      { quarter: "Q4 2023", Consumption: 580 },
      { quarter: "Q1 2024", Consumption: 500 },
      { quarter: "Q2 2024", Consumption: 520 },
      { quarter: "Q3 2024", Consumption: 690 },
      { quarter: "Q4 2024", Consumption: 710 },
      {
        quarter: "Q1 2025",
        AI_Forecast: 750,
        Consumption: 770,
        Final_Forecast: 765,
        Previous_Forecast: 740,
      },
      {
        quarter: "Q2 2025",
        AI_Forecast: 730,
        Final_Forecast: 720,
        Previous_Forecast: 410,
      },
      {
        quarter: "Q3 2025",
        AI_Forecast: 700,
        Final_Forecast: 680,
        Previous_Forecast: 430,
      },
      {
        quarter: "Q4 2025",
        AI_Forecast: 720,
        Final_Forecast: 710,
        Previous_Forecast: 450,
      },
      {
        quarter: "Q1 2026",
        AI_Forecast: 740,
        Final_Forecast: 735,
        Previous_Forecast: 470,
      },
      {
        quarter: "Q2 2026",
        AI_Forecast: 765,
        Final_Forecast: 755,
        Previous_Forecast: 500,
      },
    ],
  },
  {
    dataset_name: "DemandTrack_Consumption",
    dataset_id: "DS8458492",
    data: [
      { quarter: "Q4 2023", Consumption: 640 },
      { quarter: "Q1 2024", Consumption: 520 },
      { quarter: "Q2 2024", Consumption: 550 },
      { quarter: "Q3 2024", Consumption: 730 },
      { quarter: "Q4 2024", Consumption: 700 },
      {
        quarter: "Q1 2025",
        AI_Forecast: 800,
        Consumption: 840,
        Final_Forecast: 830,
        Previous_Forecast: 790,
      },
      {
        quarter: "Q2 2025",
        AI_Forecast: 770,
        Final_Forecast: 750,
        Previous_Forecast: 420,
      },
      {
        quarter: "Q3 2025",
        AI_Forecast: 730,
        Final_Forecast: 700,
        Previous_Forecast: 440,
      },
      {
        quarter: "Q4 2025",
        AI_Forecast: 710,
        Final_Forecast: 680,
        Previous_Forecast: 460,
      },
      {
        quarter: "Q1 2026",
        AI_Forecast: 740,
        Final_Forecast: 710,
        Previous_Forecast: 480,
      },
      {
        quarter: "Q2 2026",
        AI_Forecast: 770,
        Final_Forecast: 760,
        Previous_Forecast: 510,
      },
    ],
  },
  {
    dataset_name: "WarehouseWatch_2024",
    dataset_id: "DS8458493",
    data: [
      { quarter: "Q4 2023", Consumption: 600 },
      { quarter: "Q1 2024", Consumption: 470 },
      { quarter: "Q2 2024", Consumption: 510 },
      { quarter: "Q3 2024", Consumption: 700 },
      { quarter: "Q4 2024", Consumption: 680 },
      {
        quarter: "Q1 2025",
        AI_Forecast: 780,
        Consumption: 810,
        Final_Forecast: 800,
        Previous_Forecast: 760,
      },
      {
        quarter: "Q2 2025",
        AI_Forecast: 750,
        Final_Forecast: 735,
        Previous_Forecast: 405,
      },
      {
        quarter: "Q3 2025",
        AI_Forecast: 710,
        Final_Forecast: 685,
        Previous_Forecast: 425,
      },
      {
        quarter: "Q4 2025",
        AI_Forecast: 695,
        Final_Forecast: 660,
        Previous_Forecast: 445,
      },
      {
        quarter: "Q1 2026",
        AI_Forecast: 725,
        Final_Forecast: 690,
        Previous_Forecast: 465,
      },
      {
        quarter: "Q2 2026",
        AI_Forecast: 755,
        Final_Forecast: 745,
        Previous_Forecast: 495,
      },
    ],
  },
  {
    dataset_name: "SupplySense_ForecastSet",
    dataset_id: "DS8458494",
    data: [
      { quarter: "Q4 2023", Consumption: 620 },
      { quarter: "Q1 2024", Consumption: 480 },
      { quarter: "Q2 2024", Consumption: 540 },
      { quarter: "Q3 2024", Consumption: 710 },
      { quarter: "Q4 2024", Consumption: 690 },
      {
        quarter: "Q1 2025",
        AI_Forecast: 770,
        Consumption: 800,
        Final_Forecast: 790,
        Previous_Forecast: 750,
      },
      {
        quarter: "Q2 2025",
        AI_Forecast: 740,
        Final_Forecast: 730,
        Previous_Forecast: 415,
      },
      {
        quarter: "Q3 2025",
        AI_Forecast: 705,
        Final_Forecast: 675,
        Previous_Forecast: 435,
      },
      {
        quarter: "Q4 2025",
        AI_Forecast: 690,
        Final_Forecast: 665,
        Previous_Forecast: 455,
      },
      {
        quarter: "Q1 2026",
        AI_Forecast: 720,
        Final_Forecast: 705,
        Previous_Forecast: 475,
      },
      {
        quarter: "Q2 2026",
        AI_Forecast: 750,
        Final_Forecast: 740,
        Previous_Forecast: 505,
      },
    ],
  },
  {
    dataset_name: "InventoryInsight_DS",
    dataset_id: "DS8458495",
    data: [
      { quarter: "Q4 2023", Consumption: 590 },
      { quarter: "Q1 2024", Consumption: 495 },
      { quarter: "Q2 2024", Consumption: 535 },
      { quarter: "Q3 2024", Consumption: 705 },
      { quarter: "Q4 2024", Consumption: 675 },
      {
        quarter: "Q1 2025",
        AI_Forecast: 760,
        Consumption: 795,
        Final_Forecast: 785,
        Previous_Forecast: 735,
      },
      {
        quarter: "Q2 2025",
        AI_Forecast: 735,
        Final_Forecast: 725,
        Previous_Forecast: 410,
      },
      {
        quarter: "Q3 2025",
        AI_Forecast: 700,
        Final_Forecast: 670,
        Previous_Forecast: 430,
      },
      {
        quarter: "Q4 2025",
        AI_Forecast: 680,
        Final_Forecast: 650,
        Previous_Forecast: 450,
      },
      {
        quarter: "Q1 2026",
        AI_Forecast: 710,
        Final_Forecast: 695,
        Previous_Forecast: 470,
      },
      {
        quarter: "Q2 2026",
        AI_Forecast: 745,
        Final_Forecast: 735,
        Previous_Forecast: 500,
      },
    ],
  },
];
