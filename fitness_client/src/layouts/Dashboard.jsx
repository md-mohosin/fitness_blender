import { TbMenu3 } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useRole from "../hooks/useRole";
import AdminSideNav from "../Shared/AdminSideNav";

const Dashboard = () => {

    const [role] = useRole()
    console.log(role)

    return (
        <div className="flex gap-4">
            <div className="drawer lg:drawer-open w-auto lg:w-60 z-40">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn bg-black drawer-button lg:hidden">
                        <TbMenu3 color="white" size={30}></TbMenu3>
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu space-y-2 bg-[#954535] min-h-full w-60 p-2 text-white">
                        {/* Sidebar content here */}

                        <div>

                            {role == 'admin' && <AdminSideNav></AdminSideNav>}
                        </div>



                        <div className="divider"></div>

                        <div>
                            <ul className="space-y-2 bg-base-200 text-base-content min-h-full w-60" ></ul>
                            <NavLink to='/'><li className="btn btn-ghost">Home</li></NavLink>
                        </div>

                    </ul>
                </div>


            </div>
            <div className="w-full">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;