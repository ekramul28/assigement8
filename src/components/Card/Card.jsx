import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Card = ({ card }) => {
    const { id, img, description, background_color, text_color, category } = card || {};
    return (
        <Link to={`/donationCardDetails/${id}`}>
            <div >
                <div className="card  bg-base-100 " style={{ backgroundColor: background_color }}>
                    <figure><img src={img} alt="img" /></figure>
                    <div className="card-body p-2">
                        <p className=" w-20  text-center rounded font-medium text-sm mt-2 " style={{ color: text_color, backgroundColor: background_color }}>{category}</p>
                        <p className="text-lg font-semibold" style={{ color: text_color }}>{description}</p>

                    </div>
                </div>
            </div >
        </Link>
    );

};
Card.propTypes = {
    card: PropTypes.object
}

export default Card;