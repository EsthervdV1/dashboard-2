
import "../../css/toggleChartButtons.css";

const ToggleChartButtons = ({
  showDifficultyRating,
  showFunRating,
  toggleFunRating,
  toggleDifficultyRating
}) => {


  return (
    <>
      <button onClick={toggleDifficultyRating} className="button-difficult">
        Moeilijheid
        {showDifficultyRating ? <span> AAN</span> : <span> UIT</span>}
      </button>
      <button onClick={toggleFunRating} className="button-fun">
        Plezier
        {showFunRating ? <span> AAN</span> : <span> UIT</span>}
      </button>
    </>
  );
};

export default ToggleChartButtons;
