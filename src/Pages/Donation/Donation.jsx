import { useLoaderData } from "react-router-dom";
import { getItemOfLocalStor } from "../../utility/LocalStroage";
import { useEffect, useState } from "react";
import Donar from "../../components/donar/Donar";

const Donation = () => {
    const [donation, setDonation] = useState({})
    console.log(donation)
    const allDonation = useLoaderData();
    useEffect(() => {

        const locId = getItemOfLocalStor();
        if (allDonation.length > 0) {
            const Donation = allDonation.filter(donation => locId.includes(donation.id))
            setDonation(Donation)
        }
    }, [allDonation])


    return (
        <div className="grid lg:grid-cols-2 gap-3">
            {
                donation?.map(donar => <Donar key={donar.id} donar={donar}></Donar>)
            }
        </div>
    );
};

export default Donation;