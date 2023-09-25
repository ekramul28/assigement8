import { useLoaderData } from "react-router-dom";
import { getItemOfLocalStor } from "../../utility/LocalStroage";
import { useEffect, useState } from "react";
import Donar from "../../components/donar/Donar";

const Donation = () => {
    const [donation, setDonation] = useState({});
    const [isClick, setIsClick] = useState(4);
    console.log(isClick)
    const allDonation = useLoaderData();
    useEffect(() => {
        const locId = getItemOfLocalStor();
        if (allDonation.length > 0) {
            const Donation = allDonation.filter(donation => locId.includes(donation.id))
            setDonation(Donation)
        }
    }, [allDonation])

    return (
        <div >
            <div className="grid lg:grid-cols-2 gap-3">
                {
                    Array.isArray(donation) ? donation.slice(0, isClick).map(donar => <Donar key={donar.id} donar={donar}></Donar>) : null
                }
            </div>
            <div className="flex justify-center mt-5 ">
                <div className={donation.length <= isClick && "hidden"}>
                    <button onClick={() => setIsClick(donation.length)} className='text-white btn bg-[#009444]'>See All</button>

                </div>

            </div>
        </div>
    );
};

export default Donation;