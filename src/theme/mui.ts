// src/theme/mui.ts
import { createTheme } from "@mui/material/styles";

const getMuiTheme = () =>
  createTheme({
    palette: {
      primary: {
        main: "#0070f3",
      },
      secondary: {
        main: "#ff4081",
      },
    },
  });

export default getMuiTheme;
