import React from 'react'
import Scuba from './assets/AtAGlance-Scuba.svg'
import boating from './assets/AtAGlance-boating.svg'
import fishing from './assets/AtAGlance-fishing.svg'
import turtle from './assets/AtAGlance-turtle.svg'
import homelocationIcon from './assets/home-page-location-icon.svg'
import AttractionScubaDiving from './assets/Attraction-scuba-diving-img.svg'


const Attractions = () => {
    return (
        <>
            {/* heading center */}
            <div className="heading-container">
                <h1>Attractions</h1>
            </div>


            {/* Activities */}
            <div className='flex items-center justify-center mt-10 text-center px-3'>
                <h1 className='font-bold text-[24px]'>Things you do on your stay</h1>
            </div>

            {/* main div  */}
            <div className=' flex items-center justify-center md:justify-evenly flex-wrap md:flex-row  my-10 px-3'>



                {/* div 1 */}
                <div className='at-a-glance-activity-div-bg-style flex flex-col items-center justify-center gap-2 p-6 w-[193px] h-[172px]'>
                    <img src={Scuba} alt="" />
                    <div className='at-a-glance-activity-small-div1'></div>
                    <p className='font-bold'>Scuba diving</p>
                </div>


                {/* div 2 */}
                <div className='at-a-glance-activity-div-bg-style flex flex-col items-center justify-center gap-2 p-6 w-[193px] h-[172px]'>
                    <img src={fishing} alt="" />
                    <div className='at-a-glance-activity-small-div2'></div>
                    <p className='font-bold'>Fishing</p>
                </div>





                {/* div 3 */}
                <div className='at-a-glance-activity-div-bg-style flex flex-col items-center justify-center gap-2 p-6 w-[193px] h-[172px]'>
                    <img src={boating} alt="" />
                    <div className='at-a-glance-activity-small-div3'></div>
                    <p className='font-bold'>Boating</p>
                </div>



                {/* div 4*/}
                <div className='at-a-glance-activity-div-bg-style flex flex-col items-center justify-center gap-2 p-6 w-[193px] h-[172px]'>
                    <img src={turtle} alt="" />
                    <div className='at-a-glance-activity-small-div4'></div>
                    <p className='font-bold'>Turtle watch</p>
                </div>



            </div>


            {/* cards main div */}
            <div className='mt-11 '>
                {/* card div 1 */}
                <div className='flex flex-col items-center justify-center sm:flex-row sm:justify-evenly gap-5 px-3 attraction-drop-shadow py-5'>
                    <img src={AttractionScubaDiving} alt="" />
                    {/* text */}
                    <div className='sm:w-2/4'>
                        <div className='flex items-center justify-between'>
                            <p className='text-[24px]'>Scuba Diving</p>
                            <div className='flex items-center justify-center gap-2'>
                                <img src={homelocationIcon} alt="" />
                                <p>Lakshadweep</p>
                            </div>
                        </div>
                        <p className='text-justify'>The islands of Bangaram, Kadmat, Kavaratti, and Minicoy have the scuba diving operators. The waters are calm and are an ideal location for beginners. As for the more experienced divers... <span className='hidden lg:flex'>
                            there is a huge marine diversity and untouched reefs to explore. Sloping reefs, caves, coral gardens, overhangs, and shipwrecks are some of the attractions a diver could explore. Of the 4 islands where scuba diving is possible, Bangaram and Kadmat are quite popular while Minicoy and Kavaratti are remote and relatively not busy. Kavaratti offers caves to explore while Bangaram and Minicoy offer shipwreck dives.
                        </span></p>
                    </div>
                </div>
                {/* card div 1 ends */}

                {/* card div 2 */}
                <div className='flex flex-col items-center justify-center sm:flex-row-reverse sm:justify-evenly gap-5 px-3 attraction-drop-shadow py-5'>
                    <img src={AttractionScubaDiving} alt="" />
                    {/* text */}
                    <div className='sm:w-2/4'>
                        <div className='flex items-center justify-between'>
                            <p className='text-[24px]'>Scuba Diving</p>
                            <div className='flex items-center justify-center gap-2'>
                                <img src={homelocationIcon} alt="" />
                                <p>Lakshadweep</p>
                            </div>
                        </div>
                        <p className='text-justify'>The islands of Bangaram, Kadmat, Kavaratti, and Minicoy have the scuba diving operators. The waters are calm and are an ideal location for beginners. As for the more experienced divers... <span className='hidden lg:flex'>
                            there is a huge marine diversity and untouched reefs to explore. Sloping reefs, caves, coral gardens, overhangs, and shipwrecks are some of the attractions a diver could explore. Of the 4 islands where scuba diving is possible, Bangaram and Kadmat are quite popular while Minicoy and Kavaratti are remote and relatively not busy. Kavaratti offers caves to explore while Bangaram and Minicoy offer shipwreck dives.
                        </span></p>
                    </div>
                </div>
                {/* 2nd card end */}




                  {/* card div 1 */}
                  <div className='flex flex-col items-center justify-center sm:flex-row sm:justify-evenly gap-5 px-3 attraction-drop-shadow py-5'>
                    <img src={AttractionScubaDiving} alt="" />
                    {/* text */}
                    <div className='sm:w-2/4'>
                        <div className='flex items-center justify-between'>
                            <p className='text-[24px]'>Scuba Diving</p>
                            <div className='flex items-center justify-center gap-2'>
                                <img src={homelocationIcon} alt="" />
                                <p>Lakshadweep</p>
                            </div>
                        </div>
                        <p className='text-justify'>The islands of Bangaram, Kadmat, Kavaratti, and Minicoy have the scuba diving operators. The waters are calm and are an ideal location for beginners. As for the more experienced divers... <span className='hidden lg:flex'>
                            there is a huge marine diversity and untouched reefs to explore. Sloping reefs, caves, coral gardens, overhangs, and shipwrecks are some of the attractions a diver could explore. Of the 4 islands where scuba diving is possible, Bangaram and Kadmat are quite popular while Minicoy and Kavaratti are remote and relatively not busy. Kavaratti offers caves to explore while Bangaram and Minicoy offer shipwreck dives.
                        </span></p>
                    </div>
                </div>
                {/* card div 1 ends */}

                {/* card div 2 */}
                <div className='flex flex-col items-center justify-center sm:flex-row-reverse sm:justify-evenly gap-5 px-3 attraction-drop-shadow py-5'>
                    <img src={AttractionScubaDiving} alt="" />
                    {/* text */}
                    <div className='sm:w-2/4'>
                        <div className='flex items-center justify-between'>
                            <p className='text-[24px]'>Scuba Diving</p>
                            <div className='flex items-center justify-center gap-2'>
                                <img src={homelocationIcon} alt="" />
                                <p>Lakshadweep</p>
                            </div>
                        </div>
                        <p className='text-justify'>The islands of Bangaram, Kadmat, Kavaratti, and Minicoy have the scuba diving operators. The waters are calm and are an ideal location for beginners. As for the more experienced divers... <span className='hidden lg:flex'>
                            there is a huge marine diversity and untouched reefs to explore. Sloping reefs, caves, coral gardens, overhangs, and shipwrecks are some of the attractions a diver could explore. Of the 4 islands where scuba diving is possible, Bangaram and Kadmat are quite popular while Minicoy and Kavaratti are remote and relatively not busy. Kavaratti offers caves to explore while Bangaram and Minicoy offer shipwreck dives.
                        </span></p>
                    </div>
                </div>
                {/* 2nd card end */}
            </div>



            <div className='flex items-center justify-center mt-10'>
            <button className='home-hero-discover-btn'>Discover More</button>
            </div>


        </>
    )
}

export default Attractions