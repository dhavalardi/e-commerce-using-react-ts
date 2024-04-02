import React from "react";
import OurProductCard from "../../../Component/ProductCard/OurProductCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Featured = () => {
  return (
    <>
      <div className="mb-8 ">
        <div className="">
          {/* Heading Section  */}
          <div className="flex flex-col w-full ">
            <div className="flex  h-10 text-base items-center font-semibold text-[#DB4444]">
              <div className="rounded h-full w-5 bg-[#DB4444]" />

              <h2 className="ml-4">Featured</h2>
            </div>
            <div className="flex justify-between mt-4 items-baseline">
              <div className="flex items-center">
                <div className="flex text-4xl font-semibold ">New Arrival</div>
              </div>
            </div>
          </div>
          {/* Arrival Product Section  */}

          <div className="flex mt-8 h-[38rem]  text-white gap-4">
            <div className="w-3/6 bg-black relative rounded">

                <img src="/images/NewArrivalImages/ps5.png" 
                className="absolute w-[511px] h-[511px] top-24 left-7"
                 />
                 <div className="absolute bottom-4 left-8 mb-10">
                        <div className="flex">
                            <h1 className="text-2xl	font-semibold	">
                               PlayStation 5
                            </h1>
                        </div>
                        <div className="flex mt-6 w-60	">
                            <h3 className="text-sm font-normal">
                            Black and White version of the PS5 coming out on sale.
                            </h3>
                        </div>
                        <div className="flex mt-4  w-60	">
                            <button className="text-base underline font-normal">
                                Shop Now
                            </button>
                        </div>
                        
                 </div>

            </div>
            <div className="w-3/6 flex flex-col gap-4 relative">
              <div className="h-72 relative rounded bg-[#0c0c0c]">
              <img src="/images/NewArrivalImages/woman.png" 
                className="absolute w-[432px] h-[286px] left-48	"
                 />
                     <div className="absolute bottom-4 left-8 mb-5">
                        <div className="flex">
                            <h1 className="text-2xl	font-semibold	">
                            Women’s Collections
                            </h1>
                        </div>
                        <div className="flex mt-4 w-60	">
                            <h3 className="text-sm font-normal">
                            Featured woman collections that give you another vibe.
                            </h3>
                        </div>
                        <div className="flex mt-4  w-60	">
                            <button className="text-base underline font-normal">
                                Shop Now
                            </button>
                        </div>
                        
                 </div>
              </div>

              <div className="flex flex-grow gap-4">
                <div className="w-3/6 relative rounded bg-[#0c0c0c]">

                <img src="/images/NewArrivalImages/echo.png" 
                className="absolute w-52 h-[222px] top-8 left-12"
                 />
                     <div className="absolute bottom-4 left-8 mb-2">
                        <div className="flex">
                            <h1 className="text-2xl	font-semibold	">
                            Speakers
                            </h1>
                        </div>
                        <div className="flex mt-2 w-60	">
                            <h3 className="text-sm font-normal">
                            Amazon wireless speakers
                            </h3>
                        </div>
                        <div className="flex mt-4  w-60	">
                            <button className="text-base underline font-normal">
                                Shop Now
                            </button>
                        </div>
            
                     </div>
                </div>

                <div className="w-3/6 relative bg-[#0c0c0c] rounded">
                <img src="/images/NewArrivalImages/gucci.png" 
                className="absolute w-[210px] h-[222px] top-8 left-12"
                 />
                       <div className="absolute bottom-4 left-8 mb-2">
                        <div className="flex">
                            <h1 className="text-2xl	font-semibold">
                            Perfume
                            </h1>
                        </div>
                        <div className="flex mt-2 w-60	">
                            <h3 className="text-sm font-normal">
                            GUCCI INTENSE OUD EDP
                            </h3>
                        </div>
                        <div className="flex mt-4  w-60	">
                            <button className="text-base underline font-normal">
                                Shop Now
                            </button>
                        </div>
            
                     </div>
                </div>
                </div>
            </div>
          </div>



        </div>
      </div>
    </>
  );
};

export default Featured;
