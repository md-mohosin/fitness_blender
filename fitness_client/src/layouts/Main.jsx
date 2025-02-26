import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../Shared/LoadingSpinner";

const Main = () => {

    const { loading } = useAuth()
    if (loading) {
      return  <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;