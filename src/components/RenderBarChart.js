import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const RenderBarChart = () => {
  let averageData = useContext(DataContext);
  averageData = averageData.averageData;
  //console.log(averageData);

  const [showDifficultyRating, setShowDifficultyRating] = useState(false)
  const [showFunRating, setShowFunRating] = useState(false)

  const toggleDifficultyRating = () => {
    setShowDifficultyRating(prevState => !prevState)
  }

  const toggleFunRating = () => {
    setShowFunRating(prevState => !prevState)
  }

  return (
    <div className="div-barchart">
      <button onClick={toggleDifficultyRating}>difficulty rating ON/OFF</button>
      <button onClick={toggleFunRating}>fun rating ON/OFF</button>
      <BarChart width={1300} height={600} data={averageData}>
        <XAxis
          dataKey="course"
          textAnchor="end"
          height={120}
          interval={0}
          angle="-45"
          stroke="#000"
          fontSize={12}
        />
        <YAxis type="number" domain={[0, 4]} />
        <Tooltip />
        <Legend wrapperStyle={{ position: "relative", marginTop: "20px" }} />
        <Bar dataKey="difficultyRating" fill="#8884d8" hide={showDifficultyRating}/>
        <Bar dataKey="funRating" fill="#82ca9d" hide={showFunRating} />
      </BarChart>
      </div>
  );
};

export default RenderBarChart;
