const RenderStudent = ({ student }) => {
  return (
    <div className="student-card" >
        <div className="student-image-container">
        <img className="student-image" alt="student" src={student.avatar}></img>
        </div>
        <div className="student-info-container">
        <h3>{student.name}</h3>
        <p>Contact: {student.email}</p>
        <p>Woonplaats: {student.city}</p>
        <button>Toon review</button>
        </div>
    </div>
  );
};

export default RenderStudent;
