import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Layout from "../components/layout/Layout"
import ChartsOverview from "../components/charts/ChartsOverview"
import { makeAverageArray } from "../functions/makeAverageArray";

const HomePage = () => {

  const data = useContext(DataContext);

  const averageData = makeAverageArray(data);

  return (
    <Layout>
      <div>
        <ChartsOverview averageData={averageData}/> 
      </div>
    </Layout>
  );
};

export default HomePage;
