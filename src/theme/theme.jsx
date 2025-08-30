// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h1: {
      color: "#1E293B", // custom color for h1
    },
    h2: {
      color: "#334155", // custom color for h2
    },
    h3: {
      color: "#475569", // custom color for h3
    },
    h4: {
      color: "#516074ff", // custom color for h4
    },
    body1: {
      color: "#374151", // default text color
    },
  },
  palette: {
    primary: {
      main: "#1976d2", // default primary color
    },
    custom: {
      heading: "#1E293B", // define a reusable custom heading color
    },
  },
});

export default theme;
