import { useContext } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { DataContext } from "../context/DataContext";

const RenderLineChart = ({showDifficultyRating, showFunRating}) => {
  let averageData = useContext(DataContext);
  averageData = averageData.averageData;


  return (
    <div className="div-renderchart">
      <LineChart width={1200} height={600} data={averageData}>
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
        <Line
          type="monotone"
          dataKey="difficultyRating"
          stroke="#d30c7b"
          activeDot={{ r: 8 }}
          hide={showDifficultyRating}
        />
        <Line
          type="monotone"
          dataKey="funRating"
          stroke="#3a2d32"
          hide={showFunRating}
        />
      </LineChart>
    </div>
  );
};

export default RenderLineChart;
