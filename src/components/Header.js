import { Link } from "react-router-dom";
import "../css/header.css"

const Header = () => {
    return ( 
        <div className="header">
            <Link to="/" className="link-header">
            <h1>Student Dashboard</h1>
            </Link>
        </div>
     );
}
 
export default Header;