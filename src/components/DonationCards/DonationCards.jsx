import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";

const DonationCards = () => {
    const [donations, setDonations] = useState([]);
    useEffect(() =>{
      fetch('donation.json')
      .then(res => res.json())
      .then(data => setDonations(data))

    } , [])

    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-16 mt-20 ">
            {
                donations.map(donation => 
                    <DonationCard 
                    key = {donation.id}
                    donation = {donation}></DonationCard>
                    )
            }
        </div>
    );
};

export default DonationCards;