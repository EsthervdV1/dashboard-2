import { useState } from "react";
import RenderBarChart from "./RenderBarChart";
import RenderLineChart from "./RenderLineChart";
import ToggleChartButtons from "./ToggleChartButtons";

import"../../css/chartsOverview.css"

const ChartsOverview = ({averageData, studentData}) => {

  const [showChart, setShowChart] = useState(true);
  const [showDifficultyRating, setShowDifficultyRating] = useState(false);
  const [showFunRating, setShowFunRating] = useState(false);
  //const [showData, setShowData] = useState({averageData})

  const toggleCharts = () => {
    setShowChart((prevState) => !prevState);
  };

  const toggleDifficultyRating = () => {
    setShowDifficultyRating((prevState) => !prevState);
  };

  const toggleFunRating = () => {
    setShowFunRating((prevState) => !prevState);
  };

  // const toggleData = () => {
  //   setShowData((data)=> ({studentData}))
  // }

  return (
    <div className="chartsOverview-container">
      <ToggleChartButtons
        showDifficultyRating={showDifficultyRating}
        showFunRating={showFunRating}
        toggleFunRating={toggleFunRating}
        toggleDifficultyRating={toggleDifficultyRating}
      />
      <button onClick={toggleCharts} className="chartsOverview-button">
        {showChart ? (
          <span>Lijngrafiek</span>
        ) : (
          <span>Staafdiagram</span>
        )}
      </button>
      {showChart ? (
        <RenderBarChart
          showDifficultyRating={showDifficultyRating}
          showFunRating={showFunRating}
          averageData={averageData}
          studentData={studentData}
         
        />
      ) : (
        <RenderLineChart
          showDifficultyRating={showDifficultyRating}
          showFunRating={showFunRating}
          averageData={averageData}
        />
      )}
    </div>
  );
};

export default ChartsOverview;
