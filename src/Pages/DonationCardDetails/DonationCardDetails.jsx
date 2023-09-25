import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const DonationCardDetails = () => {
    const [detail, setDetail] = useState();
    const Details = useLoaderData();
    const { id } = useParams();
    const { img, description, background_color, text_color, category, details_of, Donate } = detail || {}
    useEffect(() => {
        const findDetails = Details?.find(detail => detail.id == id);
        setDetail(findDetails)
        console.log(findDetails)
    }, [id, Details])
    console.log(detail)
    return (
        <div>
            <div>
                <img className="w-full" src={img} alt="" />
                <div className="h-32 bg-[#0B0B0B80]  flex items-center ">
                    <Link to=""><button className="btn border-none text-white ml-7 " style={{ backgroundColor: text_color }}>{Donate}</button>
                    </Link>
                </div>
            </div>
            <p className="text-5xl font-bold">{description}</p>
            <p className="mt-2">{details_of}</p>
        </div>

    );
};

export default DonationCardDetails;