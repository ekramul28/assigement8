import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { setItemOfLocalStor } from "../../utility/LocalStroage";
const DonationCardDetails = () => {
    const [detail, setDetail] = useState();
    const Details = useLoaderData();
    const { id } = useParams();

    const { img, description, text_color, details_of, Donate } = detail || {}

    const handelDonateBtn = () => {
        Swal.fire({
            icon: 'success',
            title: 'Donate has been saved',
            showConfirmButton: false,
            timer: 1500
        });
        setItemOfLocalStor(detail.id);

    }

    useEffect(() => {
        const findDetails = Details?.find(detail => detail.id == id);
        setDetail(findDetails)
    }, [id, Details])
    return (
        <div>
            <div>
                <img className="w-full" src={img} alt="" />
                <div className="h-32 bg-[#0B0B0B80]  flex items-center ">
                    <button onClick={handelDonateBtn} className="btn border-none text-white ml-7 " style={{ backgroundColor: text_color }}>Donate {Donate}</button>
                </div>
            </div>
            <p className="text-5xl font-bold">{description}</p>
            <p className="mt-2">{details_of}</p>
        </div>

    );
};

export default DonationCardDetails;