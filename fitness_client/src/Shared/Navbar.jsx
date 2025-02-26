import { useState } from "react";
import { FaUserTie } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/fitness-logo-removebg-preview.png'
import useAuth from "../hooks/useAuth";
import { MdLogout } from "react-icons/md";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import Swal from "sweetalert2";

const Navbar = () => {

    const navlinks = <>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/allTrainer'><li>All Trainer</li></NavLink>
        <NavLink><li>All Classes</li></NavLink>
    </>


    const [isOpen, setIsOpen] = useState(false)

    const { user, logOut } = useAuth()


    const handleLogOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to LogOut",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .catch(error => {
                        console.log(error);
                    })
            }
        });
    }


    return (
        <div className="lg:px-20 navbar text-white bg-black bg-opacity-25 fixed top-0 z-30">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold text-white text-xl space-y-1">
                        {navlinks}
                    </ul>

                </div>
                <div className="w-10 lg:w-20 h-10 lg:h-10 flex items-center">
                    <img src={logo} alt="" />
                    <h1 className="btn btn-ghost lg:text-xl">FitnessBlender</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal flex gap-4 text-xl font-bold">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="relative">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {
                            user ?
                                <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="" />
                                :
                                <FaUserTie className="bg-black p-1 rounded-full" size={45} color="white"></FaUserTie>
                        }
                    </button>

                    {isOpen && (
                        <div className="absolute z-50 left-auto right-0 grid bg-black
                             text-white font-semibold p-2 rounded-lg space-y-1">
                            {
                                user ?
                                    <>
                                        <Link
                                            to='/userProflie'
                                            className="flex items-center gap-1"><FaUserTie></FaUserTie> Your Profile</Link>

                                        <div className="divider"></div>

                                        <Link
                                        to='/dashboard'
                                            className="flex items-center gap-1"><TbLayoutDashboardFilled></TbLayoutDashboardFilled>Dashboard
                                        </Link>

                                        <div className="divider w-28"></div>

                                        <Link
                                            className="flex items-center gap-1 text-red-500" onClick={handleLogOut}><MdLogout></MdLogout>LogOut
                                        </Link>
                                    </>
                                    :
                                    <Link to='/login'>Login</Link>
                            }
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Navbar;