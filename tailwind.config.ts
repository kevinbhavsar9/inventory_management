import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#11262f",
          light: "#346b77",
          dark: "#193d4e",
          active: "#66ffe1",
        },
        secondary: {
          DEFAULT: "#0d1419", // e.g. violet-400
        },
      },
      screens: {
        sm: "601px",
        md: "1025px",
        "2md": "1250px",
        lg: "1441px",
        xl: "1601px",
      },
    },
  },
};
export default config;
