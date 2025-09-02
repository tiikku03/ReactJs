import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage.jsx";  
import "./index.css";


const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  backgrounds: {
    first: {
      main: "#fb6f92",
    },
    second: {
      main: "#ff8fab",
    },
    third: {
      main: "#ffb3c6",
    },
    fourth: {
      main: "#ffc2d1",
    },
    fifth: {
      main: "#ffe5ec",
    },
  },
   typography: {
    fontFamily: [
      'Roboto', 
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700, 
    },
  }
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
