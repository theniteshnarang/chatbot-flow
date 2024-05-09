import { colors, createTheme } from "@mui/material";
import { indigo, teal } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    ...colors,
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: teal[100],
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // Set default font family
    fontSize: 12, // Set default font size
  },
});
