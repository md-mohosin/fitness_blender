import useAxiosSecure from "./useAxiosSecure";
import useAuth from './useAuth';
import { useQuery } from "@tanstack/react-query";

const useRole = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    console.log(user?.email);

    const { data: role } = useQuery({
        queryKey: ['role', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/user/role/${user?.email}`)
            return data.role
        }
    })

    return [role]
};

export default useRole;