import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

const ReviewCard = () => {

    const axioPublic = useAxiosPublic()
    const { data: reviews = [] } = useQuery({
        queryKey: ['_id'],
        queryFn: async () => {
            const res = await axioPublic.get('/review')
            return res.data
        }
    })

    return (
        <div>

            <Swiper
                effect={'flip'}
                grabCursor={true}
                pagination={true}
                navigation={true}
                modules={[EffectFlip, Pagination, Navigation]}
                className="mySwiper flex justify-center items-center lg:w-[400px] h-auto md:w-[400px]"
            >

                {
                    reviews.map(review => <SwiperSlide
                    className=""
                    key={review._id}>
                        <div className="bg-base-100 p-4  h-auto border shadow-md">
                            <figure>
                                <img
                                    className="h-24 w-24 rounded-full justify-self-center"
                                    src={review.photo} />
                            </figure>
                            <div className="card-body pt-6">
                                <h2 className="card-title">{review.name}</h2>
                                <p>{review.review}</p>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default ReviewCard;