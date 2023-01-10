import React from 'react'
import videoimg from './assets/video.svg'
import dots from './assets/dots.svg'
import secondVideoOneImg from './assets/video-second-one.svg'
import thirdVideoOne from './assets/third-video-1.svg'
import video2 from './assets/video2.svg'
import video3 from './assets/video3.svg'
import video4 from './assets/video4.svg'
import video5 from './assets/video5.svg'
import video6 from './assets/video6.svg'
import video7 from './assets/video7.svg'

const Video = () => {
    return (
        <>
            <div>
                <div className="heading-container">
                    <h1>Videos</h1>
                </div>

                {/* contents */}
                <div className=''>
                    <img className='hidden sm:dots-img' src={dots} alt="dots" />
                  
                </div>

                <div className='first-video-container'>
                    <div className="first-text-container">
                        <h3>Lorem, ipsum.</h3>
                        <h2 className='text-[22px]'>Lorem ipsum dolor sit amet consectetu.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam velit, odit dolores dicta quas quibusdam laudantium facilis assumenda odit 
                          dolores dicta quas quibusda!</p>
                    </div>
                    <div className="first-video-box">
                        <img src={videoimg} alt="vimg" />
                    </div>
                </div>




                <div className='second-video-container mt-11 mb-11'>
                    <div className='second-text-container text-center py-6'>
                        <h1 className='py-6'>Lorem ipsum dolor sit amet consectetur</h1>
                        <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum vero unde praesentium vitae aspernatur natus asperiores nam quidem tempore.unde praesentium vitae aspernatur natus asperiores nam quidem tempore. 
                         </p>
                    </div>


                    <div className='second-all-videos-container'>
                        <div className='second-inner-videos'>
                            <img src={secondVideoOneImg} alt="2-1" />
                            <p className='font-bold'>Lorem, ipsum.</p>
                        </div>
                        <div className='second-inner-videos'>
                            <img src={secondVideoOneImg} alt="2-1" />
                            <p className='font-bold'>Lorem, ipsum.</p>
                        </div>
                        <div className='second-inner-videos'>
                            <img src={secondVideoOneImg} alt="2-1" />
                            <p className='font-bold'>Lorem, ipsum.</p>
                        </div>

                    </div>
                </div>



                <div className='third-video-container'>
                    <h1>Lorem ipsum dolor sit.</h1>
                    <div className='all-third-video-container w-full'>
                    <div className='flex items-center w-full justify-around p-10 gap-5'>
                        <img className='third-video-single-video' src={video7} alt="" />
                        <img className='third-video-single-video' src={video2} alt="" />
                    </div>
                    <div className='flex items-center w-full justify-around p-10 gap-5'>
                        <img className='third-video-single-video' src={video3} alt="" />
                        <img className='third-video-single-video' src={video4} alt="" />
                    </div>
                    <div className='flex items-center w-full justify-around p-10 gap-5'>
                        <img className='third-video-single-video' src={video5} alt="" />
                        <img className='third-video-single-video' src={video6} alt="" />
                    </div>
                    </div>
                </div>

            <div className='flex items-center justify-center'>
            <button className='videos-button font-bold text-[#3282AD] home-all-btn-hover-effects'>Discover More</button>
            </div>
            

            </div>
        </>
    )
}

export default Video