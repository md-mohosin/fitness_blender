import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/banner/Bodybuilder-Working-.webp'
import img2 from '../../../assets/banner/man-2604149_1280.jpg'
import img3 from '../../../assets/banner/1ba389706684f84900f7cb4665508dab.jpg'

const Banner = () => {
    return (
        <div className='relative'>
            
            <Carousel autoPlay={true}>
                <div>
                    <img className='max-h-[500px]' src={img1} />
                </div>
                <div>
                    <img className='max-h-[500px]' src={img2} />
                </div>
                <div>
                    <img className='max-h-[500px]' src={img3} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;