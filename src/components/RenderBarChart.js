// import { useContext } from "react";
// import { DataContext } from "../context/DataContext";

import averageData from "../functions/makeAverageArray";
import { BarChart, Bar, XAxis, YAxis, Tooltip} from "recharts";

const RenderBarChart = ({showDifficultyRating, showFunRating}) => {

  // let averageData = useContext(DataContext);
  // averageData = averageData.averageData;

  return (
    <div className="div-renderchart">
      <BarChart width={1300} height={600} data={averageData}>
        <XAxis
          dataKey="course"
          textAnchor="end"
          height={150}
          interval={0}
          angle="-45"
          stroke="#000"
          fontSize={12}
        />
        <YAxis type="number" domain={[0, 4]} />
        <Tooltip />
        <Bar
          dataKey="difficultyRating"
          fill="#a2ad91"
          hide={showDifficultyRating}
        />
        <Bar 
          dataKey="funRating" 
          fill="#3A2D32" 
          hide={showFunRating} 
        />
      </BarChart>
    </div>
  );
};

export default RenderBarChart;
