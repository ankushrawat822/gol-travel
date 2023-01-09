import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineUser } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
import Logo from './assets/logo.svg'
import map from './assets/map.svg'
import gradient from './assets/gradient.svg'
import circle from './assets/circle.svg'
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
    }


    //  mobile package

const [showPmenuMobile, setShowPmenuMobile] = useState(false)

const handlePliClickedEventToCloseMobile = () => {
    setShowPmenuMobile(prev => !prev)
}

const handleOnClickPackageMobile = () => {
    setShowPmenuMobile(prev => !prev)
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
                    <li onClick={handleALliClickedEventToClose}><Link className='flex items-center gap-1'
                                    to='/video'> videos
                                </Link></li>
                                <li onClick={handleALliClickedEventToClose}><Link className='flex items-center gap-1'
                                    to='/at-a-glance'> At A Glance
                                </Link></li>
                                <li onClick={handleALliClickedEventToClose}><Link className='flex items-center gap-1'
                                    to='/island'> Island
                                </Link></li>
                                <li onClick={handleALliClickedEventToClose}><Link className='flex items-center gap-1'
                                    to='/gallery'> Gallery
                                </Link></li>
                                <li onClick={handleALliClickedEventToClose}><Link className='flex items-center gap-1'
                                    to='/attractions'> Attractions
                                </Link></li>
                </ul>
            </div>
            }

            {/*  about lakshwadeep drop down btn ends  */}


             {/* Package drop desktop down btn starts */}

             { showPmenu && <div className='navmenus-package'>
                <ul className='flex flex-col gap-3  navmenus-package-ul'>
                    <li onClick={handlePliClickedEventToClose}><Link className='flex items-center gap-1'
                                    to='/maldives'> Maldives
                                </Link></li>
                               
                </ul>
            </div>
            }

            {/*  package drop down btn ends  */}


{/* desktop navbar starts */}
            <div className='flex items-center justify-between px-16 pt-9 mobile-navbar-style'>

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
                        <ul className='flex  lg:w-[790px] lg:justify-between lg:items-center'>
                            <li>
                            <Link className='flex items-center gap-1'
                                to='/booking'>Find Reservations
                            </Link>
                            </li>
                            <li className='flex items-center gap-1 select-none' onClick={handleOnClickPackage}>
                                
                                Packages <IoIosArrowDown></IoIosArrowDown>
                            </li>
                            <li className='flex items-center gap-1 cursor-pointer select-none' onClick={handleOnClickAboutLakshwadeep}>
                    
                                About Lakshadweep <IoIosArrowDown></IoIosArrowDown>
                            </li>
                            <li>
                            <Link className='flex items-center gap-1'
                                to='/about'>About
                            </Link>
                            </li>
                            <li>
                            <Link className='flex items-center gap-1'
                                to='/gol'>Gol
                            </Link>
                            </li>
                            <li>
                                <Link className='flex items-center gap-1'
                                    to='/support'>Support
                                </Link>
                            </li>
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



            {/* mobile meny links div */}
            {showMenu && <div>
                <div className='mobile-menu-links-conatiner'>
                    <ul className='flex-col gap-20'>
                        <li>
                            Find Reservations
                        </li>
                        <li className='flex items-center gap-1' onClick={handleOnClickPackageMobile}>
                           
                            Packages <IoIosArrowDown></IoIosArrowDown>
                        </li>

                          {/* Packages drop down btn starts */}

            { showPmenuMobile && <div className='navmenus-about-lakshwadeep-mobile'>
                <ul className='flex flex-col gap-3'>
                    <li onClick={handlePliClickedEventToCloseMobile}><Link className='flex items-center gap-1'
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
                    <li onClick={handleALliClickedEventToCloseMobile}><Link className='flex items-center gap-1'
                                    to='/video'> videos
                                </Link></li>
                                <li onClick={handleALliClickedEventToCloseMobile}><Link className='flex items-center gap-1'
                                    to='/at-a-glance'> At A Glance
                                </Link></li>
                                <li onClick={handleALliClickedEventToCloseMobile}><Link className='flex items-center gap-1'
                                    to='/island'> Island
                                </Link></li>
                                <li onClick={handleALliClickedEventToCloseMobile}><Link className='flex items-center gap-1'
                                    to='/gallery'> Gallery
                                </Link></li>
                                <li onClick={handleALliClickedEventToCloseMobile}><Link className='flex items-center gap-1'
                                    to='/attractions'> Attractions
                                </Link></li>
                </ul>
            </div>
            }

            {/*  about lakshwadeep drop down btn ends  */}
                        <li>
                        <Link className='flex items-center gap-1'
                                to='/about'>About
                            </Link>
                        </li>
                        <li>
                        <Link className='flex items-center gap-1'
                                to='/gol'>Gol
                            </Link>
                        </li>
                        <li>
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