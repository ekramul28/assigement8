
const Donar = ({ donar }) => {
    const { img1, description, text_color, details_of, Donate, category, background_color } = donar || {}
    return (
        <div>
            <div className="card card-side bg-base-100 ">
                <figure><img className="h-full" src={img1} alt="Movie" /></figure>
                <div className="card-body p-4" style={{ backgroundColor: background_color }} >
                    <h2 className="w-20  text-center rounded font-medium text-sm mt-2 " style={{ color: text_color, backgroundColor: background_color }}>{category}</h2>
                    <h2 className="text-2xl font-semibold">{description}</h2>
                    <p className="text-lg font-medium" style={{ color: text_color }}>{Donate}</p>
                    <div className="card-actions justify-start">
                        <button className="btn border-none text-white ml-7 " style={{ backgroundColor: text_color }}>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donar;