import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Global } from "@emotion/react";
import { globalStyles } from "styles/globalStyles";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Global styles={globalStyles} />
    <div
      style={{
        width: "350px",
        height: "100vh",
        background: "#F8F8F7",
        display: "flex",
        padding: "0 20px",
        overflow: "hidden",
        touchAction: "none",
      }}
    >
      <App />
    </div>
  </StrictMode>
);
