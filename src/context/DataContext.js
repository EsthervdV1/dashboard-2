import { createContext, useEffect, useState } from "react";
import * as d3 from "d3";
import CSVdata from "../data/data.csv";

const DataContext = createContext({
  data: [],
  setData: () => {},
});

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  //retrieves data from csv file
  useEffect(() => {
    d3.csv(CSVdata).then(setData);
  }, []);

  //console.log(data);

  // Array with allStudents, only the names
  const allStudents = [...new Set(data.map((item) => item.name))];
  console.log(allStudents)

  // Arry with all the courses
  const allCourses = [...new Set(data.map((item) => item.course))];

  const makeAverageArray = () => {
    const newArray = [];
    // Map over data and create new object
    allCourses.forEach((course) => {
      let newObject = { name: "allStudents", course: course };

      //Creates Array of difficultyRating
      let arrayOfDifficultyRating = data
        .filter((item) => item.course === course)
        .map((item) => item.difficultyRating);

      //Converts the ratings from string to numbers
      arrayOfDifficultyRating = arrayOfDifficultyRating.map((str) =>
        Number(str)
      );

      //adds all the ratings per course
      let averageOfDifficultyRating = arrayOfDifficultyRating.reduce(
        (accumulate, currentValue) => accumulate + currentValue
      );

      //calculate the average of difficulty rating
      averageOfDifficultyRating =
        averageOfDifficultyRating / allStudents.length;

      newObject["difficultyRating"] = averageOfDifficultyRating;

      //Creates array of funRating
      let arrayOfFunRating = data
        .filter((item) => item.course === course)
        .map((item) => item.funRating);

      //Converts the ratings from string to numbers
      arrayOfFunRating = arrayOfFunRating.map((str) => Number(str));

      //adds all the ratings per course
      let averageOfFunRating = arrayOfFunRating.reduce(
        (previousValue, currentValue) => previousValue + currentValue
      );

      //calculate the average of fun rating
      averageOfFunRating = averageOfFunRating / allStudents.length;

      newObject["funRating"] = averageOfFunRating;

      newArray.push(newObject);
    });

    return newArray;
  };

  const averageData = makeAverageArray();
  //console.log(averageArray);

  return (
    <DataContext.Provider value={{ averageData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
