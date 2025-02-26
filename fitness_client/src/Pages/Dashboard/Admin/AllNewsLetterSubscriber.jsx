import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const AllNewsLetterSubscriber = () => {

    const axiosPublic = useAxiosPublic()

    const { data: newses = [] } = useQuery({
        queryKey: ['_id'],
        queryFn: async () => {
            const res = await axiosPublic.get('/newsletter-subscribe')
            return res.data
        }
    })

    return (
        <div className="lg:w-10/12 lg:mx-auto">
            <div className="">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            newses.map((news, index) => <tr key={news._id}>
                                <th>{index + 1}</th>
                                <td>{news.name}</td>
                                <td>{news.email}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllNewsLetterSubscriber;