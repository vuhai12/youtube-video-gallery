import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { UIProvider } from "./context/UIContext.tsx";
import { CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UIProvider>
      <CssBaseline />
      <App />
    </UIProvider>
  </StrictMode>
);
