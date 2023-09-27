import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Donar = ({ donar }) => {
    const { id, img_1, description, text_color, Donate, category, background_color } = donar || {}

    return (
        <div>
            <div className="card card-side bg-base-100 rounded ">
                <figure><img className="h-full" src={img_1} alt="Movie" /></figure>
                <div className="card-body p-4" style={{ backgroundColor: background_color }} >
                    <h2 className="w-20  text-center rounded font-medium text-sm mt-2 " style={{ color: text_color, backgroundColor: background_color }}>{category}</h2>
                    <h2 className="text-2xl font-semibold">{description}</h2>
                    <p className="text-lg font-medium" style={{ color: text_color }}>{Donate}</p>
                    <div className="card-actions ">
                        <Link to={`/donationCardDetails/${id}`}>                        <button className="btn border-none text-white  " style={{ backgroundColor: text_color }}>View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
Donar.propTypes = {
    donar: PropTypes.object
}

export default Donar;