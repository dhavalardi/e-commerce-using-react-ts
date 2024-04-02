import React from "react";
import { CiHeadphones, CiMobile4 } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { FiCamera } from "react-icons/fi";
import { GiConsoleController } from "react-icons/gi";


const BrowesCategories = () => {
  return (
    <>
      <div>
        <div className="h-80 mb-11 ">
          {/* Heading Section  */}
          <div className="flex flex-col w-full  ">
            <div className="flex  h-10 text-base items-center font-semibold text-[#DB4444]">
              <div className="rounded h-full w-5 bg-[#DB4444]" />
              <h2 className="ml-4">Categories</h2>
            </div>
            <div className="flex justify-between mt-4 items-baseline">
              <div className="flex items-center">
                <div className="flex text-4xl font-semibold ">
                  Browse By Category
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

          {/* Categories Section  */}

          <div className="flex justify-between mt-12 gap-4">
            <div className="flex flex-col hover:bg-[#DB4444] hover:text-white border-2 rounded-md w-44 h-36">
                <div className="flex h-3/4 w-full justify-center items-center">
                    <CiMobile4 size={60}/>
                </div>
                 <div className="flex w-full justify-center items-center">
                    <h2>
                    Phones
                    </h2>
                 </div>
            </div>
           
            <div className="flex flex-col hover:bg-[#DB4444] hover:text-white border-2 rounded-md w-44 h-36">
                <div className="flex h-3/4 w-full justify-center items-center">
                    <HiOutlineComputerDesktop size={60}/>
                </div>
                 <div className="flex w-full justify-center items-center">
                    <h2>
                    Computers
                    </h2>
                 </div>
            </div> 

            <div className="flex flex-col hover:bg-[#DB4444] hover:text-white border-2 rounded-md w-44 h-36">
                <div className="flex h-3/4 w-full justify-center items-center">
                    <BsSmartwatch size={60}/>
                </div>
                 <div className="flex w-full justify-center items-center">
                    <h2>
                    SmartWatch
                    </h2>
                 </div>
            </div>

            <div className="flex flex-col hover:bg-[#DB4444] hover:text-white border-2 rounded-md w-44 h-36">
                <div className="flex h-3/4 w-full justify-center items-center">
                    <FiCamera size={60}/>
                </div>
                 <div className="flex w-full justify-center items-center">
                    <h2>
                    Camera                    </h2>
                 </div>
            </div>

            <div className="flex flex-col hover:bg-[#DB4444] hover:text-white border-2 rounded-md w-44 h-36">
                <div className="flex h-3/4 w-full justify-center items-center">
                    <CiHeadphones size={60}/>
                </div>
                 <div className="flex w-full justify-center items-center">
                    <h2>
                    HeadPhones
                    </h2>
                 </div>
            </div>

            <div className="flex flex-col hover:bg-[#DB4444] hover:text-white border-2 rounded-md w-44 h-36">
                <div className="flex h-3/4 w-full justify-center items-center">
                    <GiConsoleController size={60}/>
                </div>
                 <div className="flex w-full justify-center items-center">
                    <h2>
                    Gaming
                    </h2>
                 </div>
            </div>
          </div>
          </div>
      </div>
    </>
  );
};

export default BrowesCategories;
