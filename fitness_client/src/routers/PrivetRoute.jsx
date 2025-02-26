import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../Shared/LoadingSpinner";


const PrivetRoute = ({ children }) => {

    const { user,loading} = useAuth()

    if (user) {
        return children
    }

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <Navigate to='/login'></Navigate>
    )
};

export default PrivetRoute;