import { DataContextProvider } from "./context/DataContext";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import StudentPage from "./components/StudentPage"
import ErrorPage from "./components/ErrorPage"

import "./css/App.css";

function App() {

  return (
    <Router>
        <Header />
        <DataContextProvider>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:studentName" element={<StudentPage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        </DataContextProvider>
        <Footer /> 
    </Router>
  );
}

export default App;
