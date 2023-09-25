import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const DonationCards = () => {
    const cards = useLoaderData();

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-2">

            {cards?.map(card => <Card card={card} key={card.id}></Card>)}



        </div>
    );
};

export default DonationCards;