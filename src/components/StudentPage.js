import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
//import RenderStudentDetails from "./RenderStudentDetails";

const StudentPage = () => {
    const {studentName} = useParams()
    let data = useContext(DataContext);
    data = data.data

    //console.log(data)
    
    const filterOnStudentName = data.filter(item => {
        return item.name === studentName
      })
      console.log(filterOnStudentName)
  
    
    return ( 
        <div>
            <h1>{studentName}</h1>
            <div>vakken</div>

        </div>
     );
}
 
export default StudentPage;