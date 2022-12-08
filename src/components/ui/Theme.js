import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl", "xxl"],
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
});

export default theme;
