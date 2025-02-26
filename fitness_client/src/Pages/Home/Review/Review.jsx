import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

const Review = () => {
    return (
        <div className="mt-24 mb-24">

            <h1 className="text-3xl font-bold text-center mt-10 mb-4">Our Clients Review</h1>

            <ReviewCard></ReviewCard>
            <ReviewForm></ReviewForm>
        </div>
    );
};

export default Review;