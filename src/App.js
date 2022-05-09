import { DataContextProvider } from "./context/DataContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import "./css/App.css";

import Home from "./pages/HomePage";

function App() {
  return (
    <DataContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </DataContextProvider>
  );
}

export default App;
