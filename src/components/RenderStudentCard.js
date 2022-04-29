import { Link } from "react-router-dom";

const RenderStudentCard = ({ student }) => {

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
          <button>Toon review</button>
        </div>
      </div>
    </Link>
  );
};

export default RenderStudentCard;
