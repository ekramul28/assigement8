
const Donar = ({ donar }) => {
    const { img, description, text_color, details_of, Donate, category, background_color } = donar || {}
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="w-full" src={img} alt="Movie" /></figure>
                <div className="card-body" style={{ backgroundColor: background_color }} >
                    <h2 className="card-title">{category}</h2>
                    <h2 className="text-2xl font-bold">{description}</h2>
                    <p>{Donate}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donar;