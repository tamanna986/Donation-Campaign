import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SearchedCards = ({ donation }) => {
    const { id, picture, title, category, category_bg, text_color, card_bg } = donation;
    // for category background color
    const categoryBg = {
        backgroundColor: category_bg,
        color: text_color,
    };

    // for category text color
    const categoryText = {
        color: text_color
    };
    // for card background color
    const cardBg = {
        backgroundColor: card_bg
    };
    return (
        <div className="card h-[330px]  bg-base-100 shadow-xl mt-10" style={cardBg}>
            <Link to={`/DonationCard/${id}`}>
                <figure><img className="w-[355px] h-48" src={picture} /></figure>
                <div className=" p-4 space-y-3 ">
                    <h2 className="text-center rounded-md p-3 w-[95px]" style={categoryBg}>{category}</h2>
                    <p className="text-xl font-bold" style={categoryText}>{title}</p>
                </div>
            </Link>
        </div>
    );
};
SearchedCards.propTypes = {
    donation: PropTypes.object.isRequired
}

export default SearchedCards;