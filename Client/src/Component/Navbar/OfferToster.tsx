import React from 'react'
import { Link } from 'react-router-dom'

const OfferToster = () => {
  return (
    <div className='flex items-center justify-center bg-black h-[36px] text-sm text-white '>
        <p className='font-sans'>Sale For All Swim Suits And Free Express Delivery - OFF 50%!  
        <span className='ml-3 font-bold underline underline-offset-2 '>
            <Link to={''}>ShopNow</Link>
        </span>
        </p>
        
    </div>
  )
}

export default OfferToster