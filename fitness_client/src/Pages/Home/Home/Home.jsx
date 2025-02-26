import { Helmet } from "react-helmet";
import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";
import BecomeTrainBTN from "../BecomeTrainerBTN/BecomeTrainBTN";
import NewsLetter from "../NewsLetter/NewsLetter";
import Review from "../Review/Review";
import FetauredSection from "../FetauredSection/FetauredSection";

const Home = () => {


    return (
        <div>
            <Helmet>
                <title>Fitness || Home</title>
            </Helmet>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <Review></Review>
            <BecomeTrainBTN></BecomeTrainBTN>
            <FetauredSection></FetauredSection>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;