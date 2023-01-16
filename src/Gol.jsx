import React from 'react'
import GolSection1ImgGroup from  './assets/Gol-section-1-imgGroup.svg'
import GolWhatWeDoImg1 from './assets/Gol-what-we-do-img1.svg'
import GolVentureGraph from './assets/Gol-venture-graph.svg'
import GolVentureSmallImg1 from './assets/Gol-venture-small-img1.svg'
import GolVentureSmallImg2 from './assets/Gol-venture-small-img2.svg'
import GolVentureSmallImg3 from './assets/Gol-venture-small-img3.svg'

const Gol = () => {
  return (
    <>
        {/* heading center */}
        <div className="heading-container">
          <h1>Gol</h1>
        </div>


{/* gol section 1 starts */}
<div className='flex items-center flex-col justify-center px-3 gap-5 md:flex-row md:justify-evenly'>


{/* why gol main text and btn starts */}
    <div className='text-justify flex flex-col items-start gap-5 md:w-2/4'>
        {/* top text div */}
        <div className='flex items-start justify-start gap-5'>
            {/* blue lind div */}
            <div className='w-[8px] h-[34px] md:h-[48px] rounded-[10px] bg-[#3282AD] '>

            </div>
            <div>
                <p className='text-[24px] md:text-[32px]  font-bold'>why <span className='text-[#3282AD]'>GOL</span></p>
            </div>
        </div>
        {/* logn text div */}
        <div>
            <p>GoL (Go Lakshadweep) is a Government Authorized Travel Agent (ATA) of Lakshadweep Tourism Department.GoL bridges a gap in the market that poses a great deal of difficulty, uncertainty and lack of authentic information for tourists to the U.T. of Lakshadweep in India Traveling to Lakshadweep as a tourist is needed to have certain procedures because of its special rules & regulations and geographical differences. This could be a major cause of worry many to visit this paradise on earth. GoL makes it easy for you thorough this platform. You can trust us in a friendly manner. Gol is run and manned by native Lakshadweep Islanders so we can provide exact information with safe and secure more than any other platform available....</p>
            <br />
            <button className='text-center flex items-center justify-center bg-[#3282AD] text-white rounded-[8px] px-[32px] py-[16px]'>Read More</button>
        </div>
    </div>


{/*  imgage  */}
 <div>
    <img src={GolSection1ImgGroup} alt="GolSection1ImgGroup" />
 </div>

</div>


{/* what we do  */}

<div className='flex flex-col items-center justify-center mt-32 px-3 py-6 text-center'>
    <p className='font-bold text-[24px] py-3'>What we do</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sed nisi ipsa iste fugit sequi.</p>
   </div>

{/* images main div */}
   <div className='flex flex-col md:flex-row items-center justify-center px-3 md:justify-evenly flex-wrap mt-10'>
   {/* first div */}
      <div className='flex flex-col gap-3 items-center justify-center py-2 lg:w-[247px] lg:h-[200px]'>
        <img src={GolWhatWeDoImg1} alt="" />
        <p>Tours</p>
      </div>

      {/* first div */}
      <div className='flex flex-col gap-3 items-center justify-center py-2 lg:w-[247px] lg:h-[200px]'>
        <img src={GolWhatWeDoImg1} alt="" />
        <p>Hotels</p>
      </div>

      {/* first div */}
      <div className='flex flex-col gap-3 items-center justify-center py-2 lg:w-[247px] lg:h-[200px]'>
        <img src={GolWhatWeDoImg1} alt="" />
        <p>Flights</p>
      </div>

      {/* first div */}
      <div className='flex flex-col gap-3 items-center justify-center py-2 lg:w-[247px] lg:h-[200px]'>
        <img src={GolWhatWeDoImg1} alt="" />
        <p>Cruises</p>
      </div>
   </div>

 <div className='flex items-center justify-center mt-32 mb-16  py-6'>
   <h2 className='font-bold  text-[24px]'>About Gol Ventures</h2>
 </div>
 

 {/* ventures main div */}
 <div className='flex flex-col items-center justify-center px-3 md:flex-row md:justify-evenly text-justify'>
 
   {/* image unable to upload form figma file */}
   
    <img src={GolVentureGraph} alt="GolVentureGraph" />
    <div className='md:w-2/4'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu orci quis arcu placerat tincidunt id non sapien. Suspendisse potenti. Phasellus suscipit tempor nibh commodo volutpat. Phasellus condimentum risus a congue finibus. Duis ut velit feugiat massa pharetra viverra. Cras vel odio eget turpis rhoncus aliquet ac fermentum est. Donec pulvinar, nibh nec bibendum volutpat, odio libero gravida purus, ut lacinia metus odio ac sapien. Donec sagittis ac mi eget accumsan.</p>
        <br />
        {/* three boxes */}
        <div className='flex flex-wrap items-center justify-center gap-3' >
             {/* box 1 */}
             <div className='flex flex-col items-center justify-center text-center p-5 Gol-venture-small-box-bg-shadow'>
                <img src={GolVentureSmallImg1} alt="dffdfasd" />
                <p>15+</p>
                <p>Years of Experience</p>
             </div>

               {/* box 1 */}
               <div className='flex flex-col items-center justify-center text-center p-5 Gol-venture-small-box-bg-shadow'>
                <img src={GolVentureSmallImg2} alt="" />
                <p>650+</p>
                <p>Places Visited</p>
             </div>

               {/* box 1 */}
               <div className='flex flex-col items-center justify-center text-center p-5 Gol-venture-small-box-bg-shadow'>
                <img src={GolVentureSmallImg3} alt="" />
                <p>15k+</p>
                <p>Years of Experience</p>
             </div>
        </div>
    </div>
 </div>

 

    </>
  )
}

export default Gol