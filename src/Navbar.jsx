import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineUser } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
import Logo from './assets/logo.svg'
import map from './assets/map.svg'
import gradient from './assets/gradient.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [showALmenu, setShowALmenu] = useState(false)

    const handleOnClickAboutLakshwadeep = () => {
        setShowALmenu(prev => !prev)
    }

    const handleALliClickedEventToClose = () => {
        setShowALmenu(prev => !prev)
    }

// package menu
    const [showPmenu, setShowPmenu] = useState(false)

    const handleOnClickPackage = () => {
        setShowPmenu(prev => !prev)
        console.log('hello')
    }

    const handlePliClickedEventToClose = () => {
        setShowPmenu(prev => !prev)
    }


//  mobile about lakshawadeep

const [showALmenuMobile, setShowALmenuMobile] = useState(false)

    const handleALliClickedEventToCloseMobile = () => {
        setShowALmenuMobile(prev => !prev)
    }

    const handleOnClickAboutLakshwadeepMobile = () => {
        setShowALmenuMobile(prev => !prev)
    }


    // mobile all menu links

    const [showMenu, setShowMenu] = useState(false)

    const handelMenu = () => {
        setShowMenu(prev => !prev);

        if(document.body.classList.contains('fixed-body-class')){
            document.body.classList.remove('fixed-body-class');
            console.log("removed")
        } else {
            document.body.classList.add('fixed-body-class');
            console.log('added')
        }
    }


    //  mobile package

const [showPmenuMobile, setShowPmenuMobile] = useState(false)

const handlePliClickedEventToCloseMobile = () => {
    setShowPmenuMobile(prev => !prev)
}

const handleOnClickPackageMobile = () => {
    setShowPmenuMobile(prev => !prev)
}


// navbar blue indicator div
 const [findBookingIndicator , setFindBookingIndicator] = useState(false)

 const [AboutIndicator , setAboutIndicator] = useState(false)

 const [GolIndicator , setGolIndicator] = useState(false)

 const [SupportIndicator , setSupportIndicator] = useState(false)

 const [MaldivesIndicator , setMaldivesIndicator] = useState(false)

 const [AboutLakshwadeepIndicator , setAboutLakshwadeepIndicator] = useState(false)


 const handelFindBookingShow = () =>{
    setGolIndicator(false)
    setFindBookingIndicator(true)
    setAboutIndicator(false)
    setSupportIndicator(false)
    setMaldivesIndicator(false)
    setAboutLakshwadeepIndicator(false)
 }

 const handelAboutShow = () =>{
    setGolIndicator(false)
    setFindBookingIndicator(false)
    setAboutIndicator(true)
    setSupportIndicator(false)
    setMaldivesIndicator(false)
    setAboutLakshwadeepIndicator(false)
 }

 const handelGolShow = () =>{
    setGolIndicator(true)
    setFindBookingIndicator(false)
    setAboutIndicator(false)
    setSupportIndicator(false)
    setMaldivesIndicator(false)
    setAboutLakshwadeepIndicator(false)
 }

 const handelSupportShow = () =>{
    setGolIndicator(false)
    setFindBookingIndicator(false)
    setAboutIndicator(false)
    setSupportIndicator(true)
    setMaldivesIndicator(false)
    setAboutLakshwadeepIndicator(false)
 }

 const handelMaldivesShow = () =>{
    setGolIndicator(false)
    setFindBookingIndicator(false)
    setAboutIndicator(false)
    setSupportIndicator(false)
    setMaldivesIndicator(true)
    setAboutLakshwadeepIndicator(false)
 }


//  about lakshwadeep all btn 
const handelVideosShow = () =>{
    setGolIndicator(false)
    setFindBookingIndicator(false)
    setAboutIndicator(false)
    setSupportIndicator(false)
    setMaldivesIndicator(false)
    setAboutLakshwadeepIndicator(true)
 }

 const handelGalleryShow = () =>{
    setGolIndicator(false)
    setFindBookingIndicator(false)
    setAboutIndicator(false)
    setSupportIndicator(false)
    setMaldivesIndicator(false)
    setAboutLakshwadeepIndicator(true)
 }

 const handelIslandShow = () =>{
    setGolIndicator(false)
    setFindBookingIndicator(false)
    setAboutIndicator(false)
    setSupportIndicator(false)
    setMaldivesIndicator(false)
    setAboutLakshwadeepIndicator(true)
 }

 const handelAtAGlanceShow = () =>{
    setGolIndicator(false)
    setFindBookingIndicator(false)
    setAboutIndicator(false)
    setSupportIndicator(false)
    setMaldivesIndicator(false)
    setAboutLakshwadeepIndicator(true)
 }

 const handelAttractionShow = () =>{
    setGolIndicator(false)
    setFindBookingIndicator(false)
    setAboutIndicator(false)
    setSupportIndicator(false)
    setMaldivesIndicator(false)
    setAboutLakshwadeepIndicator(true)
 }



//  hide package indicator
const handleHidePackageIndicator = () =>{
    if(MaldivesIndicator){
        setMaldivesIndicator(false)
    }
}

//  hide AboutLakshwadeep indicator
const handleAboutLakshwadeepIndicator = () =>{
    if(AboutLakshwadeepIndicator){
        setAboutLakshwadeepIndicator(false)
    }
}

    return (
        <>
            <div className='map-div outter-map-div'>
                <img className='gradient-div map-img' src={gradient} alt="gradient" />
                <img className='map-img' src={map} alt="map" />
                <div className='position-circle'>
                    {/* <img className='center-circle' src={circle} alt='circle' /> */}
                    <div class="circles">
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                </div>
            </div>


            {/* about lakshwadeep drop desktop down btn starts */}

            { showALmenu && <div className='navmenus-about-lakshwadeep'>
                <ul className='flex flex-col gap-3 navmenus-about-lakshwadeep-ul'>
                    <li onClick={handleALliClickedEventToClose}><Link onClick={handelVideosShow} className='flex items-center gap-1'
                                    to='/video'> videos
                                </Link></li>
                                <li onClick={handleALliClickedEventToClose}><Link onClick={handelAtAGlanceShow} className='flex items-center gap-1'
                                    to='/at-a-glance'> At A Glance
                                </Link></li>
                                <li onClick={handleALliClickedEventToClose}><Link onClick={handelIslandShow} className='flex items-center gap-1'
                                    to='/island'> Island
                                </Link></li>
                                <li onClick={handleALliClickedEventToClose}><Link onClick={handelGalleryShow} className='flex items-center gap-1'
                                    to='/gallery'> Gallery
                                </Link></li>
                                <li onClick={handleALliClickedEventToClose}><Link onClick={handelAttractionShow} className='flex items-center gap-1'
                                    to='/attractions'> Attractions
                                </Link></li>
                </ul>
            </div>
            }

            {/*  about lakshwadeep drop down btn ends  */}


             {/* Package drop desktop down btn starts */}

             { showPmenu && <div className='navmenus-package'>
                <ul className='flex flex-col gap-3  navmenus-package-ul'>
                    <li onClick={handlePliClickedEventToClose}><Link onClick={handelMaldivesShow} className='flex items-center gap-1'
                                    to='/maldives'> Maldives
                                </Link></li>
                               
                </ul>
            </div>
            }

            {/*  package drop down btn ends  */}


{/* desktop navbar starts */}
            <div className='flex items-center justify-between px-10 pt-9 mobile-navbar-style'>

                <div className='lg:hidden ' >
                    <RxHamburgerMenu onClick={handelMenu} className='w-10 h-10 text-[#056499]'></RxHamburgerMenu>
                </div>

                <div>
                    {/* logo */}
                    <div className=''>
                        <a href="/"><img className='w-33' src={Logo} alt="logo" /></a>
                    </div>
                </div>

                {/* links */}

                <div className='hidden lg:flex'>
                    <div className='navbar-desktop-div-hover'>
                        <ul className='flex  lg:w-[740px]  lg:justify-between lg:items-center'>

                        <div className='relative flex flex-col items-center justify-center gap-3'>
                        <li onClick={handelFindBookingShow} className='' >
                            <Link className='flex items-center gap-1'
                                to='/booking'>Find Reservations
                            </Link>
                            </li>
 
                            {/* nav indicator div */}
                            <div className={` ${findBookingIndicator ? ' nav-bar-below-small-line mt-12 absolute ' : ' hidden ' } `}></div>
                        </div>
                           

                            {/* <li className='flex items-center gap-1 select-none' onClick={handleOnClickPackage}>
                                
                                Packages <IoIosArrowDown></IoIosArrowDown>
                            </li> */}

                             <div className='relative flex flex-col items-center justify-center gap-3'>
                             <li className='flex items-center gap-1 select-none' onClick={()=> {handleOnClickPackage(); handleHidePackageIndicator();}}>
                                
                                Packages <IoIosArrowDown></IoIosArrowDown>
                            </li>
 
                            {/* nav indicator div */}
                            <div className={` ${MaldivesIndicator ? ' nav-bar-below-small-line mt-12 absolute ' : ' hidden ' } `}></div>
                        </div>
                       

                    {/* about lakshwadeep nav btn  */}
                          <div className='relative flex flex-col items-center justify-center gap-3'>
                            <li className='flex items-center gap-1 cursor-pointer select-none' onClick={()=> {handleOnClickAboutLakshwadeep(); handleAboutLakshwadeepIndicator();}}>
                    
                    About Lakshadweep <IoIosArrowDown></IoIosArrowDown>
                </li>
 
                            {/* nav indicator div */}
                            <div className={` ${AboutLakshwadeepIndicator ? ' nav-bar-below-small-line mt-12 absolute ' : ' hidden ' } `}></div>
                        </div>


                            {/* <li>
                            <Link className='flex items-center gap-1'
                                to='/about'>About
                            </Link>
                            </li> */}
                            <div className='relative flex flex-col items-center justify-center gap-3'>
                        <li onClick={handelAboutShow} className='' >
                            <Link className='flex items-center gap-1'
                                to='/about'>About
                            </Link>
                            </li>
 
                            {/* nav indicator div */}
                            <div className={` ${AboutIndicator ? ' nav-bar-below-small-line mt-12 absolute ' : ' hidden ' } `}></div>
                        </div>
                            {/* <li>
                            <Link className='flex items-center gap-1'
                                to='/gol'>Gol
                            </Link>
                            </li> */}

                            <div className='relative flex flex-col items-center justify-center gap-3'>
                        <li onClick={handelGolShow} className='' >
                            <Link className='flex items-center gap-1'
                                to='/gol'>Gol
                            </Link>
                            </li>
 
                            {/* nav indicator div */}
                            <div className={` ${GolIndicator ? ' nav-bar-below-small-line mt-12 absolute ' : ' hidden ' } `}></div>
                        </div>

                            
                            {/* <li>
                                <Link className='flex items-center gap-1'
                                    to='/support'>Support
                                </Link>
                            </li> */}

                            <div className='relative flex flex-col items-center justify-center gap-3'>
                        <li onClick={handelSupportShow} className='' >
                            <Link className='flex items-center gap-1'
                                to='/support'>Support
                            </Link>
                            </li>
 
                            {/* nav indicator div */}
                            <div className={` ${SupportIndicator ? ' nav-bar-below-small-line mt-12 absolute ' : ' hidden ' } `}></div>
                        </div>
                        </ul>
                    </div>
                </div>





                <div className='flex w-10 h-10 bg-[#056499] rounded-full items-center justify-center lg:hidden'>
                    <AiOutlineUser className='text-[30px] text-white'></AiOutlineUser>
                </div>

                {/* desktop  */}
                <div className='hidden lg:flex'>
                    <button className='mr-2'>login</button>

                    <div className='p-2 bg-[#056499] rounded-full text-white px-4'>
                        <button >Sign Up</button>
                    </div>

                </div>

            </div>



            {/* mobile menu links div */}
            {showMenu && <div className='absolute mobile-nav-no-scrolling w-screen h-screen bg-[#E5F8FE]'>
                <div className='mobile-menu-links-conatiner '>
                    <ul className='flex-col gap-20'>
                        <li onClick={handelMenu}>
                        <Link className='flex items-center gap-1'
                                to='/booking'>Find Reservations
                            </Link>
                        </li>
                        <li className='flex items-center gap-1' onClick={handleOnClickPackageMobile}>
                           
                            Packages <IoIosArrowDown></IoIosArrowDown>
                        </li>

                          {/* Packages drop down btn starts */}

            { showPmenuMobile && <div className='navmenus-about-lakshwadeep-mobile'>
                <ul className='flex flex-col gap-3'>
                    <li  onClick={() => {
                  handlePliClickedEventToCloseMobile();
                  handelMenu();
                }}><Link className='flex items-center gap-1'
                                    to='/maldives'> Maldives
                                </Link></li>
                               
                </ul>
            </div>
            }

            {/*  Packages drop down btn ends  */}




                        <li className='flex items-center gap-1' onClick={handleALliClickedEventToCloseMobile}>
                          
                            About Lakshadweep <IoIosArrowDown></IoIosArrowDown>

                        </li>
                          {/* about lakshwadeep drop down btn starts */}

            { showALmenuMobile && <div className='navmenus-about-lakshwadeep-mobile'>
                <ul className='flex flex-col gap-3'>
                    <li  onClick={() => {
                  handlePliClickedEventToCloseMobile();
                  handelMenu()}}><Link className='flex items-center gap-1'
                                    to='/video'> videos
                                </Link></li>
                                <li   onClick={() => {
                  handlePliClickedEventToCloseMobile();
                  handelMenu()}}><Link className='flex items-center gap-1'
                                    to='/at-a-glance'> At A Glance
                                </Link></li>
                                <li onClick={() => {
                  handlePliClickedEventToCloseMobile();
                  handelMenu()}}><Link className='flex items-center gap-1'
                                    to='/island'> Island
                                </Link></li>
                                <li onClick={() => {
                  handlePliClickedEventToCloseMobile();
                  handelMenu()}}><Link className='flex items-center gap-1'
                                    to='/gallery'> Gallery
                                </Link></li>
                                <li onClick={() => {
                  handlePliClickedEventToCloseMobile();
                  handelMenu()}}><Link className='flex items-center gap-1'
                                    to='/attractions'> Attractions
                                </Link></li>
                </ul>
            </div>
            }

            {/*  about lakshwadeep drop down btn ends  */}
                        <li onClick={handelMenu}>
                        <Link className='flex items-center gap-1'
                                to='/about'>About
                            </Link>
                        </li>
                        <li onClick={handelMenu}>
                        <Link className='flex items-center gap-1'
                                to='/gol'>Gol
                            </Link>
                        </li>
                        <li onClick={handelMenu}>
                            <Link className='flex items-center gap-1'
                                to='/support'>Support
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>}

        </>

    )
}

export default Navbar