import { useState, useContext } from "react";
import { DataContext } from "../context/DataContext";

import RenderBarChart from "../components/RenderBarChart";
import RenderLineChart from "../components/RenderLineChart";
import Layout from "../components/Layout";
import ToggleChartButtons from "../components/ToggleChartButtons";
import StudentOverview from "../components/StudentOverview";
import { makeAverageArray } from "../functions/makeAverageArray";

import "../css/home.css";

const Home = () => {
  const data = useContext(DataContext)
  const [showChart, setShowChart] = useState(true);
  const [showDifficultyRating, setShowDifficultyRating] = useState(false);
  const [showFunRating, setShowFunRating] = useState(false);
 
  const averageData = makeAverageArray(data)

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
    <Layout>
      <div className="container-home">
        <ToggleChartButtons
          showDifficultyRating={showDifficultyRating}
          showFunRating={showFunRating}
          toggleFunRating={toggleFunRating}
          toggleDifficultyRating={toggleDifficultyRating}
        />
        <button onClick={toggleCharts} className="button-chart">
          {showChart ? (
            <span>Klik hier voor de lijngrafiek</span>
          ) : (
            <span>Klik hier voor het staafdiagram</span>
          )}
        </button>
        {showChart ? (
          <RenderBarChart
            showDifficultyRating={showDifficultyRating}
            showFunRating={showFunRating}
            averageData={averageData}
          />
        ) : (
          <RenderLineChart
            showDifficultyRating={showDifficultyRating}
            showFunRating={showFunRating}
            averageData={averageData}
          />
        )}
        <StudentOverview />
      </div>
    </Layout>
  );
};

export default Home;
