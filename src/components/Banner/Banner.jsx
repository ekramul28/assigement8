import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Banner = () => {
    const allData = useLoaderData()
    const [category, setCategory] = useState();
    const handelClick = () => {
        const input = document.getElementById("inputFi");
        const inputValue = input.value;

        const array = [];
        array.filter(category => {
            console.log(category, inputValue)
            if (category == inputValue) {
                console.log("ok")
            }
        })

        allData.map(data => {

            array.push(data.category)

        })

    }
    return (
        <div className=" flex justify-center items-center lg:h-[300px] ">
            <div>
                <h1 className="font-bold text-4xl text-center">I Grow By Helping People In Need</h1>
                <div className="relative mt-10">
                    <input id="inputFi" type="text" placeholder="Search here...." className="input input-bordered w-full pr-16" />
                    <button onClick={handelClick} className="btn bg-[#FF444A] text-white absolute top-0 right-0 rounded-l-none lowercase  ">Search</button>
                </div>
            </div>

        </div>
    );
};

export default Banner;