import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ProductCard from "../../../Component/ProductCard";
import { useAppSelector } from "../../../Redux/hooks/productHook";
import { GoHeart } from "react-icons/go";
import { FiEye } from "react-icons/fi";

const TodaySale: React.FC = () => {

  const productData = useAppSelector((state) => state.product);

  console.log(productData, "============llllllllllllllllllllllllllllllll=============");
  
  return (
    <>
     <div>
       <div className="h-[31rem]">
        {/* Heading Section  */}
        <div className="flex flex-col w-full ">
          <div className="flex  h-10 text-base items-center font-semibold text-[#DB4444]">
            <div className="rounded h-full w-5 bg-[#DB4444]" />

            <h2 className="ml-4">Today's</h2>
          </div>
          <div className="flex justify-between mt-4 items-baseline">
            <div className="flex items-center">
              <div className="flex text-4xl font-semibold ">Flash Sales</div>
              <div className="flex ml-20">
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-medium">Days</span>
                  <span className="text-3xl font-bold	">03</span>
                </div>
                <div className="flex items-end mx-2 text-[#E07575]">
                  <span className="text-3xl font-bold	">:</span>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-medium">Hours</span>
                  <span className="text-3xl font-bold	">23</span>
                </div>
                <div className="flex items-end mx-2 text-[#E07575]">
                  <span className="text-3xl font-bold	">:</span>
                </div>
                <div className="flex flex-col justify-centers">
                  <span className="text-xs font-medium">Minutes</span>
                  <span className="text-3xl font-bold	">19</span>
                </div>
                <div className="flex items-end mx-1 text-[#E07575]">
                  <span className="text-3xl font-bold	">:</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium">Seconds</span>
                  <span className="text-3xl font-bold	">56</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex justify-center items-center bg-[#e3e3e3]  h-10 w-10 rounded-full">
                <FaArrowLeft size={20} />
              </button>
              <button className="flex justify-center items-center bg-[#e3e3e3] h-10 w-10 rounded-full">
                <FaArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
        {/* Product Section  */}

        <div className="flex justify-between gap-10 mt-8 overflow-x-scroll">
          <ProductCard />
        </div>
        </div>
    
        <div>
           <div className="flex justify-center mt-5 w-full  ">
        <button className="bg-[#DB4444] text-white py-4 px-20 rounded-md ">
            <span className="ml-2">View All Products</span>
          </button>
          </div>
      </div>
     </div>
    </>
  );
};

export default TodaySale;
