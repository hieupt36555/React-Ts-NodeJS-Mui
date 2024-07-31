import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { LoadingProvider } from "./contexts/loading.tsx";
import { UserProvider } from "./contexts/user.tsx";

axios.defaults.baseURL = "http://localhost:3000";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { CartProvider } from "./contexts/cart.tsx";
import { OderProvider } from "./contexts/oder.tsx";

const theme = createTheme({

  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <UserProvider>
            <CartProvider>
              <OderProvider>
              <App />
              </OderProvider>
            </CartProvider>
          </UserProvider>
        </ThemeProvider>
      </LoadingProvider>
    </BrowserRouter>
  </React.StrictMode>
);
