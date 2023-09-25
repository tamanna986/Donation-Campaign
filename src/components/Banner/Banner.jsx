const Banner = () => {
    return (
        <div className="mt-10 bg-[url('https://i.ibb.co/J35ttk9/1.jpg')] bg-no-repeat bg-cover h-[500px] w-full ">
        <div className="w-full h-full flex flex-col space-y-6   justify-center items-center bg-gray-50/95 ">
            <h1 className=" text-xl md:text-4xl font-semibold text-center">I Grow By Helping People In Need</h1>
            <div className="flex  justify-center items-center">
            <input className=" input rounded-none input-bordered" type="search" name="" id="" placeholder="Search here..." />
            <button className="btn btn-error text-white ">Search</button>
            </div>
            </div>
        </div>
    );
};

export default Banner;