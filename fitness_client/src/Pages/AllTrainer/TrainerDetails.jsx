import { useParams } from "react-router-dom";
import useAxiosPublic from './../../hooks/useAxiosPublic';
import { useQuery } from "@tanstack/react-query";

const TrainerDetails = () => {

    const axiosPublic = useAxiosPublic()

    const { id } = useParams()

    const { data: trainerDetails } = useQuery({
        queryKey: ['_id'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/trainer/${id}`)
            return res.data
        }
    })

    return (
        <div className="my-20">
            <h1 className="text-4xl font-bold text-center">Details of {trainerDetails.name}</h1>
            <div className="w-80 border p-2 space-y-2 rounded-md">
                <figure>
                    <img
                        className="w-full rounded h-60"
                        src={trainerDetails.profileImage}
                        alt="Shoes" />
                </figure>
                <div className="">
                    <h2 className="card-title">{trainerDetails.name}</h2>
                    <h1 className="card-title">Skill : {trainerDetails.skill}</h1>
                    <h1 className="card-title">Age : {trainerDetails.age}</h1>
                    <h1 className="card-title">Day: {trainerDetails.day}</h1>
                </div>

            </div>
        </div>
    );
};

export default TrainerDetails;