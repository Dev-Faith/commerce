import Home from "../pages/home";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({children}) => {
    return ( 
        <div class="container">
            <Navbar />
            <Home/>
            {children}
            <Footer/>
        </div>
     );
}
 
export default Layout;