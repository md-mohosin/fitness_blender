import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaArrowLeft } from "react-icons/fa";
import useRole from "../../hooks/useRole";
import LoadingSpinner from './../../Shared/LoadingSpinner';


const UserProfile = () => {

    const { user, loading } = useAuth()
    const [role] = useRole()
    console.log(role);

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <Link to='/'><h1 className="pb-3 flex items-center text-xl font-bold"><FaArrowLeft></FaArrowLeft>Home</h1></Link>
            <div className="border bg-base-100 w-full md:w-[400px] lg:w-[400px] p-4">
                <figure>
                    <img
                        className="w-24 h-24 rounded-full flex justify-self-center"
                        src={user?.photoURL} alt="" />
                </figure>
                <div className="">
                    <h2 className="card-title">Name: {user?.displayName}</h2>
                    <h1 className="font-semibold">Email: {user?.email}</h1>
                    <h1 className="font-semibold">Role : {role }</h1>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;