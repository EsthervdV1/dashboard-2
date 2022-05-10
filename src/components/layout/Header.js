import { Link } from "react-router-dom";
import "../../css/header.css"

const Header = () => {
    return ( 
        <div className="header-container">
            <Link to="/" className="header-h1">
            <h1>Student Dashboard</h1>
            </Link>
        </div>
     );
}
 
export default Header; 