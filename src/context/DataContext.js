import { createContext, useEffect, useState } from "react";

import * as d3 from "d3";
import CSVdata from "../data/data.csv";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [allData, setAllData] = useState([]);
  
  useEffect(() => {
    d3.csv(CSVdata).then(setAllData);
  }, []);


  return (
    <DataContext.Provider value={allData}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
