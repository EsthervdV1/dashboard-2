export const makeAverageArray = (data) => {

  const arrayOfStudentNames = [...new Set(data.map((item) => item.name))];
  const arrayOfAllCourses = [...new Set(data.map((item) => item.course))];

  const newArray = [];

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
  //console.log(newArray)
};



