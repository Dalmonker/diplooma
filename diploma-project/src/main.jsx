import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app/App";
import "./index.scss";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./core/theme/theme";
import "./fonts/Poppins-Regular.ttf";
import "./fonts/Poppins-Bold.ttf";
import "./fonts/Poppins-SemiBold.ttf";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
