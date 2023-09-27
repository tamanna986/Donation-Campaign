import { useEffect, useState } from "react";
import { getStoredDonations } from "../../assets/Utility/donations";
import PieChartWithCustomizedLabel from '../PieChartWithCustomizedLabel/PieChartWithCustomizedLabel'

const Statistics = () => {
    const [donations, setDonations] = useState([]);
    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setDonations(data))

    }, [])

    const totalDonation = parseFloat(donations.length);
    // getting localstorage data
    const storedDonations = getStoredDonations();
    // console.log(storedDonations.length)
    const yourDonations = (parseFloat(storedDonations.length));
    const yourDonation = ((yourDonations / totalDonation) * 100).toFixed(1);
    const reaminingDonation = (100 - yourDonation).toFixed(1);





    return (
        <div>
            <PieChartWithCustomizedLabel
                data={[
                    { name: "Your Donations", value: parseFloat(yourDonation) },
                    { name: "Remaining Donations", value: parseFloat(reaminingDonation) },
                ]}
            />
            <div className="md:flex items-center justify-start gap-6 md:gap-8 mx-auto w-[350px] md:w-[620px] px-8 mb-20">
                <div className="flex items-center justify-start gap-3">
                    <div><h2>Your Donation</h2></div>
                    <div className=" bg-teal-400 w-32 h-2 rounded-md"></div>
                </div>
                <div className="flex items-center justify-start gap-2">
                    <div><h2>Total Donation</h2></div>
                    <div className=" bg-orange-400 w-32 h-2 rounded-md"></div>
                </div>

            </div>
        </div>
    );
};

export default Statistics;