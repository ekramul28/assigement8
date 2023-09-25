import Banner from "../../components/Banner/Banner";
import DonationCards from "../../components/DonationCards/DonationCards";
const Home = () => {
    return (
        <div >
            <div className="bg-[] bg-cover bg-center bg-no-repeat bg-opacity-50  ">
                <Banner></Banner>
            </div>
            <DonationCards></DonationCards>
        </div>

    );
};

export default Home;