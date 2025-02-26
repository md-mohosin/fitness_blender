import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Google = () => {

    const axiosPublic = useAxiosPublic()

    const { googleLogin } = useAuth()
    const navigate = useNavigate()

    const handleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);

                const userData = {
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.displayURL,
                    creationTime: result.user.metadata.creationTime
                }
                axiosPublic.post('/users', userData)


                navigate('/')

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div>
                <button onClick={handleLogin} className="border-2 rounded-full p-1"><FcGoogle size={40}></FcGoogle></button>
            </div>
        </div>
    );
};

export default Google;