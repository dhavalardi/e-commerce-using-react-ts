import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ProductCard from "../../../Component/ProductCard";
import { BestSellingProductCard } from "../../../Component/ProductCard/BestSellingProductCard";

const BestSellingProduct = () => {
  return (
    <>
      <div className="mb-8">
        <div className="h-[31rem]">
          {/* Heading Section  */}
          <div className="flex flex-col w-full ">
            <div className="flex  h-10 text-base items-center font-semibold text-[#DB4444]">
              <div className="rounded h-full w-5 bg-[#DB4444]" />

              <h2 className="ml-4">This Month</h2>
            </div>
            <div className="flex justify-between mt-4 items-baseline">
              <div className="flex items-center">
                <div className="flex text-4xl font-semibold ">
                  Best Selling Products
                </div>
              </div>
              <div className="flex gap-2">
                <button className="bg-[#DB4444] text-white py-2 px-8 rounded-md ">
                  <span className="ml-2">View All </span>
                </button>
              </div>
            </div>
          </div>
          {/* Product Section  */}

          <div className="flex justify-between mt-10 ">
            <BestSellingProductCard />
         
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSellingProduct;
