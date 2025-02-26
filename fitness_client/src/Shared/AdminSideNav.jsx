import { NavLink } from "react-router-dom";

const AdminSideNav = () => {
    return (
        <div>
            <ul className="grid">
            <NavLink to='/dashboard/allNewsLetterSubscriber'><li className="btn btn-ghost">All Newsletter Subscriber</li></NavLink>
                <NavLink to='/dashboard/allTrainers'><li className="btn btn-ghost">All Trainers</li></NavLink>
            </ul>
        </div>
    );
};

export default AdminSideNav;