import React from 'react'
import boat from './assets/boat.svg'
import packagesearch from './assets/packagesearch.svg'
import homeStarImg from './assets/home-star-img.svg'
import islandPageKaravatiImg from './assets/islang-page-kavaratti-img.svg'
import {IoIosArrowForward} from  'react-icons/io'
import discoverDivImg from './assets/island-page-discover-div-img.svg'
import islandEmailimg from './assets/island-email-icon.svg'

const Island = () => {
  return (
    <>

    {/* heading */}
          <div className="heading-container">
          <h1>Island</h1>
        </div>

       <img className='packageboat' src={boat} alt="boat" />

{/* input field */}
        <div className='flex items-center justify-center '>
          <input className='package-hero-input' type="text" placeholder='Type a destination' />
          <img className='package-search-icon' src={packagesearch} alt="ps" />
        </div>

{/* first section   */}
       <div className='flex flex-col items-center justify-center text-center px-5 mb-10'>
        <h2 className='font-bold text-[24px] py-5'>Lorem, ipsum dolor.</h2>
        <p>Pick An Exotic Coral Island Of Your Choice And Explore These Unique Island Stay.</p>
       </div>


         {/* island cards main */}
         <div className=' mt-24 flex flex-col gap-5 items-center justify-evenly lg:px-16 lg:gap-10 lg:gap-y-24  md:flex-row md:flex-wrap '>

{/* first card div */}
<div className='flex flex-col w-[300px]  sm:w-[404px] sm:px-3 lg:w-[336px] md:px-0 island-stays-drop-shadow-card
'>
    {/* img div */}
    <div>
        <img src={islandPageKaravatiImg} alt="" />
    </div>
    {/* below img div */}
    <div className='flex flex-col pl-2'>
        {/* h1 and p div */}
        <div className='flex flex-col w-'>
            <h3 className='font-bold'>Kavaratti</h3>
            <p>Kavaratti is the capital of the Union Territory of Lakshadweep having...</p>
        </div>
        {/* rating and button */}
        <div className='flex justify-between items-center'>
            {/* reviews */}
            <div className='flex gap-1 py-3'>
                <img src={homeStarImg} alt="star" />
                <p className='font-bold'>4.5</p>
                <p>(1.5k Review)</p>
            </div>
            {/* explore more btn */}

            <button className='rounded-[5px] flex items-center justify-center bg-[#3282AD] w-[133px] h-[35px]  text-white font-bold btn-hover-effect-blue-to-white-bg btn-hover-effect-blue-to-white-bg md:mr-2'>Explore More</button>

        </div>
    </div>



</div>



 

  {/* second card div */}
<div className='flex flex-col w-[300px]  sm:w-[404px] lg:w-[336px] sm:px-3  md:px-0 island-stays-drop-shadow-card'>
    {/* img div */}
    <div>
        <img src={islandPageKaravatiImg} alt="" />
    </div>
    {/* below img div */}
    <div className='flex flex-col pl-2'>
        {/* h1 and p div */}
        <div className='flex flex-col w-'>
            <h3 className='font-bold'>Kavaratti</h3>
            <p>Kavaratti is the capital of the Union Territory of Lakshadweep having...</p>
        </div>
        {/* rating and button */}
        <div className='flex justify-between items-center'>
            {/* reviews */}
            <div className='flex gap-1 py-3'>
                <img src={homeStarImg} alt="star" />
                <p className='font-bold'>4.5</p>
                <p>(1.5k Review)</p>
            </div>
            {/* explore more btn */}

            <button className='rounded-[5px] flex items-center justify-center bg-[#3282AD] w-[133px] h-[35px]  text-white font-bold btn-hover-effect-blue-to-white-bg md:mr-2'>Explore More</button>

        </div>
    </div>



</div>





{/* third card div */}
<div className='flex flex-col w-[300px]  sm:w-[404px] sm:px-3 lg:w-[336px]  md:px-0 island-stays-drop-shadow-card'>
    {/* img div */}
    <div>
        <img src={islandPageKaravatiImg} alt="" />
    </div>
    {/* below img div */}
    <div className='flex flex-col pl-2'>
        {/* h1 and p div */}
        <div className='flex flex-col w-'>
            <h3 className='font-bold'>Kavaratti</h3>
            <p>Kavaratti is the capital of the Union Territory of Lakshadweep having...</p>
        </div>
        {/* rating and button */}
        <div className='flex justify-between items-center'>
            {/* reviews */}
            <div className='flex gap-1 py-3'>
                <img src={homeStarImg} alt="star" />
                <p className='font-bold'>4.5</p>
                <p>(1.5k Review)</p>
            </div>
            {/* explore more btn */}

            <button className='rounded-[5px] flex items-center justify-center bg-[#3282AD] w-[133px] h-[35px]  text-white font-bold btn-hover-effect-blue-to-white-bg md:mr-2'>Explore More</button>

        </div>
    </div>



</div>    
{/* third card ends */}



{/* forth card div */}
<div className='hidden md:flex flex-col w-[300px]  sm:w-[404px] sm:px-3 lg:w-[336px]  md:px-0 island-stays-drop-shadow-card'>
    {/* img div */}
    <div>
        <img src={islandPageKaravatiImg} alt="" />
    </div>
    {/* below img div */}
    <div className='flex flex-col pl-2'>
        {/* h1 and p div */}
        <div className='flex flex-col w-'>
            <h3 className='font-bold'>Kavaratti</h3>
            <p>Kavaratti is the capital of the Union Territory of Lakshadweep having...</p>
        </div>
        {/* rating and button */}
        <div className='flex justify-between items-center'>
            {/* reviews */}
            <div className='flex gap-1 py-3'>
                <img src={homeStarImg} alt="star" />
                <p className='font-bold'>4.5</p>
                <p>(1.5k Review)</p>
            </div>
            {/* explore more btn */}

            <button className='rounded-[5px] flex items-center justify-center bg-[#3282AD] w-[133px] h-[35px]  text-white font-bold btn-hover-effect-blue-to-white-bg md:mr-2'>Explore More</button>

        </div>
    </div>



</div>    
{/* forth card ends */}





{/* five card div */}
<div className='hidden lg:flex flex-col w-[300px]  sm:w-[404px] sm:px-3 lg:w-[336px]  md:px-0 island-stays-drop-shadow-card'>
    {/* img div */}
    <div>
        <img src={islandPageKaravatiImg} alt="" />
    </div>
    {/* below img div */}
    <div className='flex flex-col pl-2'>
        {/* h1 and p div */}
        <div className='flex flex-col w-'>
            <h3 className='font-bold'>Kavaratti</h3>
            <p>Kavaratti is the capital of the Union Territory of Lakshadweep having...</p>
        </div>
        {/* rating and button */}
        <div className='flex justify-between items-center'>
            {/* reviews */}
            <div className='flex gap-1 py-3'>
                <img src={homeStarImg} alt="star" />
                <p className='font-bold'>4.5</p>
                <p>(1.5k Review)</p>
            </div>
            {/* explore more btn */}

            <button className='rounded-[5px] flex items-center justify-center bg-[#3282AD] w-[133px] h-[35px]  text-white font-bold btn-hover-effect-blue-to-white-bg md:mr-2'>Explore More</button>

        </div>
    </div>



</div>    
{/* five card ends */}



{/* six card div */}
<div className='hidden lg:flex flex-col w-[300px]  sm:w-[404px] sm:px-3 lg:w-[336px]  md:px-0 island-stays-drop-shadow-card'>
    {/* img div */}
    <div>
        <img src={islandPageKaravatiImg} alt="" />
    </div>
    {/* below img div */}
    <div className='flex flex-col pl-2'>
        {/* h1 and p div */}
        <div className='flex flex-col w-'>
            <h3 className='font-bold'>Kavaratti</h3>
            <p>Kavaratti is the capital of the Union Territory of Lakshadweep having...</p>
        </div>
        {/* rating and button */}
        <div className='flex justify-between items-center'>
            {/* reviews */}
            <div className='flex gap-1 py-3'>
                <img src={homeStarImg} alt="star" />
                <p className='font-bold'>4.5</p>
                <p>(1.5k Review)</p>
            </div>
            {/* explore more btn */}

            <button className='rounded-[5px] flex items-center justify-center bg-[#3282AD] w-[133px] h-[35px]  text-white font-bold btn-hover-effect-blue-to-white-bg md:mr-2'>Explore More</button>

        </div>
    </div>



</div>    
{/* six card ends */}

</div>

{/* discover btn */}
<div className='flex items-center justify-center mt-6'>
<button className='home-hero-discover-btn mt-10 home-all-btn-hover-effects'>Discover More</button>
</div>
 

 {/* discover beautiful places div */}
 <div className='flex flex-col md:flex-row justify-center md:justify-evenly'>
   {/* text container */}
   <div className='px-3 md:w-2/5'>
        <h3 className='font-bold text-[24px] mt-11 '>Discover Beautiful Places with Gol</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere eaque ipsum fugiat? </p>
        <br />
        
        <div>
            <p className='flex items-center '> <IoIosArrowForward></IoIosArrowForward> Lorem ipsum dolor sit amet. </p>
            <p  className='flex items-center py-2'> <IoIosArrowForward></IoIosArrowForward> Lorem ipsum dolor sit amet. </p>
            <p  className='flex items-center '> <IoIosArrowForward></IoIosArrowForward> Lorem ipsum dolor sit amet consectetur. </p>
            <button className='island-page-discover-div-contact-btn 
             my-10 btn-hover-effect-blue-to-white-bg'>Contact Us</button>
        </div>

   </div>
   {/* image */}
   <div className='flex items-center justify-center mt-6 '>
    <img  src={discoverDivImg} alt="discoverDivImg" />
   </div>
 </div>


{/* enter email div starts */}
<div className='flex items-center justify-center mt-24'>


 <div className='bg-[url("./assets/island-page-subscribe-div-bg.svg")] bg-cover w-[320px] h-[282px] sm:w-[480px] sm:h-[283px] flex flex-col items-center justify-evenly md:w-[518px] md:h-[457px] lg:w-[1080px] lg:h-[300px]'>
 <h2 className='text-white font-bold text-[28px]'>Get Every Tour & Packages Update</h2>
    <div className='flex relative'>
   <img src={islandEmailimg} className="island-email-icon-style" alt="islandEmailimg" />
    <input className='island-page-input w-[280px] pl-20' placeholder='Enter your Email' type="email" />
   
    </div>
    <button className='island-page-subscribe-btn btn-hover-effect-blue-to-white-bg'>SUBSCRIBE</button>
    
 </div>

</div>

    </>
  )
}

export default Island