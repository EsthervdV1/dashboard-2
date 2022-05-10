import { Link } from "react-router-dom";
import { useState } from "react";
import "../../css/renderStudentCard.css"

const RenderStudentCard = ({ student }) => {

  const [studentData, setStudentData] = useState(false)
  console.log(studentData)

  const showStudentData = () => {
    setStudentData((prevState)=> !prevState)
  }
  
  return (
    <Link 
      to={`/${student.name}`} 
      className="studentcard-link"
      onClick={showStudentData}
      >
      <div className="studentcard-container">
        <div className="studentcard-image">
          <img
            className="studentcard-avatar"
            alt="student"
            src={student.avatar}
          ></img>
        </div>
        <div className="studentcard-info">
          <h3>{student.name}</h3>
          <p>{student.email}</p>
          <p>Woonplaats: {student.city}</p>
        </div>
      </div>
      </Link>
  );
};

export default RenderStudentCard;
