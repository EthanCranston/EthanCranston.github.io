import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainApp from "./mainApp";
import ProjectControl from "./pages/projects/projectControl";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/:projectName" element={<ProjectControl />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;