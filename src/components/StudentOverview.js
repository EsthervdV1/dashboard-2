
import RenderStudentCart from "./RenderStudentCard";
import studentData from "../data/student-data.json"

const StudentOverview = () => {
    
  return (
      <div className="student-container">
        {studentData.map((student) => (
          <RenderStudentCart key={student.id} student={student}/>
        ))}
      </div>
    
      );
};

export default StudentOverview;
