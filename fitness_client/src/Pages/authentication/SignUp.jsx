import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/pexels-anush-1229356.jpg'
import { FaArrowLeft } from 'react-icons/fa';
import Google from './Google';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const SignUp = () => {

    const axiosPublic = useAxiosPublic()

    const { signUp, profileUpdate } = useAuth()
    const navigate = useNavigate()


    const { register, handleSubmit, watch, formState: { errors }, } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        signUp(data.email, data.password)
            .then(result => {
                console.log(result.user);
                profileUpdate(data.name, data.photo)

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });


                const userData = {
                    name: data.name,
                    email: data.email,
                    profileImage: data.photo,
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

                                {/* NAME */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        {...register('name')}
                                        type="text"
                                        placeholder="Type Your Name"
                                        className="input input-bordered rounded-none" required />
                                </div>


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


                                {/* PHOTO */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input
                                        {...register('photo')}
                                        type="url"
                                        placeholder="Photo URL"
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
                                        placeholder="password"
                                        className="input input-bordered rounded-none" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary rounded-none">Login</button>
                                </div>
                            </form>


                            {/* GOOGLE */}
                            <div className='flex justify-center'>
                                <Google></Google>
                            </div>
                            <h1 className='font-semibold'>Al ready have an account? <Link to='/login' className='text-red-500 font-bold'>Login</Link></h1>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;