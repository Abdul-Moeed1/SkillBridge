import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const Layout = () => {
    return (
        <>
            <div id="root">
                <Navbar />
                <div className="content">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    );
}