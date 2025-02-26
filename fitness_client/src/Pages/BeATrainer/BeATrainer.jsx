import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const BeATrainer = () => {

    const navigate = useNavigate()

    const axiosSecure = useAxiosSecure()

    const { register, handleSubmit, reset, watch, formState: { errors }, } = useForm()
    const onSubmit = (data) => {
        console.log(data)


        const trainerData = {
            name: data.name,
            email: data.email,
            profileImage: data.image,
            age: data.age,
            skill: data.skill,
            day: data.day,
            time: data.time

        }


        axiosSecure.post('/trainer', trainerData)
        reset()
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Are you a trainer now!",
            showConfirmButton: false,
            timer: 1500
          });


          navigate('/allTrainer')

    }



    return (
        <div className="p-4 lg:w-6/12 mx-auto mt-10 mb-10">
            <Link to='/'><h1 className="text-xl font-bold text-center pb-2 flex items-center"><FaArrowLeft></FaArrowLeft>Back to Home</h1></Link>
            <div className="bg-base-100 w-full border">

                <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                    {/* NAME */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            {...register('name')}
                            type="text"
                            placeholder="Name"
                            className="input input-bordered"
                            required />
                    </div>

                    {/* EMAIL */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...register('email')}
                            type="email"
                            placeholder="Email"
                            className="input input-bordered"
                            required />
                    </div>

                    {/* PROFILE IMAGE */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Profile image</span>
                        </label>
                        <input
                            {...register('image')}
                            type="text"
                            placeholder="Image URL"
                            className="input input-bordered"
                            required />
                    </div>


                    {/* AGE AND SKILL */}
                    <div className="flex gap-2">

                        {/* AGE */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Age</span>
                            </label>
                            <input
                                {...register('age')}
                                type="number"
                                min={1}
                                placeholder="Age"
                                className="input input-bordered"
                                required />
                        </div>

                        {/* SKILL */}
                        <div className="form-control w-full">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Select any category</span>
                                </div>
                                <select
                                    {...register('skill')}
                                    className="select select-bordered">
                                    <option disabled selected>Selct any Category</option>
                                    <option>Push ups</option>
                                    <option>Pull ups</option>
                                    <option>Yoga Poses</option>
                                </select>
                            </label>
                        </div>
                    </div>



                    {/* AVAILABLE DAYS AND TIME */}
                    <div className="flex gap-2">

                        {/* DAYS IN A week */}
                        <div className="form-control w-full">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Select any Day</span>
                                </div>
                                <select
                                    {...register('day')}
                                    className="select select-bordered">
                                    <option disabled selected>Selct any Day</option>
                                    <option>Sunday</option>
                                    <option>Monday</option>
                                    <option>Thuesday</option>
                                    <option>Wednesday</option>
                                    <option>Thrusday</option>
                                    <option>Friday</option>
                                </select>
                            </label>
                        </div>

                        {/* TIME */}
                        <div className="form-control w-full">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Select any Time</span>
                                </div>
                                <select
                                    {...register('time')}
                                    className="select select-bordered">
                                    <option disabled selected>Selct any Time</option>
                                    <option>10.00 am to 1.00 pm</option>
                                    <option>2.00 am to 4.00 am</option>
                                    <option>6.00 am to 11.00am</option>
                                </select>
                            </label>
                        </div>
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn btn-primary text-xl">Apply</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BeATrainer;