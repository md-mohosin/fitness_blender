import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllTrainersForAdmin = () => {

    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const { data: trainers = [], refetch } = useQuery({
        queryKey: ['_id'],
        queryFn: async () => {
            const res = await axiosPublic.get('/trainer')
            return res.data
        }
    })


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/trainer/${id}`)
                console.log(res.data);
                console.log(id);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                refetch()
            }
        });
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            trainers.map((trainer, index) => <tr key={trainer._id}>
                                <th>{index + 1}</th>
                                <td>{trainer.name}</td>
                                <td>{trainer.email}</td>
                                <td><FaTrash onClick={() => handleDelete(trainer._id)} cursor={'pointer'} color="red" size={30}></FaTrash></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllTrainersForAdmin;