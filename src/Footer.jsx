import React, { useState } from 'react'
import sociallinks from './assets/sociallinks.svg'
import download from './assets/download.svg'
import footerlogo from './assets/footerlogo.svg'
import footerMobilePlaystoreImg from './assets/footer-mobile-playstore-img.svg'
import { IoIosArrowDown } from 'react-icons/io'



const Footer = () => {

    const [showCompany, setShowCompany] = useState(false)

    const handelCompany = () => {
        setShowCompany(prev => !prev)
    }

    const [showAbout, setShowAbout] = useState(false)

    const handelAbout = () => {
        setShowAbout(prev => !prev)
    }

    const [showContact, setShowContact] = useState(false)

    const handelContact = () => {
        setShowContact(prev => !prev)
    }


    return (
        <>
            <div className='hidden md:block'>

                <div className='footer-playstore-container flex justify-center items-center'>
                    <div className='downoad-img-div'>

                        <div className='inner-download-img'>
                            <h1 className='text-white'>Download our app</h1>
                            <p className='text-white'>The best travel app in the world</p>
                            <img className='download-img object-cover' src={download} alt="download" />
                        </div>


                    </div>
                </div>


                <div className='footer-background-blue-div'>


                    <div className='footer-four-div-container'>

                        <div className='footer-blue-first-div mobile-style-footer-blue-first'>
                            <img className='my-4' src={footerlogo} alt="footer" />
                            <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque officiis quia quibusdam!</p>
                        </div>

                        <div className='footer-blue-first-div'>

                            <ul className='text-white'>
                                <li className='text-xl my-4'>Company</li>
                                <li className='my-2'>Events</li>
                                <li className='my-2'>Blogs</li>
                                <li className='my-2'>FAQ</li>
                                <li className='my-2'>Join US</li>
                            </ul>
                        </div>

                        <div className='footer-blue-first-div'>

                            <ul className='text-white'>
                                <li className='text-xl my-4'>About</li>
                                <li className='my-2'>Project</li>
                                <li className='my-2'>Lorem</li>
                                <li className='my-2'>Services</li>
                                <li className='my-2'>Our Story</li>
                            </ul>
                        </div>

                        <div className='footer-blue-last-div'>

                            <ul className='text-white'>
                                <li className='text-xl my-4'>Contact Us</li>
                                <li className='my-2'>abc@lorem.com</li>
                                <li className='my-2'>India</li>

                            </ul>
                        </div>


                    </div>

                    <div className='footer-end-div'>
                        <img src={sociallinks} alt="social" />
                        <hr className='my-5' />

                    </div>
                    <div className='flex items-center justify-center text-center'>
                        <p className='text-white'>Copyright &#169; 2023 GoL Travels Private Limited. All Rights Reserved.</p>
                    </div>

                </div>


            </div>




            {/* mobile footer  */}

   <div className='block md:hidden'>

  
            <div className='relative flex items-center justify-center z-10'>
                <div className='relative bg-[url("./assets/footer-mobile-playstore-img.svg")] bg-cover w-screen mx-10 h-[103px] flex items-center justify-between px-3' >
                    {/* text */}
                    <div className='w-3/5'>
                        <p className='text-white text-[16px] py-1 '>Download Our App</p>
                        <p className='text-white py-4 text-[13px]'>The best travel in the world</p>
                    </div>
                    {/* play stre img */}
                    <div className='px-1 w-[64px] h-[30px] '>
                        <img src={download} alt="" />
                    </div>
                </div>
            </div>

            <div className='bg-[url("./assets/Backfooter.svg")] bg-cover w-screen mt-[-50px] pb-8'>
                <div className=' pt-20 text-white flex flex-col items-center justify-center'>


                    <div className='flex items-center justify-center gap-1'>
                        <p onClick={handelCompany} className='font-bold text-[18px] mb-2'>Company</p>
                        <IoIosArrowDown></IoIosArrowDown>
                    </div>

                    <ul className={`${showCompany ? ` flex ` : ' hidden '}flex-col items-center justify-center gap-2`}>
                        <li>Events</li>
                        <li>Blogs</li>
                        <li>FAQ</li>
                        <li>Join </li>
                    </ul>
                </div>


                <div className='pt-4 text-white flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center gap-1'>
                        <p onClick={handelAbout} className='font-bold text-[18px] mb-2'>About</p>
                        <IoIosArrowDown></IoIosArrowDown>
                    </div>
                    <ul className={`${showAbout ? ` flex ` : ' hidden '}flex-col items-center justify-center gap-2`}>
                        <li>Events</li>
                        <li>Blogs</li>
                        <li>FAQ</li>
                        <li>Join </li>
                    </ul>
                </div>


                <div className='pt-4 text-white flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center gap-1'>
                        <p onClick={handelContact} className='font-bold text-[18px] mb-2'>Contact</p>
                        <IoIosArrowDown></IoIosArrowDown>
                    </div>
                    <ul className={`${showContact ? ` flex ` : ' hidden '}flex-col items-center justify-center gap-2`}>
                        <li>Events</li>
                        <li>Blogs</li>
                        <li>FAQ</li>
                        <li>Join </li>
                    </ul>
                </div>


                <div className=' flex items-center justify-center mt-4'>
                        <img src={sociallinks} alt="social" />
                </div>
                 <div className='flex items-center justify-center w-screen px-10 bg-white h-[1px] my-5'></div>
                <div className='flex items-center justify-center text-center'>
                        <p className='text-white'>Copyright &#169; 2023 GoL Travels Private Limited. All Rights Reserved.</p>
                    
                    </div>




            </div>

           


            </div>




        </>
    )
}

export default Footer