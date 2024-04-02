import React from 'react'
import { BestSellingProductCard } from '../../../Component/ProductCard/BestSellingProductCard'
import OurProductCard from '../../../Component/ProductCard/OurProductCard'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

const OurProduct = () => {
  return (
    <>
       <div className="mb-8">
        <div className="">
          {/* Heading Section  */}
          <div className="flex flex-col w-full ">
            <div className="flex  h-10 text-base items-center font-semibold text-[#DB4444]">
              <div className="rounded h-full w-5 bg-[#DB4444]" />

              <h2 className="ml-4">Our Products</h2>
            </div>
            <div className="flex justify-between mt-4 items-baseline">
              <div className="flex items-center">
                <div className="flex text-4xl font-semibold ">
                Explore Our Products
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

          <div className="flex justify-between mt-10 ">
            <OurProductCard />
         
          </div>
        </div>
      </div>
    </>
  )
}

export default OurProduct
