import { MuiThemeProvider, createTheme } from "@mui/material";

// Crie seu próprio tema:
const theme = createTheme({
  palette: {
    primary: {
      main: "#1B262C",
    },
    secondary: {
      main: "#0F4C75",
    },
    third: {
      main: "#3282B8",
    },
    fourth: {
      main: "#BBE1FA",
    }
  },
});
export default theme;