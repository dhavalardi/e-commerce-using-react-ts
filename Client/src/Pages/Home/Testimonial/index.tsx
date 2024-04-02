import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { SlEarphonesAlt } from "react-icons/sl";
import { RiShieldCheckLine } from "react-icons/ri";

const Testimonial = () => {
  return (
    <>
        <div className='flex justify-center h-72 gap-16'>
            <div className='flex flex-col justify-center items-center w-64 '> 
                <div className='flex justify-center items-center bg-gray-400	 w-20 h-20	 rounded-full '>
                <div className='flex justify-center items-center bg-black w-16 h-16 text-white rounded-full'>
                    <TbTruckDelivery   size={40}/>
                </div>
                </div>
                <div className='flex  flex-col text-center mt-5'>
                    <h2 className='text-xl font-semibold'>
                    FREE AND FAST DELIVERY
                    </h2>
                    <h4 className='text-sm	font-normal	mt-2'>
                    Free delivery for all orders over $140
                    </h4>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center w-64 '> 
                <div className='flex justify-center items-center bg-gray-400	 w-20 h-20	 rounded-full '>
                <div className='flex justify-center items-center bg-black w-16 h-16 text-white rounded-full'>
                    <SlEarphonesAlt   size={40}/>
                </div>
                </div>
                <div className='flex  flex-col text-center mt-5'>
                    <h2 className='text-xl font-semibold'>
                    24/7 CUSTOMER SERVICE
                    </h2>
                    <h4 className='text-sm	font-normal	mt-2'>
                    Friendly 24/7 customer support
                    </h4>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center w-64 '> 
                <div className='flex justify-center items-center bg-gray-400	 w-20 h-20	 rounded-full '>
                <div className='flex justify-center items-center bg-black w-16 h-16 text-white rounded-full'>
                    <RiShieldCheckLine   size={40}/>
                </div>
                </div>
                <div className='flex  flex-col text-center mt-5'>
                    <h2 className='text-xl font-semibold'>
                    MONEY BACK GUARANTEE
                    </h2>
                    <h4 className='text-sm	font-normal	mt-2'>
                    We reurn money within 30 days
                    </h4>
                </div>
            </div>
        </div>
    </>
  )
}

export default Testimonial