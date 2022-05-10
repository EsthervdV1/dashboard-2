
import Header from "./Header";
import Footer from "./Footer";
import StudentOverview from "../students/StudentOverview";

const Layout = ({children}) => {
    return (  
        <>
        <Header/>
        <StudentOverview/>
            {children}
        <Footer/>
        </>
    );
}
 
export default Layout;