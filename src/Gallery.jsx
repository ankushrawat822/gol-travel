import React , {useState , useEffect}  from 'react'
import gallerySectionImg1 from './assets/Gallery-image-section-1.svg'
import gallerySection2GroupImg from './assets/Gallery-section-2-img.svg'
import gallerySection3img1 from './assets/Gallery-section-3-img-1.svg'
import gallerySection3img2 from './assets/Gallery-section-3-img-2.svg'

const Gallery = () => {

    
    const AllData = [
        {
            id: 1,
            img1 : './galleryImg1.svg',
            img2 : './galleryImg1.svg',
            img3 : './galleryImg1.svg',
            img4 : './galleryImg1.svg',
            img5 : './galleryImg1.svg',
        }
    ]


    const LifeData = [
        {
            id: 2,
            img1 : './galleryImg2.svg',
            img2 : './galleryImg2.svg',
            img3 : './galleryImg2.svg',
            img4 : './galleryImg2.svg',
            img5 : './galleryImg2.svg',
        }
    ]


    const MomentsData = [
        {
            id: 1,
            img1 : './galleryImg3.svg',
            img2 : './galleryImg3.svg',
            img3 : './galleryImg3.svg',
            img4 : './galleryImg3.svg',
            img5 : './galleryImg3.svg',
        }
    ]

    
    const NatureData = [
        {
            id: 3,
            img1 : './galleryImg4.svg',
            img2 : './galleryImg4.svg',
            img3 : './galleryImg4.svg',
            img4 : './galleryImg4.svg',
            img5 : './galleryImg4.svg',
        }
    ]

    const StoriesData = [
        {
            id: 1,
            img1 : './galleryImg5.svg',
            img2 : './galleryImg5.svg',
            img3 : './galleryImg5.svg',
            img4 : './galleryImg5.svg',
            img5: './galleryImg5.svg',
        }
    ]

    const TravelData = [
        {
            id: 1,
            img1 : './galleryImg1.svg',
            img2 : './galleryImg1.svg',
            img3 : './galleryImg1.svg',
            img4 : './galleryImg1.svg',
            img5 : './galleryImg1.svg',
        }
    ]

  const [ImgData , setImageData] = useState(AllData)


//   buttons useStates
const [AllBtn , setAllBtn ] = useState(true)
const [LifeBtn , setLifeBtn ] = useState(false)
const [NatureBtn , setNatureBtn ] = useState(false)
const [MomentsBtn , setMomentsBtn ] = useState(false)
const [StoriesBtn , setStoriesBtn ] = useState(false)
const [TravelBtn , setTravelBtn ] = useState(false)


const handleAllBtn = () =>{
    setImageData(AllData)
    setAllBtn(true)
    setLifeBtn(false)
    setNatureBtn(false)
    setStoriesBtn(false)
    setTravelBtn(false)
    setMomentsBtn(false)
}

const handleLifeBtn = () =>{
    setImageData(LifeData)
    setAllBtn(false)
    setLifeBtn(true)
    setNatureBtn(false)
    setStoriesBtn(false)
    setTravelBtn(false)
    setMomentsBtn(false)
}

const handleMomentsBtn = () =>{
    setImageData(MomentsData)
    setAllBtn(false)
    setLifeBtn(false)
    setMomentsBtn(true)
    setNatureBtn(false)
    setStoriesBtn(false)
    setTravelBtn(false)
}

const handleNatureBtn = () =>{
    setImageData(NatureData)
    setAllBtn(false)
    setLifeBtn(false)
    setNatureBtn(true)
    setStoriesBtn(false)
    setTravelBtn(false)
    setMomentsBtn(false)
}


const handleStoriesBtn = () =>{
 //document.body.style.display = 'none'
    setImageData(StoriesData)
    setAllBtn(false)
    setLifeBtn(false)
    setNatureBtn(false)
    setStoriesBtn(true)
    setTravelBtn(false)
    setMomentsBtn(false)
}

const handleTravelBtn = () =>{
   
    setImageData(TravelData)
    setAllBtn(false)
    setLifeBtn(false)
    setNatureBtn(false)
    setStoriesBtn(false)
    setTravelBtn(true)
    setMomentsBtn(false)
}



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
                <button onClick={handleAllBtn} className={ ` ${AllBtn ?  'gallery-page-first-section-btns bg-[#3282AD] text-white font-bold' : 'gallery-page-first-section-btns bg-[#ffffff] text-[#3282AD] font-bold' }`}>ALL</button>
                <button onClick={handleLifeBtn} className={ ` ${LifeBtn ?  'gallery-page-first-section-btns bg-[#3282AD] text-white font-bold' : 'gallery-page-first-section-btns bg-[#ffffff] text-[#3282AD] font-bold' }`}>Life</button>
                <button onClick={handleMomentsBtn} className={ ` ${MomentsBtn ?  'gallery-page-first-section-btns bg-[#3282AD] text-white font-bold' : 'gallery-page-first-section-btns bg-[#ffffff] text-[#3282AD] font-bold' }`}>Moments</button>
                <button onClick={handleNatureBtn} className={ ` ${NatureBtn ?  'gallery-page-first-section-btns bg-[#3282AD] text-white font-bold' : 'gallery-page-first-section-btns bg-[#ffffff] text-[#3282AD] font-bold' }`}>Nature</button>
                <button onClick={handleStoriesBtn} className={ ` ${StoriesBtn ?  'hidden lg:block gallery-page-first-section-btns bg-[#3282AD] text-white font-bold' : 'hidden lg:block gallery-page-first-section-btns bg-[#ffffff] text-[#3282AD] font-bold' }`}>Stories</button>
                <button onClick={handleTravelBtn} className={ ` ${TravelBtn ?  'hidden md:block gallery-page-first-section-btns bg-[#3282AD] text-white font-bold' : 'hidden md:block gallery-page-first-section-btns bg-[#ffffff] text-[#3282AD] font-bold' }`}>Travel</button>
            </div>

{/* images section */}
 {  ImgData.map((data)=> ( 

          <div key={data.id} className='flex flex-col items-center justify-center gap-10 px-3 md:px-10 mt-16'>
       {/* upper div */}
       <div className='flex flex-col items-center justify-center md:flex-row gap-10   '>
            {/* first div */}
            <div className='md:w-[384px] md:h-[248px] lg:w-[809px] lg:h-[377px] '>
                <img className='turn-into-blur object-cover rounded-[7px] md:w-[384px] md:h-[248px] lg:w-[809px] lg:h-[377px]'  src={data.img1} alt="gallerySectionImg1" />
            </div>
            {/* second div */}
            <div className='md:w-[221px] md:h-[248px] lg:w-[393px] lg:h-[377px]  '>
            <img className=' turn-into-blur  object-cover rounded-[7px] md:w-[221px] md:h-[248px] lg:w-[393px] lg:h-[377px]' src={data.img2} alt="gallerySectionImg1" />
            </div>
       </div>
       {/* lower div */}
       <div className='flex flex-col items-center justify-center md:flex-row gap-10     '>

        {/* third hidden on mobile div */}
        <div className='hidden lg:flex lg:w-[289px] lg:h-[377px]'>
            <img className=' turn-into-blur  object-cover rounded-[7px] md:w-[303px] md:h-[248px] lg:w-[289px] lg:h-[377px]' src={data.img3} alt="gallerySectionImg1" />
            </div>


            {/* first div */}
            <div className='md:w-[303px] md:h-[248px] lg:w-[391px] lg:h-[377px]'>
            <img className=' turn-into-blur object-cover rounded-[7px] md:w-[303px] md:h-[248px] lg:w-[391px] lg:h-[377px]' src={data.img4} alt="gallerySectionImg1" />
            </div>
            {/* second div */}
            <div className='md:w-[302px] md:h-[248px] lg:w-[495px] lg:h-[377px]'>
            <img className=' turn-into-blur object-cover rounded-[7px] md:w-[302px] md:h-[248px] lg:w-[495px] lg:h-[377px]' src={data.img5} alt="gallerySectionImg1" />
            </div>
       </div>
   </div>   ))}


{/* discover more btn */}
<div className="flex items-center justify-center">
                <button className='home-hero-discover-btn mt-10 home-all-btn-hover-effects'>Discover Now</button>
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
        <img className='hidden md:flex lg:w-[522px] h-[555px] turn-into-blur' src={gallerySection3img2} alt="gallerySection3img1" />
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
            <img className='turn-into-blur' src={gallerySection3img1} alt="gallerySection3img1" />
        </div>
  
    </div>


    </div>

        </>
  )
}

export default Gallery