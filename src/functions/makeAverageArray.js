import {DataContext} from "../context/DataContext"
import {useContext} from "react"



const makeAverageArray = () => {

  let data = useContext(DataContext);
  
  const newArray = [];

  const arrayOfStudentNames = [...new Set(data.map((item) => item.name))];
  const arrayOfAllCourses = [...new Set(data.map((item) => item.course))];

  arrayOfAllCourses.forEach((course) => {
    let newObject = { name: "student", course: course };

    // -------- Calulation for difficulty rating --------
    let arrayOfDifficultyRating = data
      .filter((item) => item.course === course)
      .map((item) => item.difficultyRating);

    arrayOfDifficultyRating = arrayOfDifficultyRating.map((str) => Number(str));

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

export default makeAverageArray;
