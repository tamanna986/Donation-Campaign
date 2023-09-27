import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../../assets/Utility/donations";
import Donated from "../Donated/Donated";


const Donation = () => {
    const donations = useLoaderData();
    const [gotDonations, setGotDonations] = useState([])
    const [donationDataLength, setDonationDataLength] = useState(4);

    useEffect(() => {
        const storedDonations = getStoredDonations()

        const recievedDonations = [];
        for (const id of storedDonations) {
            
            const donation = donations.find(donation => donation.id === id);
            console.log(donations)
            if (donation) {
                recievedDonations.push(donation)
            }
        }
        setGotDonations(recievedDonations)

    }, [donations])
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-20  mx-20" >

                {
                    gotDonations.slice(0, donationDataLength).map(donated => <Donated donated={donated}
                        key={donated.id}

                    ></Donated>)
                }



            </div>


            <div className="mt-10 mb-20 w-32  mx-auto">
                {
                    gotDonations.length>4 && <div className={donationDataLength === gotDonations.length ? 'hidden' : ''}>
                    <button onClick={() => setDonationDataLength(gotDonations.length)} className="btn bg-green-800 text-white ">See All</button>
                </div>
                }
            </div>
        </div>
    );
};

export default Donation;