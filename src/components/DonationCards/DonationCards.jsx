import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const DonationCards = () => {
    const cards = useLoaderData();

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-2 md:pt-24 lg:pt-0">

            {
                Array.isArray(cards) ? cards.map(card => <Card card={card} key={card.id}></Card>) : null}



        </div>
    );
};

export default DonationCards;