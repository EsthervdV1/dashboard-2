import { createContext, useEffect, useState } from "react";
import * as d3 from "d3";
import CSVdata from "../data/data.csv";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    d3.csv(CSVdata).then(setData);
  }, []);

//   console.log(data);

// const filterOnStudentName = data.filter((item) => {
//     return item.name === studentName;
// });

  return (
  <DataContext.Provider value={data}>
    {children}
  </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
