import { useEffect, useState } from "react";
import SearchedCards from "../SearchedCards/SearchedCards";

const Banner = () => {
    const [donations, setDonations] = useState([]);
    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setDonations(data))

    }, [])


    const [search, setSearch] = useState();
    const donated = donations.filter(donated => (donated.category).toLowerCase() === search);


    // to obtain the search bar text
    const handleSearch = e => {
        const searchText = e.target.value
        setSearch(searchText)
    }

    // to find the mathched categories while clicking search

    const handleSearchButton = () => {
        if (donated) {
            console.log('found', donated)
        }
    }

    return (
        <div>
            <div className="mt-10 bg-[url('https://i.ibb.co/J35ttk9/1.jpg')] bg-no-repeat bg-cover h-[500px] w-full ">
                <div className="w-full h-full flex flex-col space-y-6   justify-center items-center bg-gray-50/95 ">
                    <h1 className=" text-xl md:text-4xl font-semibold text-center">I Grow By Helping People In Need</h1>
                    <div className="flex  justify-center items-center">

                        <input onChange={handleSearch} className=" input rounded-none input-bordered" type="search" name="" id="" placeholder="Search here..." />
                        <button onClick={handleSearchButton} className="btn btn-error text-white ">Search</button>
                    </div>
                </div>
            </div>


            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-16 mt-20 ">
                {
                    donated.map(donation =>
                        <SearchedCards
                            key={donation.id}
                            donation={donation}
                        >
                        </SearchedCards>
                    )
                }
            </div>
        </div>
    );
};

export default Banner;