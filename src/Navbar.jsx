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


//  mobile

const [showALmenuMobile, setShowALmenuMobile] = useState(false)

    const handleALliClickedEventToCloseMobile = () => {
        setShowALmenuMobile(prev => !prev)
    }

    const handleOnClickAboutLakshwadeepMobile = () => {
        setShowALmenuMobile(prev => !prev)
    }

    const [showMenu, setShowMenu] = useState(false)

    const handelMenu = () => {
        setShowMenu(prev => !prev);
    }
    return (
        <>
            <div className='map-div outter-map-div'>
                <img className='gradient-div map-img' src={gradient} alt="gradient" />
                <img className='map-img' src={map} alt="map" />
                <div className='position-circle'>
                    <img className='center-circle' src={circle} alt='circle' />
                </div>
            </div>


            {/* about lakshwadeep drop down btn starts */}

            { showALmenu && <div className='navmenus-about-lakshwadeep'>
                <ul className='flex flex-col gap-3'>
                    <li onClick={handleALliClickedEventToClose}><Link className='flex items-center gap-1'
                                    to='/video'> videos
                                </Link></li>
                                <li onClick={handleALliClickedEventToClose}><Link className='flex items-center gap-1'
                                    to='/at-a-glance'> At A Glance
                                </Link></li>
                                <li onClick={handleALliClickedEventToClose}><Link className='flex items-center gap-1'
                                    to='/island'> Island
                                </Link></li>
                </ul>
            </div>
            }

            {/*  about lakshwadeep drop down btn ends  */}

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
                    <div>
                        <ul className='flex gap-x-9'>
                            <li>
                                Find Reservations
                            </li>
                            <li className='flex items-center gap-1 select-none'>
                                <Link className='flex items-center gap-1'
                                    to='/package'>Packages <IoIosArrowDown></IoIosArrowDown>
                                </Link>
                            </li>
                            <li className='flex items-center gap-1 cursor-pointer select-none' onClick={handleOnClickAboutLakshwadeep}>
                    
                                About Lakshadweep <IoIosArrowDown></IoIosArrowDown>
                            </li>
                            <li>
                                About Us
                            </li>
                            <li>
                                Gol
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
                        <li className='flex items-center gap-1'>
                            <Link className='flex items-center gap-1'
                                to='/package'>Packages <IoIosArrowDown></IoIosArrowDown>
                            </Link>
                        </li>
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
                </ul>
            </div>
            }

            {/*  about lakshwadeep drop down btn ends  */}
                        <li>
                            About Us
                        </li>
                        <li>
                            Gol
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