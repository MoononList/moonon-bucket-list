// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Global } from "@emotion/react";
import { globalStyles } from "styles/globalStyles";
import LoadingPage from "./pages/LoadingPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Router>
        <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </Router>{" "}
    </>
  );
}

export default App;
