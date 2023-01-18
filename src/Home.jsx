import React, { useState, useEffect } from 'react'
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
import homeHeroIllustrationBg from './assets/home-hero-illustration-bg.svg'
import homeHeroIllustratioGirlImg from './assets/home-hero-illustration-girl-img.png'
import homeHeroIcbaselineflight from './assets/home-hero-icbaselineFlightImg.svg'
import homeHeroIllustrationFrame from './assets/home-hero-illustration-frame.svg'
import homeHeroIllustrationRectangle9 from './assets/rectangle-9@2x.png'
import homeHeroIllustrationRectangle912x from './assets/rectangle-91@2x.png'


const Home = () => {


    //  data and functions of home page "best package for you section starts"
    //   size 
    const [size, setSize] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })


    const windowDimension = () => {
        setSize({
            height: window.innerHeight,
            width: window.innerWidth
        })
    }



    useEffect(() => {

        window.addEventListener('resize', windowDimension)
        return () => window.removeEventListener('resize', windowDimension)

    }, [size])



    const maldivesData = [
        {
            id: 1,
            price: "500",
            bgImg: "home-indonesia-img2.svg",
            place: "Indonesia",
            rating: "4.4",
            disc: "Explore the Beauty of the island for 3 days and 2 nights with our travel agency...",
            showSize: 300

        },
        {
            id: 2,
            price: "600",
            bgImg: "home-indonesia-img2.svg",
            place: "Indonesia",
            rating: "4.5",
            disc: "Explore the Beauty of the island for 3 days and 2 nights with our travel agency...",
            showSize: 768
        },
        {
            id: 3,
            price: "700",
            bgImg: "home-indonesia-img2.svg",
            place: "Indonesia",
            rating: "4.7",
            disc: "Explore the Beauty of the island for 3 days and 2 nights with our travel agency...",
            showSize: 1024
        },
    ]


    const samudramData = [
        {
            id: 1,
            price: "400",
            bgImg: "home-indonesia-img3.svg",
            place: "Samudram",
            rating: "4.8",
            disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
            showSize: 300

        },
        {
            id: 2,
            price: "700",
            bgImg: "home-indonesia-img3.svg",
            place: "Samudram",
            rating: "4.6",
            disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
            showSize: 768
        },
        {
            id: 3,
            price: "100",
            bgImg: "home-indonesia-img3.svg",
            place: "Samudram",
            rating: "4.1",
            disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ..",
            showSize: 1024
        },
    ]


    const cordeliaData = [
        {
            id: 1,
            price: "500",
            bgImg: "home-indonesia-img2.svg",
            place: "Cordelia",
            rating: "3.8",
            disc: "printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply ",
            showSize: 300

        },
        {
            id: 2,
            price: "500",
            bgImg: "home-indonesia-img2.svg",
            place: "Cordelia",
            rating: "3.6",
            disc: "printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply ",
            showSize: 768

        },
        {
            id: 3,
            price: "500",
            bgImg: "home-indonesia-img2.svg",
            place: "Cordelia",
            rating: "3.1",
            disc: " printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply",
            showSize: 1024

        },
    ]

    const AgattiData = [
        {
            id: 1,
            price: "900",
            bgImg: "home-indonesia-img3.svg",
            place: "Agatti",
            rating: "4.8",
            disc: "dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply ",
            showSize: 300
        },
        {
            id: 2,
            price: "900",
            bgImg: "home-indonesia-img3.svg",
            place: "Agatti",
            rating: "4.6",
            disc: "dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply ",
            showSize: 768
        },
        {
            id: 3,
            price: "900",
            bgImg: "home-indonesia-img3.svg",
            place: "Agatti",
            rating: "5.0",
            disc: "dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply",
            showSize: 1024
        },
    ]


    const MoreData = [
        {
            id: 1,
            price: "200",
            bgImg: "home-indonesia-img2.svg",
            place: "More places",
            rating: "3.8",
            disc: " text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply ",
            showSize: 300
        },
        {
            id: 2,
            price: "200",
            bgImg: "home-indonesia-img3.svg",
            place: "More places",
            rating: "4.3",
            disc: " text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply ",
            showSize: 768
        },
        {
            id: 3,
            price: "200",
            bgImg: "home-indonesia-img2.svg",
            place: "More places",
            rating: "3.3",
            disc: " text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply",
            showSize: 1024
        },
    ]

    const [maldives, setMaldives] = useState(maldivesData)


    // bg color of btn useState
    const [blueBgM, setBlueBgM] = useState(true)
    const [blueBgS, setBlueBgS] = useState(false)
    const [blueBgC, setBlueBgC] = useState(false)
    const [blueBgA, setBlueBgA] = useState(false)
    const [blueBgMore, setBlueBgMore] = useState(false)


    // buttons 
    const handelSamudramBtn = () => {
        setMaldives(samudramData)
        setBlueBgS(true)
        setBlueBgA(false)
        setBlueBgM(false)
        setBlueBgC(false)
        setBlueBgMore(false)
    }

    const handelMaldivesBtn = () => {
        setMaldives(maldivesData)
        setBlueBgS(false)
        setBlueBgA(false)
        setBlueBgM(true)
        setBlueBgC(false)
        setBlueBgMore(false)
    }

    const handelCordeliaBtn = () => {
        setMaldives(cordeliaData)
        setBlueBgS(false)
        setBlueBgA(false)
        setBlueBgM(false)
        setBlueBgC(true)
        setBlueBgMore(false)
    }

    const handelAgattiBtn = () => {
        setMaldives(AgattiData)
        setBlueBgS(false)
        setBlueBgA(true)
        setBlueBgM(false)
        setBlueBgC(false)
        setBlueBgMore(false)
    }

    const handelMoreBtn = () => {
        setMaldives(MoreData)
        setBlueBgS(false)
        setBlueBgA(false)
        setBlueBgM(false)
        setBlueBgC(false)
        setBlueBgMore(true)
    }

    //  data and functions of home page "best package for you section ends"


    //  data and functions of home page "clients section starts"

    const client1Data = [
        {
            id: 1,

            bgImg: "./homeClient2img3.svg",
            name: "Roman Roy",
            place: "Toranto, Canada",
            disc: "text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply",
            star: [{
                one: 1
            },
            {
                one: 1
            },
            {
                one: 1
            },
            {
                one: 1
            }, {
                one: 1
            },


            ],
            showSize: 300
        },
        {
            id: 2,

            bgImg: "./homeClient2img2.svg",
            name: "Alex Tom",
            place: "Paris, France",
            disc: "text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply ",
            star: [{
                one: 1
            },
            {
                one: 1
            },
            {
                one: 1
            },
            {
                one: 1
            }, {
                one: 1
            },


            ],
            showSize: 768
        },
        {
            id: 3,

            bgImg: "./homeClient2img2.svg",
            name: "Finn Balor",
            place: "Indore, India",
            disc: "text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply",
            star: [{
                one: 1
            },
            {
                one: 1
            },
            {
                one: 1
            },

            ],
            showSize: 1024
        },
    ]

    const client2Data = [

        {
            id: 1,

            bgImg: "./homeClient2img1.svg",
            name: "Roman Roy",
            place: "Indore, India",
            disc: "dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply ",
            star: [{
                one: 1
            },
            {
                one: 1
            },
            {
                one: 1
            },

            ],
            showSize: 300
        },

        {
            id: 2,

            bgImg: "./homeClient2img2.svg",
            name: "Alex Tom",
            place: "Paris, France",
            disc: "dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply ",
            star: [{
                one: 1
            },
            {
                one: 1
            },
            {
                one: 1
            },
            {
                one: 1
            },


            ],
            showSize: 768
        },

        {
            id: 3,

            bgImg: "./homeClient2img3.svg",
            name: "Finn Balor",
            place: "Toranto, Canada",
            disc: "dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply",
            star: [{
                one: 1
            },
            {
                one: 1
            },
            {
                one: 1
            },
            {
                one: 1
            }, {
                one: 1
            },


            ],
            showSize: 1024
        },
    ]


    const client3Data = [
        {
            id: 1,
            bgImg: "./homeClient2img2.svg",
            name: "Finn Balor",
            place: "Toranto, Canada",
            disc: "Explore the Beauty of the island for 3 days and 2 nights with our travel agency.. ",
            star: [{
                one: 1
            },
            {
                one: 1
            },
            {
                one: 1
            },

            ],
            showSize: 300
        },
        {
            id: 2,

            bgImg: "./homeClient2img3.svg",
            name: "Alex Tom",
            place: "Paris, France",
            disc: "Explore the Beauty of the island for 3 days and 2 nights with our travel agency.. ",
            star: [{
                one: 1
            },
            {
                one: 1
            },
            {
                one: 1
            },
            {
                one: 1
            }, {
                one: 1
            },


            ],
            showSize: 768
        },
        {
            id: 3,

            bgImg: "./homeClient2img1.svg",
            name: "Roman Roy",
            place: "Indore, India",
            disc: "Explore the Beauty of the island for 3 days and 2 nights with our travel agency..",
            star: [{
                one: 1
            },
            {
                one: 1
            },
            {
                one: 1
            },
            {
                one: 1
            },


            ],
            showSize: 1024
        },
    ]



    const [clients, setClients] = useState(client2Data)


    // small circle div btn color usestate
    const [circle1, setCircle1] = useState(false)
    const [circle2, setCircle2] = useState(true)
    const [circle3, setCircle3] = useState(false)

    const handleSmallDiv1 = () => {
        setClients(client1Data)
        setCircle1(true)
        setCircle2(false)
        setCircle3(false)
    }

    const handleSmallDiv2 = () => {
        setClients(client2Data)
        setCircle2(true)
        setCircle1(false)
        setCircle3(false)
    }

    const handleSmallDiv3 = () => {
        setClients(client3Data)
        setCircle3(true)
        setCircle2(false)
        setCircle1(false)
    }


    //  illustration logic 

  
      
      
    
    const content1 = [
        {
            img1: 'galleryImg2.svg' ,
            img2 : 'galleryImg3.svg' ,
            upperText : "London - Paris" ,
            text1 : 'Lorem Ipsum Dolor' ,
            text2 : 'simply dummy text',
            lightText: 'DML, Japan'


        }
    ]


    const content2 = [
        {
            img1: 'galleryImg5.svg' ,
            img2 : 'galleryImg4.svg' ,
            upperText : "Beijin - China" ,
            text1 : 'Contrary to popula' ,
            text2 : 'Latin literature from',
            lightText: 'XML, Asia'

        }
    ]



    const content3 = [
        {
            img1: 'galleryImg1.svg' ,
            img2 : 'galleryImg2.svg' ,
            upperText : "Delhi - India" ,
            text1 : ' majority have sufred' ,
            text2 : ' dummy simply text',
            lightText: 'APR, Karavatti'

        }
    ]

    const [currentContent , setCurrentContent] =  useState(content1)



    const [test , setTest] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
        
            if(test === 0){
                setCurrentContent(content1)
                console.log("1")
                setTest(1)
            } else if(test === 1){
                setCurrentContent(content2)
               console.log("2")
               setTest(2)
            }
            else if(test === 2){
                setCurrentContent(content3)
               console.log("2")
               setTest(0)
            }
           
    
        }, 2000);
      
       
        return () => clearInterval(interval);
      }, [test]);
    

    return (
        <>
        <div>
            <div className='mt-16'>
                {/* hero section */}
                <div className='home-hero-main-div lg:gap-32 '>

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

                        <button className='home-hero-discover-btn mt-10 home-all-btn-hover-effects'>Discover Now</button>

                    </div>


                  { currentContent.map((data)=> (  <div className='hero-img-or-svg-section mt-[228px] md:mt-0'>
                        {/* <img src={homeHeroGirl} alt="homeHeroGirl" /> */}
                         <div className="illustration ">
                            <div className="illustration-child"></div><img className="bg-icon" alt="" src={homeHeroIllustrationBg} /><img
                                className="people-icon" alt="" src={homeHeroIllustratioGirlImg} />
                            <div className="item">
                                <div className="icbaseline-flight-parent"><img className="icbaseline-flight-icon" alt=""
                                    src={homeHeroIcbaselineflight} />
                                    <div className="jakarta-bali"> {data.upperText} </div>
                                </div>
                                <div className="frame-wrapper"><img className="frame-icon" alt="" src={homeHeroIllustrationFrame} /></div>
                                <div className="card" />
                                <div className="card-child"></div><img className="card-item" alt="" src={data.img1} />
                                <div className="explore-labuan-bajo-parent">
                                    <h2 className="explore-labuan-bajo">{data.text1}</h2>
                                    <div className="iconlyboldlocation-parent"><img className="iconlyboldlocation" alt=""
                                        src={homelocationIcon} />
                                        <p className="ntt-indonesua"> {data.lightText} </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card1">
                                <div className="card-inner">
                                <div className="home-hero-illustration-small-div">
                                    <h2 className="explore-labuan-bajo"> {data.text2} </h2>
                                
                                </div>
                                </div><img className="rectangle-icon" alt="" src={data.img2} />
                                <div className="frame-div"></div>
                            </div>
                        </div>
                    </div> ))}

                    
                </div>
            </div>


    
        </div>


            {/* where are you flying */ }

    {/* <div className='hidden sm:flex flex-col mt-[300px] items-center justify-center relative md:mt-12  lg:mx-28  home-page-where-flying-drop-shadow'>



        <div className='home-hero-flying-input-div  items-center justify-center
                 flex flex-col sm:items-start sm:justify-start w-screen  lg:pb-28  lg:w-[1160px]'>

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
    </div> */}

 
 <div className=' mt-[300px]  md:mt-16 flex flex-col  px-7 py-7 lg:mx-[12%] home-page-where-flying-drop-shadow'>
     {/* heading */}
     <div className='py-5'>
                <p className='font-bold'>Where are you flying?</p>
    </div>
    {/* input field */}
    <div className='flex sm:flex-col md:flex-row  items-center justify-center sm:justify-evenly lg:justify-between  flex-wrap gap-5 lg:gap-10'>

    <TextField id="outlined-basic" variant="outlined" label="From - To" placeholder='Lahore - Karachi'></TextField>

    <TextField id="outlined-basic" variant="outlined" label="Trip" placeholder='Reture'></TextField>

     <TextField id="outlined-basic" variant="outlined" label="Depart - Return" placeholder='07 Nov 22 - 13 NOv 22'></TextField>

    <TextField id="outlined-basic" variant="outlined" label="Passenger - Class" placeholder='1 Passenger , Economy'></TextField>
    </div>

    {/* show flight btns  */}
    <div className=' flex items-end justify-end mt-8 gap-5'>
            <button>+ Add Promo Code</button>
            <button className='home-hero-show-flight-btn flex items-center justify-center text-white '> <img src={showFlightImg} alt="showFlightImg" />Show Flights</button>
        </div>
    
 </div>



    {/* best packages div main */ }
            <div className='text-center  md:mt-6'>
                <h1 className='font-bold text-[24px] py-4 mt-16'>Best Packages For You</h1>
                <p>This is a unique experience on ship, sea and land, exploring different coral island of Lakshadweep</p>
            </div>

            <div className='flex  items-center justify-center mt-16'>
                <button onClick={handelMaldivesBtn} className={`${blueBgM ? 'hero-page-best-packages-btns bg-[#3282AD] text-white font-bold' : 'hero-page-best-packages-btns bg-white text-[#3282AD] font-bold '}`}>Maldives</button>
                <button onClick={handelSamudramBtn} className={`${blueBgS ? 'hero-page-best-packages-btns bg-[#3282AD] text-white font-bold' : 'hero-page-best-packages-btns bg-white text-[#3282AD] font-bold '}`}>Samudram</button>
                <button onClick={handelCordeliaBtn} className={`${blueBgC ? 'hidden md:block hero-page-best-packages-btns bg-[#3282AD] text-white font-bold' : 'hidden md:block hero-page-best-packages-btns bg-white text-[#3282AD] font-bold '}`}>Cordelia</button>
                <button onClick={handelAgattiBtn} className={`${blueBgA ? 'hidden md:block hero-page-best-packages-btns bg-[#3282AD] text-white font-bold' : 'hidden md:block hero-page-best-packages-btns bg-white text-[#3282AD] font-bold '}`}>Agatti</button>
                <button onClick={handelMoreBtn} className={`${blueBgMore ? 'hero-page-best-packages-btns bg-[#3282AD] text-white font-bold' : 'hero-page-best-packages-btns bg-white text-[#3282AD] font-bold '}`}>More</button>
            </div>


            <div className='flex flex-col items-center justify-center md:flex-row md:justify-evenly mt-10  gap-11 md:gap-0'>
                {/* cards start */}
                {maldives.map((data) => (<div key={data.id} className={`w-[300px] sm:w-[410px]  flex flex-col relative ${size.width > data.showSize ? '  ' : ' hidden '} `}>

                    <div className='flex flex-col  items-center md:flex-col  '>
                        <div className={`h-[348px] div-img    w-[300px] sm:w-[410px] lg:w-[337px] rounded-t-lg bg-[url('./assets/${data.bgImg}')]`}>
                            <button className='home-indonedia-price-btn lg:right-[44px]'>&#8377;{data.price} </button>
                        </div>


                        <div className=' home-indonesia-card-text-main-div lg:w-[337px]'>

                            {/* indonesia name and location icon */}
                            <div className='flex items-center justify-between px-2 py-2 '>
                                <div className='flex items-center justify-around py-2 mt-[-10px] '>
                                    <img src={homelocationIcon} alt="homelocationIcon" />
                                    <p className='font-bold'>{data.place}</p>
                                </div>

                                {/* star rating */}
                                <div className='flex gap-1 mt-[-15px]'>
                                    <img src={homeStarImg} alt="homeStarImg" />
                                    <p>{data.rating}</p>
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-center px-6'>
                                <p>{data.disc}</p>
                                <button className='home-indonesia-book-now-btn my-7 text-white font-bold btn-hover-effect-blue-to-white-bg'>Book Now</button>
                            </div>

                        </div>
                    </div>

                </div>))}






                {/* <div className=' w-[300px] sm:w-[410px]'>

                    <div className='flex flex-col  items-center md:flex-col '>
                        <div className="h-[348px] div-img bg-[url('./assets/home-indonesia-img2.svg')] bg-cover w-[300px] sm:w-[410px] rounded-t-lg relative lg:w-[337px]">
                            <button className='home-indonedia-price-btn'>&#8377;500</button>
                        </div>


                        <div className=' home-indonesia-card-text-main-div lg:w-[337px]'>

                          
                            <div className='flex items-center justify-between px-2 py-2 '>
                                <div className='flex items-center justify-around py-2 mt-[-10px] '>
                                    <img src={homelocationIcon} alt="homelocationIcon" />
                                    <p className='font-bold'>Indonesia</p>
                                </div>

                               
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

                </div> */}



                {/* 
                <div className='hidden lg:flex w-[300px] sm:w-[410px] '>

                    <div className='flex flex-col  items-center md:flex-col relative'>
                        <div className="h-[348px] div-img bg-[url('./assets/home-indonesia-img3.svg')] bg-cover w-[300px] sm:w-[410px] rounded-t-lg lg:w-[337px]">
                            <button className='home-indonedia-price-btn'>&#8377;500</button>
                        </div>


                        <div className=' home-indonesia-card-text-main-div lg:w-[337px] '>

                           
                            <div className='flex items-center justify-between px-2 py-2 '>
                                <div className='flex items-center justify-around py-2 mt-[-10px] '>
                                    <img src={homelocationIcon} alt="homelocationIcon" />
                                    <p className='font-bold'>Indonesia</p>
                                </div>

                              
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

                </div> */}

            </div>



    {/* <div className=' hidden sm:flex items-center justify-center gap-4 py-11'>
                <img src={homeCirclWhiteImg} alt="w" />
                <img src={homeCirlceBlue} alt="w" />
                <img src={homeCirclWhiteImg} alt="w" />
            </div> */}


    <div className="flex items-center justify-center">
        <button className='home-hero-discover-btn mt-10 home-all-btn-hover-effects'>Discover Now</button>
    </div>


    {/* island stays */ }
    <div className='flex flex-col items-center justify-center text-center mt-9 '>
        <h3 className='font-bold text-[24px] py-2'>Island Stays</h3>
        <p>One can choose from a variety of beautiful coral islands which offers different staying experience from..</p>
    </div>

    {/* island cards main */ }
    <div className='mt-16 flex flex-col gap-5 items-center justify-evenly lg:px-16 lg:gap-10  md:flex-row md:flex-wrap '>

        {/* first card div */}
        <div className='flex flex-col w-[300px] sm:w-[404px] sm:px-3 lg:w-[336px]  island-stays-drop-shadow-card bg-shadow-hover-effect  md:px-0  
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
        <div className='bg-shadow-hover-effect flex flex-col w-[300px]  sm:w-[404px] lg:w-[336px] sm:px-3  island-stays-drop-shadow-card   md:px-0 '>
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
        <div className='bg-shadow-hover-effect flex flex-col w-[300px]  sm:w-[404px] sm:px-3 lg:w-[336px] island-stays-drop-shadow-card   md:px-0 '>
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
        <div className='bg-shadow-hover-effect hidden md:flex flex-col w-[300px]  sm:w-[404px] sm:px-3 lg:w-[336px] island-stays-drop-shadow-card   md:px-0  '>
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
        {/* forth card ends */}





        {/* five card div */}
        <div className='bg-shadow-hover-effect hidden lg:flex flex-col w-[300px]  sm:w-[404px] sm:px-3 lg:w-[336px] island-stays-drop-shadow-card   md:px-0  '>
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
        <div className='bg-shadow-hover-effect hidden lg:flex flex-col w-[300px]  sm:w-[404px] sm:px-3 lg:w-[336px] island-stays-drop-shadow-card   md:px-0 '>
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




    {/* contact us container */ }
    <div className="bg-[url('./assets/Backfooter.svg')]  h-[197px] flex flex-col items-center justify-center gap-8 md:flex-row md:h-[154px] lg:h-[261px] lg:px-10 md:justify-between mt-24 mx-3 sm:mx-5 lg:mx-24  rounded-[15px]">

        {/* text div */}
        <div className="text-center md:text-left text-white  md:w-[2/5]">
            <p className='md:font-bold md:text-[20px] lg:w-[451px] lg:text-[42px] lg:leading-[50px] lg:my-[20px]'>Lets Ready to Explore The World With Us.</p>
            <p className='hidden md:flex'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quis incidunt iusto!</p>
        </div>

        {/* button div */}
        <button className='home-contact-us-btn text-center home-all-btn-hover-effects'>Contact Us</button>

    </div>


    {/* home reviews page */ }

    <div className='text-center mx-6 mt-24'>
        <h2 className='font-bold text-[24px] leading-[32px] '>What Our Clients Says About Us</h2>
    </div>



    {/* reviews card main div*/ }
            <div className='mt-14  flex items-center justify-center md:justify-evenly'>

                {/* card 1 */}
                {/* <div className='hidden md:flex   w-[300px] sm:w-[410px] md:w-[302px] lg:[w-336px] '>
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
                </div> */}



                {/* card 2 */}
                {/* <div className='hidden lg:flex   w-[300px] sm:w-[410px] md:w-[302px] lg:[w-336px] '>
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
                </div> */}



                {/* card 3 */}
             { clients.map((data)=> (  <div key={data.id} className={` w-[300px] sm:w-[410px] md:w-[302px] lg:[w-336px] ${size.width > data.showSize ? '  ' : ' hidden '} `}>
                    <div className='flex flex-col items-center justify-center gap-2 px-5 text-center home-client-reviews-card-bg'>
                        <img src={data.bgImg} alt="sdsd" className='py-3 h-[112px] w-[112px]' />
                        <p className='font-bold mt-[-10px] text-[20px]'> {data.name} </p>
                        <p className='text-[16px] font-bold text-[#555555]'>{data.place}</p>
                        <p className='text-[14px] text-[#5A5A5A] py-5'> {data.disc} </p>
                        <p className='flex gap-2 py-2 pb-3'>

                        {  data.star.map((s)=>(
                             <img src={clientStarImg} alt="" />
                        
                        ))    }


                            {/* <img src={clientStarImg} alt="" />
                            <img src={clientStarImg} alt="" />
                            <img src={clientStarImg} alt="" />
                            <img src={clientStarImg} alt="" /> */}
                        </p>
                    </div>
                </div>   ))}



                {/* review card main div ends */}
            </div>



            <div className='flex items-center justify-center gap-4 py-11'>
            <div onClick={handleSmallDiv1} className={`${circle1 ? 'w-[32px] h-[32px] rounded-full home-small-circle-border-styles bg-[#3282AD]' : 'w-[32px] h-[32px] rounded-full home-small-circle-border-styles bg-[#ffffff]' }`}></div>
                <div onClick={handleSmallDiv2} className={`${circle2 ? 'w-[32px] h-[32px] rounded-full home-small-circle-border-styles bg-[#3282AD]' : 'w-[32px] h-[32px] rounded-full home-small-circle-border-styles bg-[#ffffff]' }`}></div>
                <div onClick={handleSmallDiv3} className={`${circle3 ? 'w-[32px] h-[32px] rounded-full home-small-circle-border-styles bg-[#3282AD]' : 'w-[32px] h-[32px] rounded-full home-small-circle-border-styles bg-[#ffffff]' }`}></div>
            </div>

        </>
    )
}

export default Home