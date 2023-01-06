import React from 'react'
import homeHeroGirl from './assets/homeHeroGirl.svg'
import homeVisitBtnIcon from './assets/homeVisitBtnIcon.svg'
import { TextField } from '@mui/material'
import showFlightImg from './assets/homeHeroshowFlight.svg'
import homelocationIcon from './assets/home-page-location-icon.svg'
import homeStarImg from './assets/home-star-img.svg'
import homeCirclWhiteImg from './assets/home-circle-white-img.svg'
import homeCirlceBlue from './assets/home-circle-blue-img.svg'


const Home = () => {
    return (
        <>

            {/* hero section */}
            <div className='home-hero-main-div mt-16 '>

                <div className='home-hero-text-main-container '>

                    <button className='home-hero-visit-button
                     flex items-center justify-center gap-4 
                     text-[36px] my-8'>Visit <img src={homeVisitBtnIcon} alt="" />
                    </button>

                    <div>
                        <h1 className='home-hero-top-and-botton-text'>The Exotic</h1>
                        <h1 className='home-hero-lakshadweep-text-hr'>Lakshadweep</h1>
                        <h1 className='home-hero-top-and-botton-text'>Island</h1>
                    </div>

                    <button className='home-hero-discover-btn mt-10'>Discover Now</button>

                </div>


                <div className='hero-img-or-svg-section'>
                    <img src={homeHeroGirl} alt="homeHeroGirl" />
                </div>
            </div>


            <div className='home-hero-flying-input-div w-screen '>

                <div className='py-5'>
                    <p className='font-bold'>Where are you flying?</p>
                </div>

                <div className='flex sm:flex-col md:flex-row  items-center justify-center sm:justify-between flex-wrap gap-5'>

                    <TextField id="outlined-basic" variant="outlined" label="From - To" placeholder='Lahore - Karachi'></TextField>

                    <TextField id="outlined-basic" variant="outlined" label="Trip" placeholder='Reture'></TextField>

                    <TextField id="outlined-basic" variant="outlined" label="Depart - Return" placeholder='07 Nov 22 - 13 NOv 22'></TextField>

                    <TextField id="outlined-basic" variant="outlined" label="Passenger - Class" placeholder='1 Passenger , Economy'></TextField>
                </div>

            </div>

            <div className='flex gap-4 items-center justify-center md:items-end md:justify-end md:mr-16'>
                <button>+ Add Promo Code</button>
                <button className='home-hero-show-flight-btn flex items-center justify-center text-white'> <img src={showFlightImg} alt="showFlightImg" />Show Flights</button>
            </div>


            <div className='text-center'>
                <h1 className='font-bold text-[24px] py-4 mt-16'>Best Packages For You</h1>
                <p>This is a unique experience on ship, sea and land, exploring different coral island of Lakshadweep</p>
            </div>

            <div className='flex  items-center justify-center mt-16'>
                <button className='hero-page-best-packages-btns bg-[#3282AD] text-white font-bold'>Maldives</button>
                <button className='hero-page-best-packages-btns text-[#3282AD] font-bold'>Samudram</button>
                <button className='hidden md:flex md:text-center md:items-center md:justify-center hero-page-best-packages-btns text-[#3282AD] font-bold'>Cordelia</button>
                <button className='hidden md:flex md:text-center md:items-center md:justify-center hero-page-best-packages-btns text-[#3282AD] font-bold'>Agatti</button>
                <button className='hero-page-best-packages-btns text-[#3282AD] font-bold'>More</button>
            </div>


            <div className='flex flex-col items-center justify-center md:flex-row md:justify-evenly mt-10  gap-11 md:gap-0'>
                <div className=' w-[300px] sm:w-[410px]  flex flex-col relative'>

                    <div className='flex flex-col  items-center md:flex-col  '>
                        <div className="h-[348px]  bg-[url('./assets/home-page-indonesia.svg')] bg-cover w-[300px] sm:w-[410px] rounded-t-lg ">
                            <button className='home-indonedia-price-btn'>&#8377;500</button>
                        </div>


                        <div className=' home-indonesia-card-text-main-div '>

                            {/* indonesia name and location icon */}
                            <div className='flex items-center justify-between px-2 py-2 '>
                                <div className='flex items-center justify-around py-2 mt-[-10px] '>
                                    <img src={homelocationIcon} alt="homelocationIcon" />
                                    <p className='font-bold'>Indonesia</p>
                                </div>

                                {/* star rating */}
                                <div className='flex gap-1 mt-[-15px]'>
                                    <img src={homeStarImg} alt="homeStarImg" />
                                    <p>4.5</p>
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-center px-6'>
                                <p>Explore the Beauty of the island for 3 days and 2 nights with our travel agency...</p>
                                <button className='home-indonesia-book-now-btn my-7 text-white font-bold'>Book Now</button>
                            </div>

                        </div>
                    </div>

                </div>






                <div className=' w-[300px] sm:w-[410px]'>

                    <div className='flex flex-col  items-center md:flex-col '>
                        <div className="h-[348px]  bg-[url('./assets/home-indonesia-img2.svg')] bg-cover w-[300px] sm:w-[410px] rounded-t-lg relative">
                            <button className='home-indonedia-price-btn'>&#8377;500</button>
                        </div>


                        <div className=' home-indonesia-card-text-main-div '>

                            {/* indonesia name and location icon */}
                            <div className='flex items-center justify-between px-2 py-2 '>
                                <div className='flex items-center justify-around py-2 mt-[-10px] '>
                                    <img src={homelocationIcon} alt="homelocationIcon" />
                                    <p className='font-bold'>Indonesia</p>
                                </div>

                                {/* star rating */}
                                <div className='flex gap-1 mt-[-15px]'>
                                    <img src={homeStarImg} alt="homeStarImg" />
                                    <p>4.5</p>
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-center px-6'>
                                <p>Explore the Beauty of the island for 3 days and 2 nights with our travel agency...</p>
                                <button className='home-indonesia-book-now-btn my-7 text-white font-bold'>Book Now</button>
                            </div>

                        </div>
                    </div>

                </div>


                {/* 3rd indonesia card div */}

                <div className='hidden lg:flex w-[300px] sm:w-[410px] '>

                    <div className='flex flex-col  items-center md:flex-col relative'>
                        <div className="h-[348px]  bg-[url('./assets/home-indonesia-img3.svg')] bg-cover w-[300px] sm:w-[410px] rounded-t-lg ">
                            <button className='home-indonedia-price-btn'>&#8377;500</button>
                        </div>


                        <div className=' home-indonesia-card-text-main-div '>

                            {/* indonesia name and location icon */}
                            <div className='flex items-center justify-between px-2 py-2 '>
                                <div className='flex items-center justify-around py-2 mt-[-10px] '>
                                    <img src={homelocationIcon} alt="homelocationIcon" />
                                    <p className='font-bold'>Indonesia</p>
                                </div>

                                {/* star rating */}
                                <div className='flex gap-1 mt-[-15px]'>
                                    <img src={homeStarImg} alt="homeStarImg" />
                                    <p>4.5</p>
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-center px-6'>
                                <p>Explore the Beauty of the island for 3 days and 2 nights with our travel agency...</p>
                                <button className='home-indonesia-book-now-btn my-7 text-white font-bold'>Book Now</button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>



            <div className=' hidden sm:flex items-center justify-center gap-4 py-11'>
                <img src={homeCirclWhiteImg} alt="w" />
                <img src={homeCirlceBlue} alt="w" />
                <img src={homeCirclWhiteImg} alt="w" />
            </div>


      <div className="flex items-center justify-center">
          <button className='home-hero-discover-btn mt-10'>Discover Now</button>
      </div>
        









        </>
    )
}

export default Home