import React from 'react'
import BookingImg from './assets/booking-img.svg'

const Booking = () => {
  return (
     <>
         {/* heading center */}
         <div className="heading-container">
                <h1>My Booking</h1>
            </div>

            {/* main div */}

         <div className='px-3 flex flex-col items-center justify-center md:flex-row-reverse md:justify-evenly '>


            <div className='flex flex-col items-center justify-center gap-1 '>
                <p className='text-[20px]'>Email</p>
                <input className='booking-email-input' type="email" />
                <p  className='text-[20px]'>Booking ID</p>
                <input className='booking-email-input' type="text" />
                <button className='booking-find-btn bg-[#3282AD] text-[24px] text-white font-bold flex items-center justify-center  btn-hover-effect-blue-to-white-bg'>Find</button>
            </div>

    <img className='hidden sm:flex' src={BookingImg} alt="" />


            </div>
     </>
  )
}

export default Booking