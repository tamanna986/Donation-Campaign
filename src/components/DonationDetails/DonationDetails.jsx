import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { SavedDonations } from "../../assets/Utility/donations";


const DonationDetails = () => {

    const donations = useLoaderData();
    const { id } = useParams();
    const idInteger = parseInt(id);
    const donation = donations.find(donation => donation.id === idInteger);
     // for button background color
     const buttonBg = {
        backgroundColor: donation.text_color,
      };

      const toastify = () =>{
        SavedDonations(idInteger);
        toast("You have successfully donated! Thank you.");
      } 
    
    return (
        <div className="mt-24 w-[400px] md:w-[670px] lg:w-[1100px] mx-auto" >
            {

                <div>
                    <div className="hero  mb-20 w-[400px]  md:w-[670px] lg:w-[1100px] " style={{height:640,
                    weight: 390 ,
                     backgroundImage: `url(${(donation.picture)})` }}>
                        <div className="w-[400px] md:w-[670px] lg:w-[1100px] h-[30px] p-10 hero-overlay bg-opacity-60 mt-[560px] flex items-center">
                            <button onClick={toastify} className="btn btn-primary border-none normal-case " style = {buttonBg}>Donate ${donation.price}</button>
                        </div>
                    </div>

                    <div className="mb-20">
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