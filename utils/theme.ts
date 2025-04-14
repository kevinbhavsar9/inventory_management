// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 300,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
