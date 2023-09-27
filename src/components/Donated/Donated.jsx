import PropTypes from 'prop-types';
const Donated = ({ donated }) => {
    // for category background color
    const categoryBg = {
        backgroundColor: donated.category_bg,
        color: donated.text_color,
    };
    const button = {
        backgroundColor: donated.text_color

    };

    // for category text color
    const priceText = {
        color: donated.text_color
    };
    // for card background color
    const cardBg = {
        backgroundColor: donated.card_bg
    };

    return (

        <div className="card md:card-side bg-base-100 shadow-xl">
            <figure><img className="w-56 h-full" src={donated.picture} /></figure>
            <div className="card-body" style={cardBg}>
                <h3 className="px-4 py-1 w-28 text-center rounded-md " style={categoryBg}>{donated.category}</h3>
                <h2 className="card-title font-bold text-2xl">{donated.title}</h2>
                <p className="font-bold" style={priceText}>${donated.price}</p>
                <div className="card-actions ">
                    <button style={button} className="btn border-none text-white font-semibold">View Details</button>
                </div>
            </div>
        </div>


    );
};
Donated.propTypes = {
    donated: PropTypes.object.isRequired
}

export default Donated;