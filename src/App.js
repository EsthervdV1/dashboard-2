import { DataContextProvider } from "./context/DataContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./pages/HomePage";
import StudentPage from "./pages/StudentPage";

import "./css/App.css";

function App() {
  return (
    <DataContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:studentName" element={<StudentPage/>}/>
        </Routes>
      </Router>
    </DataContextProvider>
  );
}

export default App;
