import { Outlet } from "react-router-dom";
import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";


const Mainlayout = () => {
    return (
        <div>
             <div className="container mx-auto">
                <Navbar></Navbar>
                <div className="min-h-[calc(100vh-150px)]">
                 <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;