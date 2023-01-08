import React from 'react'
import gallerySectionImg1 from './assets/Gallery-image-section-1.svg'
import gallerySection2GroupImg from './assets/Gallery-section-2-img.svg'
import gallerySection3img1 from './assets/Gallery-section-3-img-1.svg'
import gallerySection3img2 from './assets/Gallery-section-3-img-2.svg'

const Gallery = () => {
  return (
        <>
        {/* heading center */}
         <div className="heading-container">
          <h1>Gallery</h1>
        </div>



        {/* 1st section */}
        <div className='flex flex-col items-center justify-center text-center px-3 sm:px-10'>
            <h2 className='font-bold text-[24px]'>Lorem Ipsum deter</h2>
            <p>See The Scenic Beauty Of Lakshadweep Islands Which Make Them Coral Paradise Of The World.</p>
        </div>

{/* buttons div starts */}
        <div className='flex  items-center justify-center mt-16'>
                <button className='gallery-page-first-section-btns bg-[#0E4DA4] text-white font-bold'>ALL</button>
                <button className='gallery-page-first-section-btns bg-[#FFFFFF] text-[#3282AD] font-bold'>LIFE</button>
                <button className='flex text-center items-center justify-center  bg-[#FFFFFF] gallery-page-first-section-btns text-[#3282AD] font-bold'>MOMENTS</button>
                <button className='hidden sm:flex text-center items-center justify-center gallery-page-first-section-btns  bg-[#FFFFFF] text-[#3282AD] font-bold'>NATURE</button>
                <button className='hidden md:flex md:text-center md:items-center  bg-[#FFFFFF] md:justify-center gallery-page-first-section-btns text-[#3282AD] font-bold'>STORIES</button>
                <button className='hidden lg:flex lg:text-center lg:items-center  bg-[#FFFFFF] lg:justify-center gallery-page-first-section-btns text-[#3282AD] font-bold'>TRAVEL</button>
            </div>

{/* images section */}
   <div className='flex flex-col items-center justify-center gap-10 px-3 md:px-10 mt-16'>
       {/* upper div */}
       <div className='flex flex-col items-center justify-center md:flex-row gap-10   '>
            {/* first div */}
            <div className='md:w-[384px] md:h-[248px] lg:w-[809px] lg:h-[377px] '>
                <img className='object-cover rounded-[7px] md:w-[384px] md:h-[248px] lg:w-[809px] lg:h-[377px]'  src={gallerySectionImg1} alt="gallerySectionImg1" />
            </div>
            {/* second div */}
            <div className='md:w-[221px] md:h-[248px] lg:w-[393px] lg:h-[377px]  '>
            <img className='object-cover rounded-[7px] md:w-[221px] md:h-[248px] lg:w-[393px] lg:h-[377px]' src={gallerySectionImg1} alt="gallerySectionImg1" />
            </div>
       </div>
       {/* lower div */}
       <div className='flex flex-col items-center justify-center md:flex-row gap-10     '>

        {/* third hidden on mobile div */}
        <div className='hidden lg:flex lg:w-[289px] lg:h-[377px]'>
            <img className='object-cover rounded-[7px] md:w-[303px] md:h-[248px] lg:w-[289px] lg:h-[377px]' src={gallerySectionImg1} alt="gallerySectionImg1" />
            </div>


            {/* first div */}
            <div className='md:w-[303px] md:h-[248px] lg:w-[391px] lg:h-[377px]'>
            <img className='object-cover rounded-[7px] md:w-[303px] md:h-[248px] lg:w-[391px] lg:h-[377px]' src={gallerySectionImg1} alt="gallerySectionImg1" />
            </div>
            {/* second div */}
            <div className='md:w-[302px] md:h-[248px] lg:w-[495px] lg:h-[377px]'>
            <img className='object-cover rounded-[7px] md:w-[302px] md:h-[248px] lg:w-[495px] lg:h-[377px]' src={gallerySectionImg1} alt="gallerySectionImg1" />
            </div>
       </div>
   </div>


{/* discover more btn */}
<div className="flex items-center justify-center">
                <button className='home-hero-discover-btn mt-10'>Discover Now</button>
            </div>


     {/* section 2 */}
     <div className='flex flex-col md:flex-row items-center justify-center md:items-start md:justify-center gap-9 px-3 mt-20 bg-[#F7FDFF] py-6 lg:gap-32'>
        {/* text div */}
        <div className='flex flex-col items-start justify-start  text-justify sm:w-[303px] lg:w-[337px]'>
        <p className='font-bold text-[24px] md:text-[32px] py-4'>Lorem, ipsum dolor.</p>
        <p className='text-justify' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta maiores itaque numquam eaque omnis quia!</p>
        </div>
        {/* images div */}
        <div className='flex items-center justify-center'>
            <img className='lg:w-[500px]' src={gallerySection2GroupImg} alt="gallerySection2GroupImg" />
        </div>
     </div>




     {/* last secti0n */}
     <div className='flex items-center justify-center gap-10 lg:gap-32'>
 
 {/* mobile hidden div  img*/}
    <div className='hidden md:flex items-center justify-center  mt-20'>
        <img className='hidden md:flex lg:w-[522px] h-[555px]' src={gallerySection3img2} alt="gallerySection3img1" />
    </div>
   
{/* second main div */}
     <div className='mt-20 flex flex-col items-center justify-center px-3 md:w-2/6'>

   {/* tex */}
     <div className='flex flex-col items-center justify-center text-center sm:px-10'>
            <h2 className='font-bold text-[24px] py-2'>Lorem Ipsum deter sit amet</h2>
            <p className='py-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse id sequi laudantium deserunt eos?</p>
        </div>


{/* img div */}
        <div className='flex items-center justify-center'>
            <img src={gallerySection3img1} alt="gallerySection3img1" />
        </div>
  
    </div>


    </div>

        </>
  )
}

export default Gallery