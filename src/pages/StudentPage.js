import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import ChartsOverview from "../components/charts/ChartsOverview";
import SingleStudent from "../components/students/SingleStudent";
import Layout from "../components/layout/Layout";

const StudentPage = () => {
  const { studentName } = useParams();

  let data = useContext(DataContext);

  const filterOnStudentName = data.filter((item) => {
    return item.name === studentName;
  });

  return (
    <Layout>
      <ChartsOverview studentData={filterOnStudentName}/>
      <SingleStudent
        studentName={studentName}
        filterOnStudentName={filterOnStudentName}
      />
    </Layout>
  );
};

export default StudentPage;
