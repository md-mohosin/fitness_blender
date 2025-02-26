import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";


const BecomeTrainBTN = () => {
    return (
        <div className="lg:w-6/12 md:w-6/12 mx-auto border pb-10 py-10">
            <div className="w-full flex justify-center items-center flex-col space-y-2">
                <h1 className="text-xl font-semibold">If you want to Become a Trainer</h1>
                <h1 className="flex items-center gap-1 text-xl font-bold">Click it <FaArrowDown color="red"></FaArrowDown></h1>
                <Link className="flex justify-center items-center" to='/beATrainer'><button className="btn btn-secondary btn-outline text-xl">Become a Trainer</button></Link>
            </div>
        </div>
    );
};

export default BecomeTrainBTN;