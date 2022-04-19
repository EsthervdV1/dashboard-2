import { DataContextProvider } from "./context/DataContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

import "./css/App.css";

function App() {
  return (
    <>
      <Header />
      <DataContextProvider>
        <Home />
      </DataContextProvider>
      <Footer />
    </>
  );
}

export default App;