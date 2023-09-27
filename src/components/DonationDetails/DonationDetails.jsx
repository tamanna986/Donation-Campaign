import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { SavedDonations } from "../../assets/Utility/donations";


const DonationDetails = () => {

    const donations = useLoaderData();
    const { id } = useParams();
    const idInteger = parseInt(id);
    const donation = donations.find(donation => donation.id === idInteger);

    // for backgrounf image
    const backgroundImg = {
        backgroundImage: `url(${(donation.picture)}) `,

    }

    // for button background color
    const buttonBg = {
        backgroundColor: donation.text_color,
    };

    const toastify = () => {
        SavedDonations(idInteger);
        toast("You have successfully donated! Thank you.");
    }
 
    return (
        <div className="mt-24 w-[380px] md:w-[670px] lg:w-[1100px] mx-auto" >
            {

                <div>
                    <div className="hero min-h-screen mx-auto w-[370px]  mb-20  md:w-[670px] lg:w-[1100px] " style={backgroundImg}>
                        <div className=" md:w-[670px] lg:w-[1100px] h-[30px] p-10 hero-overlay bg-opacity-60 mt-[560px] flex items-center">

                        </div>


                    </div>
                    <div className=" absolute -bottom-[485px] left-10 md:-bottom-[490px] md:left-16 lg:-bottom-[453px] lg:left-48">
                        <button onClick={toastify} className="btn btn-primary border-none normal-case text-white " style={buttonBg}>Donate ${donation.price}</button>
                        </div>

                    <div className="mb-20 mx-2 md:mx-0 w-[370px] md:w-full">
                        <h2 className="text-2xl font-semibold">{donation.title}</h2>
                        <p>{donation.description}</p>
                    </div>
                </div>
            }
            <ToastContainer />
        </div>
    );
};

export default DonationDetails;