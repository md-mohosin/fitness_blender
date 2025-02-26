import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const NewsLetter = () => {

    const axiosPublic = useAxiosPublic()

    const { register, handleSubmit, reset, watch, formState: { errors }, } = useForm()
    const onSubmit = (data) => {
        console.log(data)

        const newsLetterData = {
            name: data.name,
            email: data.email
        }

        axiosPublic.post('/newsletter-subscribe', newsLetterData)
        reset()
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });

    }

    return (
        <div className="p-4 lg:w-6/12 mx-auto mt-10 mb-10">
            <h1 className="text-3xl font-semibold text-center pb-2">Subscribe Now</h1>
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
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewsLetter;