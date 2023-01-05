import React from 'react'
import sociallinks from './assets/sociallinks.svg'
import download from './assets/download.svg'
import footerlogo from './assets/footerlogo.svg'
const Footer = () => {
    return (
        <>
            <div>

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
        </>
    )
}

export default Footer