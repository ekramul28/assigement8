import Banner from "../../components/Banner/Banner";
import DonationCards from "../../components/DonationCards/DonationCards";
const Home = () => {
    return (
        <div className="relative " >
            <div className="-z-40 absolute   -top-64 opacity-25 md:h-[600px] w-full bg-[url('https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR19lehwfaS7TKUn_HttXItcO-6PcH_tAlLDHvE7IJqTd_DlsMKAKjjZEpA')]">
            </div>
            <div className="mt-20  top-6 right-4 ">
                <Banner></Banner>

            </div>
            <div className="my-40">
                <DonationCards></DonationCards>

            </div>
        </div>

    );
};

export default Home;