import { useContext, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { DataContext } from "../context/DataContext";

const RenderLineChart = () => {
  let averageData = useContext(DataContext);
  averageData = averageData.averageData;

  const [showDifficultyRating, setShowDifficultyRating] = useState(false);
  const [showFunRating, setShowFunRating] = useState(false);

  const toggleDifficultyRating = () => {
    setShowDifficultyRating((prevState) => !prevState);
  };

  const toggleFunRating = () => {
    setShowFunRating((prevState) => !prevState);
  };

  return (
    <div className="div-linechart">
      <button onClick={toggleDifficultyRating}>difficulty rating ON/OFF</button>
      <button onClick={toggleFunRating}>fun rating ON/OFF</button>
      <LineChart
        width={1200}
        height={600}
        data={averageData}
        
      >
        <XAxis 
          dataKey="course"
          textAnchor="end"
          height={120}
          interval={0}
          angle="-45"
          stroke="#000"
          fontSize={12}
        />
        <YAxis type="number" domain={[0,4]}/>
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="difficultyRating"
          stroke="#E2D1F9"
          activeDot={{ r: 8 }}
          hide={showDifficultyRating}
        />
        <Line 
          type="monotone" 
          dataKey="funRating" 
          stroke="#317773" 
          hide={showFunRating}
        />
      </LineChart>
    </div>
  );
};

export default RenderLineChart;
