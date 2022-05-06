import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import "../css/renderStudentCard.css"

const RenderStudentCard = ({ student }) => {

  const {
    toggleTest
  } = useContext(DataContext);

  return (
  
    <Link to={student.name} className="link-renderstudent">
      <div className="student-card" >
        <div className="student-image-container">
          <img
            className="student-image"
            alt="student"
            src={student.avatar}
          ></img>
        </div>
        <div className="student-info-container">
          <h3>{student.name}</h3>
          <p>Contact: {student.email}</p>
          <p>Woonplaats: {student.city}</p>
          <button onClick={toggleTest}>Test</button>
        </div>
      </div>
    </Link>
  );
};

export default RenderStudentCard;
