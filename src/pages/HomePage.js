import { useState } from "react";

import RenderBarChart from "../components/RenderBarChart";
import RenderLineChart from "../components/RenderLineChart";
import Layout from "../components/Layout";
import ToggleChartButtons from "../components/ToggleChartButtons";

import "../css/home.css";
import StudentOverview from "../components/StudentOverview";

const Home = () => {
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
          />
        ) : (
          <RenderLineChart
            showDifficultyRating={showDifficultyRating}
            showFunRating={showFunRating}
          />
        )}
        <StudentOverview />
      </div>
    </Layout>
  );
};

export default Home;
