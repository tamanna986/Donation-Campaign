const DonationCard = ({donation}) => {
    const {picture, title, category, category_bg , text_color , card_bg} = donation;
    // for category background color
    const categoryBg = {
        backgroundColor: category_bg,
        padding: 6,
        width: 90,
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
<div className="card h-[290px]  bg-base-100 shadow-xl mt-10" style={cardBg}>
  <figure><img className="w-[295px] h-48" src={picture}  /></figure>
  <div className=" p-4 space-y-3 ">
    <h2 className="text-center rounded-md" style={categoryBg}>{category}</h2>
    <p className="text-xl font-bold" style={categoryText}>{title}</p>
  </div>
</div>
    );
};

export default DonationCard;