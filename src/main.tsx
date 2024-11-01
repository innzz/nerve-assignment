import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ViewProvider from "./context/ViewProvider.tsx";
import DateProvider from "./context/DateProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ViewProvider>
      <DateProvider>
        <App />
      </DateProvider>
    </ViewProvider>
  </StrictMode>
);
