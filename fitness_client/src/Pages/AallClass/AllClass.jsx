import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const AllClass = () => {


    const axiosSecure = useAxiosSecure()


    const { data: packages = [] } = useQuery({
        queryKey: ['_id'],
        queryFn: async () => {
            const res = await axiosSecure.get('/packages')
            return res.data
        }
    })


    return (
        <div className="my-20 w-11/12 mx-auto">
            <h1 className="text-4xl text-center pt-4 pb-10 font-bold">Our all Packages</h1>
            <div className="flex flex-col lg:flex-row gap-6">

                {
                    packages.map(packag =>
                        <div key={packag._Id} className="lg:w-1/3 border border-black">
                            <h1 className="text-center text-xl font-bold border border-black">{packag.packageName}</h1>
                            <h1 className="border border-black p-2">Access to gym facilities during regular operating hours.</h1>
                            <h1 className="border border-black p-2">Use of cardio and strength training equipment.</h1>
                            <h1 className="border border-black p-2">Access to locker rooms and showers.
                            </h1>
                            <div className="border border-black p-2 flex justify-between items-center">
                                <h1 className="font-bold">Price : {packag.price}</h1>
                                <Link to='/payment'>
                                    <button className="btn btn-primary rounded">Join now</button></Link>
                            </div>
                        </div>)
                }



            </div>
        </div>
    );
};

export default AllClass;