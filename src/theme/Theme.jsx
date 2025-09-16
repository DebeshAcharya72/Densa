
import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h1: {
      color: "#1E293B",
    },
    h2: {
      color: "#334155",
    },
    h3: {
      color: "#475569",
    },
    h4: {
      color: "#516074ff",
    },
    body1: {
      color: "#374151",
    },
  },
  palette: {
    primary: {
      main: "#1976d2",
    },
    custom: {
      heading: "#1E293B",
    },
  },
});

export default Theme;
