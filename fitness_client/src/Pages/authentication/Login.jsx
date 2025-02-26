import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import img from '../../assets/pexels-anush-1229356.jpg'
import Google from "./Google";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const Login = () => {

    const axiosPublic = useAxiosPublic()


    const { login } = useAuth()
    const navigate = useNavigate()

    const { register, handleSubmit, watch, formState: { errors }, } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        login(data.email, data.password)
            .then(result => {
                console.log(result.user);

                const user = { email: data.email }
                axiosPublic.post('/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }



    return (
        <div>
            <div>
                <h1 className='text-center font-bold flex items-center justify-center text-red-500'><FaArrowLeft></FaArrowLeft><Link to='/'>Back to home</Link></h1>
                <div className='flex justify-center items-center min-h-screen'>
                    <div className='flex w-9/12 mx-auto flex-col lg:flex-row'>

                        {/* IMAGE SIDE */}
                        <div className='lg:w-1/2'>
                            <img className='h-full' src={img} alt="" />

                        </div>



                        {/* FORM SIDE */}
                        <div className='lg:w-1/2'>
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)} className="border p-2">

                                    {/* EMAIL */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input
                                            {...register('email')}
                                            type="email"
                                            placeholder="Type Your Email"
                                            className="input input-bordered rounded-none" required />
                                    </div>


                                    {/* PASSWORD */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input
                                            {...register('password')}
                                            type="password"
                                            placeholder="Type Your Password"
                                            className="input input-bordered rounded-none" required />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary rounded-none">Login</button>
                                    </div>
                                </form>
                                <div className='flex justify-center py-3'>
                                    <Google></Google>
                                </div>
                                <h1 className='font-semibold'>Al ready have an account? <Link to='/signUp' className='text-red-500 font-bold'>Sign Up</Link></h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;