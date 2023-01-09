import React from 'react'
import homeHeroGirl from './assets/homeHeroGirl.svg'
import homeVisitBtnIcon from './assets/homeVisitBtnIcon.svg'
import { TextField } from '@mui/material'
import showFlightImg from './assets/homeHeroshowFlight.svg'
import homelocationIcon from './assets/home-page-location-icon.svg'
import homeStarImg from './assets/home-star-img.svg'
import homeCirclWhiteImg from './assets/home-circle-white-img.svg'
import homeCirlceBlue from './assets/home-circle-blue-img.svg'
import homeKaravatiIsland from './assets/home-island-karavati.svg'
import clientStarImg from './assets/home-client-reviews-star.svg'
import homeclientUserImg from './assets/home-client-user-img.svg'


const Home = () => {
    return (
        <>
            <div className='mt-16'>
                {/* hero section */}
                <div className='home-hero-main-div lg:gap-32 '>

                    <div className='home-hero-text-main-container '>

                        <button className='home-hero-visit-button home-all-btn-hover-effects
                     flex items-center justify-center gap-4 
                     text-[36px] my-8'>Visit <img src={homeVisitBtnIcon} alt="" />
                        </button>

                        <div>
                            <h1 className='home-hero-top-and-botton-text'>The Exotic</h1>
                            <h1 className='home-hero-lakshadweep-text-hr'>Lakshadweep</h1>
                            <h1 className='home-hero-top-and-botton-text'>Island</h1>
                        </div>

                        <button className='home-hero-discover-btn mt-10 home-all-btn-hover-effects'>Discover Now</button>

                    </div>


                    <div className='hero-img-or-svg-section '>
                        <img src={homeHeroGirl} alt="homeHeroGirl" />
                    </div>
                </div>



            </div>


            {/* where are you flying */}

            <div className='flex flex-col items-center justify-center relative mt-12  lg:mx-28  home-page-where-flying-drop-shadow'>



                <div className='home-hero-flying-input-div flex flex-col items-start justify-start w-screen  lg:pb-28  lg:w-[1160px]'>

                    <div className='py-5'>
                        <p className='font-bold'>Where are you flying?</p>
                    </div>

                    <div className='flex sm:flex-col md:flex-row  items-center justify-center sm:justify-evenly flex-wrap gap-5 lg:gap-10'>

                        <TextField id="outlined-basic" variant="outlined" label="From - To" placeholder='Lahore - Karachi'></TextField>

                        <TextField id="outlined-basic" variant="outlined" label="Trip" placeholder='Reture'></TextField>

                        <TextField id="outlined-basic" variant="outlined" label="Depart - Return" placeholder='07 Nov 22 - 13 NOv 22'></TextField>

                        <TextField id="outlined-basic" variant="outlined" label="Passenger - Class" placeholder='1 Passenger , Economy'></TextField>
                    </div>

                </div>

                <div className='lg:absolute bottom-[10px] right-40  flex gap-4 items-center  justify-center md:items-end md:justify-end md:mr-16'>
                    <button>+ Add Promo Code</button>
                    <button className='home-hero-show-flight-btn flex items-center justify-center text-white '> <img src={showFlightImg} alt="showFlightImg" />Show Flights</button>
                </div>
            </div>


{/* best packages div main */}
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
                        <div className="h-[348px] div-img  bg-[url('./assets/home-page-indonesia.svg')]  w-[300px] sm:w-[410px] lg:w-[337px] rounded-t-lg ">
                            <button className='home-indonedia-price-btn lg:right-[44px]'>&#8377;500</button>
                        </div>


                        <div className=' home-indonesia-card-text-main-div lg:w-[337px]'>

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
                                <button className='home-indonesia-book-now-btn my-7 text-white font-bold btn-hover-effect-blue-to-white-bg'>Book Now</button>
                            </div>

                        </div>
                    </div>

                </div>






                <div className=' w-[300px] sm:w-[410px]'>

                    <div className='flex flex-col  items-center md:flex-col '>
                        <div className="h-[348px] div-img bg-[url('./assets/home-indonesia-img2.svg')] bg-cover w-[300px] sm:w-[410px] rounded-t-lg relative lg:w-[337px]">
                            <button className='home-indonedia-price-btn'>&#8377;500</button>
                        </div>


                        <div className=' home-indonesia-card-text-main-div lg:w-[337px]'>

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
                                <button className='home-indonesia-book-now-btn my-7 text-white font-bold btn-hover-effect-blue-to-white-bg'>Book Now</button>
                            </div>

                        </div>
                    </div>

                </div>


                {/* 3rd indonesia card div */}

                <div className='hidden lg:flex w-[300px] sm:w-[410px] '>

                    <div className='flex flex-col  items-center md:flex-col relative'>
                        <div className="h-[348px] div-img bg-[url('./assets/home-indonesia-img3.svg')] bg-cover w-[300px] sm:w-[410px] rounded-t-lg lg:w-[337px]">
                            <button className='home-indonedia-price-btn'>&#8377;500</button>
                        </div>


                        <div className=' home-indonesia-card-text-main-div lg:w-[337px] '>

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
                                <button className='home-indonesia-book-now-btn my-7 text-white font-bold btn-hover-effect-blue-to-white-bg'>Book Now</button>
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
                <button className='home-hero-discover-btn mt-10 home-all-btn-hover-effects'>Discover Now</button>
            </div>


            {/* island stays */}
            <div className='flex flex-col items-center justify-center text-center mt-9 '>
                <h3 className='font-bold text-[24px] py-2'>Island Stays</h3>
                <p>One can choose from a variety of beautiful coral islands which offers different staying experience from..</p>
            </div>

            {/* island cards main */}
            <div className='mt-16 flex flex-col gap-5 items-center justify-evenly lg:px-16 lg:gap-10  md:flex-row md:flex-wrap '>

                {/* first card div */}
                <div className='flex flex-col w-[300px] sm:w-[404px] sm:px-3 lg:w-[336px]  island-stays-drop-shadow-card   md:px-0  
                '>
                    {/* img div */}
                    <div className='bg-black rounded-[8px]' >
                        <img className='img-tag-effects ' src={homeKaravatiIsland} alt="" />
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

                            <button className='rounded-[5px] md:mr-3 flex items-center justify-center bg-[#3282AD] w-[133px] h-[35px]  text-white font-bold btn-hover-effect-blue-to-white-bg'>Explore More</button>

                        </div>
                    </div>



                </div>





                {/* second card div */}
                <div className='flex flex-col w-[300px]  sm:w-[404px] lg:w-[336px] sm:px-3  island-stays-drop-shadow-card   md:px-0 '>
                    {/* img div */}
                    <div className='bg-black rounded-[8px]'>
                        <img className='img-tag-effects ' src={homeKaravatiIsland} alt="" />
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

                            <button className='rounded-[5px] md:mr-3 flex items-center justify-center bg-[#3282AD] w-[133px] h-[35px]  text-white font-bold btn-hover-effect-blue-to-white-bg'>Explore More</button>

                        </div>
                    </div>



                </div>





                {/* third card div */}
                <div className='flex flex-col w-[300px]  sm:w-[404px] sm:px-3 lg:w-[336px] island-stays-drop-shadow-card   md:px-0 '>
                    {/* img div */}
                    <div className='bg-black rounded-[8px]'>
                        <img className='img-tag-effects ' src={homeKaravatiIsland} alt="" />
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

                            <button className='rounded-[5px] md:mr-3 flex items-center justify-center bg-[#3282AD] w-[133px] h-[35px]  text-white font-bold btn-hover-effect-blue-to-white-bg'>Explore More</button>

                        </div>
                    </div>



                </div>
                {/* third card ends */}



                {/* forth card div */}
                <div className='hidden md:flex flex-col w-[300px]  sm:w-[404px] sm:px-3 lg:w-[336px] island-stays-drop-shadow-card   md:px-0  '>
                    {/* img div */}
                    <div className='bg-black rounded-[8px]'>
                        <img  className='img-tag-effects ' src={homeKaravatiIsland} alt="" />
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

                            <button className='rounded-[5px] md:mr-3 flex items-center justify-center bg-[#3282AD] w-[133px] h-[35px]  text-white font-bold btn-hover-effect-blue-to-white-bg'>Explore More</button>

                        </div>
                    </div>



                </div>
                {/* forth card ends */}





                {/* five card div */}
                <div className='hidden lg:flex flex-col w-[300px]  sm:w-[404px] sm:px-3 lg:w-[336px] island-stays-drop-shadow-card   md:px-0  '>
                    {/* img div */}
                    <div className='bg-black rounded-[8px]'>
                        <img className='img-tag-effects ' src={homeKaravatiIsland} alt="" />
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

                            <button className='rounded-[5px] md:mr-3 flex items-center justify-center bg-[#3282AD] w-[133px] h-[35px]  text-white font-bold btn-hover-effect-blue-to-white-bg'>Explore More</button>

                        </div>
                    </div>



                </div>
                {/* five card ends */}



                {/* six card div */}
                <div className='hidden lg:flex flex-col w-[300px]  sm:w-[404px] sm:px-3 lg:w-[336px] island-stays-drop-shadow-card   md:px-0 '>
                    {/* img div */}
                    <div className='bg-black rounded-[8px]'>
                        <img className='img-tag-effects ' src={homeKaravatiIsland} alt="" />
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

                            <button className='rounded-[5px] md:mr-3 flex items-center justify-center bg-[#3282AD] w-[133px] h-[35px]  text-white font-bold btn-hover-effect-blue-to-white-bg'>Explore More</button>

                        </div>
                    </div>



                </div>
                {/* six card ends */}

            </div>




            {/* contact us container */}
            <div className="bg-[url('./assets/Backfooter.svg')]  h-[197px] flex flex-col items-center justify-center gap-8 md:flex-row md:h-[154px] lg:h-[261px] lg:px-10 md:justify-between mt-24 mx-3 sm:mx-5 lg:mx-24  rounded-[15px]">

                {/* text div */}
                <div className="text-center md:text-left text-white  md:w-[2/5]">
                    <p className='md:font-bold md:text-[20px] lg:w-[451px] lg:text-[42px] lg:leading-[50px] lg:my-[20px]'>Lets Ready to Explore The World With Us.</p>
                    <p className='hidden md:flex'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quis incidunt iusto!</p>
                </div>

                {/* button div */}
                <button className='home-contact-us-btn text-center home-all-btn-hover-effects'>Contact Us</button>

            </div>


            {/* home reviews page */}

            <div className='text-center mx-6 mt-24'>
                <h2 className='font-bold text-[24px] leading-[32px] '>What Our Clients Says About Us</h2>
            </div>



            {/* reviews card main div*/}
            <div className='mt-14  flex items-center justify-center md:justify-evenly'>

                {/* card 1 */}
                <div className='hidden md:flex   w-[300px] sm:w-[410px] md:w-[302px] lg:[w-336px] '>
                    <div className=' flex flex-col items-center justify-center gap-2 px-5 text-center home-client-reviews-card-bg'>
                        <img src={homeclientUserImg} alt="" className='py-3' />
                        <p className='font-bold mt-[-10px] text-[20px]'>Trina Davis</p>
                        <p className='text-[16px] font-bold text-[#555555]'>Toranto, Canada</p>
                        <p className='text-[14px] text-[#5A5A5A] py-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam voluptate veniam repudiandae quod animi, dolorum, tempore duci</p>
                        <p className='flex gap-2 py-2 pb-3'>
                            <img src={clientStarImg} alt="" />
                            <img src={clientStarImg} alt="" />
                            <img src={clientStarImg} alt="" />
                            <img src={clientStarImg} alt="" />
                            <img src={clientStarImg} alt="" />
                        </p>
                    </div>
                </div>



                {/* card 2 */}
                <div className='hidden lg:flex   w-[300px] sm:w-[410px] md:w-[302px] lg:[w-336px] '>
                    <div className=' flex flex-col items-center justify-center gap-2 px-5 text-center home-client-reviews-card-bg'>
                        <img src={homeclientUserImg} alt="" className='py-3' />
                        <p className='font-bold mt-[-10px] text-[20px]'>Trina Davis</p>
                        <p className='text-[16px] font-bold text-[#555555]'>Toranto, Canada</p>
                        <p className='text-[14px] text-[#5A5A5A] py-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam voluptate veniam repudiandae quod animi, dolorum, tempore duci</p>
                        <p className='flex gap-2 py-2 pb-3'>
                            <img src={clientStarImg} alt="" />
                            <img src={clientStarImg} alt="" />
                            <img src={clientStarImg} alt="" />
                            <img src={clientStarImg} alt="" />
                            <img src={clientStarImg} alt="" />
                        </p>
                    </div>
                </div>



                {/* card 3 */}
                <div className='  w-[300px] sm:w-[410px] md:w-[302px] lg:[w-336px] '>
                    <div className='flex flex-col items-center justify-center gap-2 px-5 text-center home-client-reviews-card-bg'>
                        <img src={homeclientUserImg} alt="" className='py-3' />
                        <p className='font-bold mt-[-10px] text-[20px]'>Trina Davis</p>
                        <p className='text-[16px] font-bold text-[#555555]'>Toranto, Canada</p>
                        <p className='text-[14px] text-[#5A5A5A] py-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam voluptate veniam repudiandae quod animi, dolorum, tempore duci</p>
                        <p className='flex gap-2 py-2 pb-3'>
                            <img src={clientStarImg} alt="" />
                            <img src={clientStarImg} alt="" />
                            <img src={clientStarImg} alt="" />
                            <img src={clientStarImg} alt="" />
                            <img src={clientStarImg} alt="" />
                        </p>
                    </div>
                </div>



                {/* review card main div ends */}
            </div>



            <div className='flex items-center justify-center gap-4 py-11'>
                <img src={homeCirclWhiteImg} alt="w" />
                <img src={homeCirlceBlue} alt="w" />
                <img src={homeCirclWhiteImg} alt="w" />
            </div>

        </>
    )
}

export default Home