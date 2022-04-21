import Student from "./Student";
import studentData from "../data/student-data.json"

const StudentOverview = () => {
    console.log(studentData)
  return (
      <div className="student-container">
        {studentData.map((student) => (
          <Student key={student.id} student={student}/>
        ))}
      </div>
      );
};

export default StudentOverview;
