
import RenderStudentCart from "./RenderStudentCard";
import studentData from "../../data/student-data.json";
import "../../css/studentoverview.css"

const StudentOverview = () => {
    
  return (
      <div className="studentoverview-container">
        {studentData.map((student) => (
          <RenderStudentCart key={student.id} student={student}/>
        ))}
      </div>

      );
};

export default StudentOverview;
