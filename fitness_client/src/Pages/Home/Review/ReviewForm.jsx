import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from './../../../hooks/useAuth';
import Swal from "sweetalert2";


const ReviewForm = () => {

    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()

    const { register, handleSubmit, watch, formState: { errors }, } = useForm()
    const onSubmit = (data) => {
        console.log(data)

        const reviewData = {
            name: user.displayName,
            photo: user.photoURL,
            review: data.review
        }

        axiosPublic.post('/review', reviewData)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        });

    }

    return (
        <div className="lg:w-6/12 md:w-7/12 mx-auto">
            <div className="card bg-base-100 w-full">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="card-body">

                    <textarea
                        {...register('review')}
                        placeholder="Type Review"
                        className="textarea h-36 textarea-bordered textarea-lg w-full"
                        required
                        ></textarea>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Reiview</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewForm;