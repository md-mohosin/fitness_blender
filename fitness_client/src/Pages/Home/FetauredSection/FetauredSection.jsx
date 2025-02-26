import bgImage from '../../../assets/about/6.jpg'

const FetauredSection = () => {
    return (
        <div className='mt-10'>
            <div style={{backgroundImage:`url(${bgImage})`}} className='bg-center bg-cover flex justify-center items-center w-full h-[600px] bg-fixed'>
                <div className='w-8/12 mx-auto bg-black bg-opacity-30 p-4 rounded space-y-4'>
                    <h1 className='uppercase text-xl md:text-3xl lg:text-5xl text-white font-bold text-center'>make your body beatuiful</h1>
                    <p className='text-white'>Going to the gym regularly is one of the best ways to maintain a healthy lifestyle. It not only helps in building strength and endurance but also improves mental well-being by reducing stress and anxiety. A consistent workout routine enhances cardiovascular health, boosts metabolism, and increases overall energy levels. Whether it's weightlifting, cardio exercises, or functional training, each workout</p>
                </div>
            </div>
        </div>
    );
};

export default FetauredSection;