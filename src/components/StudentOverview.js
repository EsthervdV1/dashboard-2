
import RenderStudent from "./RenderStudent";
import studentData from "../data/student-data.json"

const StudentOverview = () => {
    
  return (
      <div className="student-container">
        {studentData.map((student) => (
          <RenderStudent key={student.id} student={student}/>
        ))}
      </div>
    
      );
};

export default StudentOverview;
