
const Banner = () => {
    return (
        <div className=" flex justify-center items-center lg:h-[300px] ">
            <div>
                <h1 className="font-bold text-4xl text-center">I Grow By Helping People In Need</h1>
                <div className="relative mt-10">
                    <input type="text" placeholder="Search here...." className="input input-bordered w-full pr-16" />
                    <button className="btn bg-[#FF444A] text-white absolute top-0 right-0 rounded-l-none lowercase  ">Search</button>
                </div>
            </div>

        </div>
    );
};

export default Banner;