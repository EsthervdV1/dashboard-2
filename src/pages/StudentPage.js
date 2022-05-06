import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

import "../css/studentpage.css";

const StudentPage = () => {
  const {studentName} = useParams();
 
  let data = useContext(DataContext);
  data = data.data;

  const filterOnStudentName = data.filter((item) => {
    return item.name === studentName;
  });
 
  return (
    <div className="studentpage-container">
      <h1 className="h1-studentpage">{studentName}</h1>
      <table className="table">
        <thead>
          <tr className="tr-table">
            <th>Vak</th>
            <th className="th-table">Moelijkheid</th>
            <th className="th-table">Plezierig</th>
          </tr>
        </thead>
        <tbody>
          {filterOnStudentName.map((item, key) => (
            <tr key={key}>
              <td>{item.course}</td>
              <td className="td-table">{item.difficultyRating}</td>
              <td className="td-table">{item.funRating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentPage;
