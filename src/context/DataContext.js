import { createContext, useEffect, useState } from "react";
import * as d3 from "d3";
import CSVdata from "../data/data.csv";

const DataContext = createContext()


const DataContextProvider = ({children}) => {
  const [data, setData] = useState([])
  const arrayOfStudentNames = [...new Set(data.map((item) => item.name))];
  // console.log(arrayOfStudentNames)
  const arrayOfAllCourses = [...new Set(data.map((item) => item.course))];

   // ---------------------------------------------------------------------------

  useEffect(() => {
    d3.csv(CSVdata).then(setData);
  }, []);

  // ---------------------------------------------------------------------------

  const makeAverageArray = () => {
    const newArray = [];
  
    arrayOfAllCourses.forEach((course) => {
      let newObject = { name: "student", course: course };
      
    // -------- Calulation for difficulty rating --------
      let arrayOfDifficultyRating = data
        .filter((item) => item.course === course)
        .map((item) => item.difficultyRating)

      arrayOfDifficultyRating = arrayOfDifficultyRating.map((str) =>
        Number(str)
      );

      let averageOfDifficultyRating = arrayOfDifficultyRating.reduce(
        (accumulate, currentValue) => accumulate + currentValue
      );

      averageOfDifficultyRating =
        averageOfDifficultyRating / arrayOfStudentNames.length;

      newObject["difficultyRating"] = averageOfDifficultyRating;
    
      // -------- Calulation for fun rating --------

      let arrayOfFunRating = data
        .filter((item) => item.course === course)
        .map((item) => item.funRating);

      arrayOfFunRating = arrayOfFunRating.map((str) => Number(str));

      let averageOfFunRating = arrayOfFunRating.reduce(
        (previousValue, currentValue) => previousValue + currentValue
      );

      averageOfFunRating = averageOfFunRating / arrayOfStudentNames.length;

      newObject["funRating"] = averageOfFunRating;

      newArray.push(newObject);
    });

    return newArray;
  };

  const averageData = makeAverageArray();

 // ---------------------------------------------------------------------------

  const filterStudents = data.filter(item => {
    return item.name === "Evelyn"
  })

  //console.log(filterStudents)

  return (
    <DataContext.Provider value={{ 
        averageData, data
        }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
