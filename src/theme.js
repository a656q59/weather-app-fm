import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    common: {
      white: "hsl(0, 0%, 100%)",
    },
    neutral: {
      900: "hsl(243, 96%, 9%)",
      800: "hsl(243, 27%, 20%)",
      700: "hsl(243, 23%, 24%)",
      600: "hsl(243, 23%, 30%)",
      300: "hsl(240, 6%, 70%)",
      200: "hsl(250, 6%, 84%)",
      0: "hsl(0, 0%, 100%)",
    },
    primary: {
      main: "hsl(233, 67%, 56%)", // Blue 500
      dark: "hsl(248, 70%, 36%)", // Blue 700
    },
    secondary: {
      main: "hsl(28, 100%, 52%)", // Orange 500
    },
  },

  typography: {
    fontFamily: "DM Sans, sans-serif",
    body1: {
      fontSize: "18px",
    },
    body2: {
      fontSize: "18px",
    },
    h1: {
      fontFamily: "Bricolage Grotesque, sans-serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Bricolage Grotesque, sans-serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "Bricolage Grotesque, sans-serif",
      fontWeight: 700,
    },
  },

  breakpoints: {
    values: {
      xs: 0,     // small phones
      sm: 375,   // mobile design
      md: 768,
      lg: 1440,  // desktop design
      xl: 1920,
    },
  },
});

export default theme;
