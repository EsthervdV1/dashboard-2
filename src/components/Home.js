import {useState} from "react"
import RenderBarChart from "./RenderBarChart";
import RenderLineChart from "./RenderLineChart";
import StudentOverview from "./StudentOverview";


import "../css/home.css"


const Home = () => {

  const [showChart, setShowChart] = useState(true)

  const toggleCharts = () => {
    setShowChart(prevState => !prevState)
  }

  return (
    <div className="home-layout">
      {/* <button onClick={toggleCharts}>Switch between charts</button> */}
      {showChart ? <RenderBarChart/> : <RenderLineChart/>}
    <StudentOverview/>
 
    </div>
  );
};

export default Home;
