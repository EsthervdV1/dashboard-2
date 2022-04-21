const Student = ({ student }) => {
  return (
    <div className="student-card" >
        <img alt="student" href={student.avatar}></img>
        <h3>{student.name}</h3>
        <p>Contact: {student.email}</p>
        <p>Woonplaats: {student.city}</p>
        <button>Toon review</button>
    </div>
  );
};

export default Student;
