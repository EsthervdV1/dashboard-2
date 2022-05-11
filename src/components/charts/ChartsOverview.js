import { useState } from "react";
import RenderBarChart from "./RenderBarChart";
import RenderLineChart from "./RenderLineChart";
import ToggleChartButtons from "./ToggleChartButtons";

import "../../css/chartsOverview.css";

const ChartsOverview = ({ averageData, studentData, isStudent }) => {
  const [showChart, setShowChart] = useState(true);
  const [showDifficultyRating, setShowDifficultyRating] = useState(false);
  const [showFunRating, setShowFunRating] = useState(false);

  const toggleCharts = () => {
    setShowChart((prevState) => !prevState);
  };

  const toggleDifficultyRating = () => {
    setShowDifficultyRating((prevState) => !prevState);
  };

  const toggleFunRating = () => {
    setShowFunRating((prevState) => !prevState);
  };

  return (
    <div className="chartsOverview-container">
      <ToggleChartButtons
        showDifficultyRating={showDifficultyRating}
        showFunRating={showFunRating}
        toggleFunRating={toggleFunRating}
        toggleDifficultyRating={toggleDifficultyRating}
      />
      <button onClick={toggleCharts} className="chartsOverview-button">
        {showChart ? <span>Lijngrafiek</span> : <span>Staafdiagram</span>}
      </button>
      {showChart ? (
        <RenderBarChart
          showDifficultyRating={showDifficultyRating}
          showFunRating={showFunRating}
          showData={isStudent === true ? studentData : averageData}
        />
      ) : (
        <RenderLineChart
          showDifficultyRating={showDifficultyRating}
          showFunRating={showFunRating}
          showData={isStudent === true ? studentData : averageData}
        />
      )}
    </div>
  );
};

export default ChartsOverview;
