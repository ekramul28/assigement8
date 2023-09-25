import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";

const MainLayout = () => {
    return (
        <div className="container mx-auto z-50 px-4 ">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;