import { Link } from "react-router-dom";
import "../../css/renderStudentCard.css";

const RenderStudentCard = ({ student }) => {
  return (
    <Link to={`/${student.name}`} className="studentcard-link">
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
