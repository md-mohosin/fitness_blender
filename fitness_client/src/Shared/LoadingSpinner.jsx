import { Vortex } from "react-loader-spinner";

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <Vortex
                visible={true}
                height="80"
                width="80"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
        </div>
    );
};

export default LoadingSpinner;