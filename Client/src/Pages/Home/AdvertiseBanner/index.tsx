import React from "react";

const AdvertiseBanner = () => {
  return (
    <>
      <div className="flex w-full bg-gradient-to-r from-zinc-900 to-neutral-700 h-[31rem]">
        {/* Left Content */}
        <div className="text-white flex flex-col flex-1">
          <div className="ml-16 mt-16">
            <div className="flex flex-col">
              <div>
                <h6 className="text-base font-semibold	text-[#00FF66]">
                  Categories
                </h6>
              </div>
              <div className="mt-9">
                <h1 className="text-5xl	font-semibold">
                  Enhance Your <br />
                </h1>
                <h1 className="text-5xl	mt-3 font-semibold">Music Experience</h1>
              </div>
              <div className="mt-12 flex items-center">
                <div className="flex items-center text-black">
                  <div className="flex flex-col mr-4 bg-white items-center h-16 w-16 rounded-full justify-center">
                    <span className="text-base font-semibold">23</span>
                    <span className="text-xs font-normal">Hours</span>
                  </div>
                  <div className="flex flex-col mr-4 bg-white items-center h-16 w-16 rounded-full justify-center">
                    <span className="text-base	font-semibold">05</span>
                    <span className="text-xs font-normal	">Days</span>
                  </div>
                  <div className="flex flex-col mr-4 bg-white items-center h-16 w-16 rounded-full justify-center">
                    <span className="text-base font-semibold	">59</span>
                    <span className="text-xs font-normal	">Minutes</span>
                  </div>
                  <div className="flex flex-col mr-4 bg-white items-center h-16 w-16 rounded-full justify-center">
                    <span className="text-base	font-semibold">35</span>
                    <span className="text-xs font-normal	">Seconds</span>
                  </div>
                </div>
              </div>
               <div className="mt-8">
               <button className="bg-[#00FF66] rounded text-white py-4 px-8 ">
                  <span className="ml-2">Buy Now!  </span>
                </button>
               </div>   
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/images/BannerImages/AdBaner.png"
            alt="Advertisement Banner"
          />
        </div>
      </div>
    </>
  );
};

export default AdvertiseBanner;
