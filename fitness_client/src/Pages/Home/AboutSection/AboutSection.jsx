import img1 from '../../../assets/about/DSC05170-min.jpg'
import img2 from '../../../assets/about/ezdAkxbkYtFdFHpycSpCgL-415-80.jpg'
import img3 from '../../../assets/about/sport-fitness-box1.jpg'
import img4 from '../../../assets/about/images.jpeg'
const AboutSection = () => {
    return (
        <div className='w-11/12 mx-auto mt-24 mb-24'>

            <h1 className='text-3xl font-bold text-center pb-4'>About Our Company</h1>

            <div>

                {/* FIRST ROW */}
                <div className='flex flex-col lg:flex-row md:grid md:grid-cols-2 justify-between'>
                    <div className='flex flex-col lg:flex-row items-center gap-6'>
                        <div className='lg:w-1/2'>
                            <img className='w-full h-56' src={img1} alt="" />
                        </div>
                        <div className='lg:w-1/2 space-y-4'>
                            <h1 className='font-semibold text-xl'>Really Good Workout, Can Feel it Working</h1>
                            <p className='space-y-2'>Fitness is not just about physical appearance; it is the foundation of good health and overall well-being. Regular exercise.</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center gap-8'>
                        <div className='lg:w-1/2'>
                            <img className='w-full h-56' src={img2} alt="" />
                        </div>
                        <div className='lg:w-1/2 space-y-4'>
                            <h1 className='text-xl font-semibold'>Improves Physical Health and mental Well</h1>
                            <p className=''>Fitness is not just about physical appearance; it is the foundation of good health and overall well-being. Regular exercise.</p>
                        </div>
                    </div>
                </div>



                {/* SECOND ROW */}
                <div className='flex flex-col  lg:flex-row justify-between gap-8 mt-8 md:grid md:grid-cols-2 '>
                    <div className='flex flex-col-reverse lg:flex-row items-center gap-8'>
                        <div className='lg:w-1/2 space-y-2'>
                            <h1 className='font-semibold text-xl'>Really Good Workout, Can Feel it Working</h1>
                            <p>Fitness is not just about physical appearance; it is the foundation of good health and overall well-being. Regular exercise.</p>
                        </div>
                        <div className='lg:w-1/2'>
                            <img className='w-full h-56' src={img3} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col-reverse lg:flex-row items-center gap-8'>
                        <div className='lg:w-1/2 space-y-3'>
                            <h1 className='text-xl font-semibold'>Improves Physical Health and mental Well</h1>
                            <p>Fitness is not just about physical appearance; it is the foundation of good health and overall well-being. Regular exercise.</p>
                        </div>
                        <div className='lg:w-1/2'>
                            <img className='w-full h-56' src={img4} alt="" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AboutSection;