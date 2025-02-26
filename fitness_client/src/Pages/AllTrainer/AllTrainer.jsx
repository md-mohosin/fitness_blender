import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const AllTrainer = () => {

    const axiosPublic = useAxiosPublic()

    const { data: trainers = [] } = useQuery({
        queryKey: ['_id'],
        queryFn: async () => {
            const res = await axiosPublic.get('/trainer')
            return res.data;
        }
    })


    return (
        <div className="mb-10">

            <div className="mt-20 mb-5">
                <h1 className="text-center text-4xl font-bold">Our all Trainers</h1>
            </div>

            <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-10">

                {
                    trainers.map(trainer => <div key={trainer._id} className="w-full border p-2 space-y-2 rounded-md hover:scale-105 duration-300">
                        <figure>
                            <img
                                className="w-full rounded h-60"
                                src={trainer.profileImage}
                                alt="Shoes" />
                        </figure>
                        <div className="">
                            <h2 className="card-title">{trainer.name}</h2>
                            <h1 className="card-title">Skill : {trainer.skill}</h1>
                            <h1 className="card-title">Age : {trainer.age}</h1>
                            <h1 className="card-title">Day: {trainer.day}</h1>
                        </div>

                        <div>
                            <Link to={`/trainerDetails/${trainer._id}`}>
                                <button className="w-full btn btn-outline">View Details</button>
                            </Link>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default AllTrainer;