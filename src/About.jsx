import React from 'react'
import AboutSection1SmallImg from './assets/About-section-1-small-img-1.svg'
import AboutSection1LargeImg from './assets/About-section-1-large-img.svg'
import AboutFacebookImg from './assets/About-facebook-img.svg'
import AboutCustomerImg1 from './assets/About-coustomer-img-1.svg'
import AboutCertificate from './assets/About-certificate-img.svg'

const About = () => {
    return (
        <>
            {/* heading center */}
            <div className="heading-container">
                <h1>About Us</h1>
            </div>

            <div className=' flex flex-col items-center justify-center p-3 py-6 mt-10 text-center bg-[#F7FDFF] rounded-[8px]'>
                <p className='font-bold text-[24px] '>Our Team</p>
                <p>Quidam officiis similque scaei , vel tollit indoctum efficiendi ei, at nihil tantas platonem eos.</p>
            </div>

            {/* first section */}
            <div className=' flex flex-col-reverse md:flex-row md:items-center md:justify-evenly md:gap-1 p-3'>
                {/* small pictures of all team members */}
                <div className='flex flex-row md:flex-col items-center justify-center gap-3 '>
                    <img className='w-[47px] h-[47px] md:w-[63px] md:h-[63px] ' src={AboutSection1SmallImg} alt="" />
                    <img className='w-[47px] h-[47px]  md:w-[63px] md:h-[63px]' src={AboutSection1SmallImg} alt="" />
                    <img className='w-[47px] h-[47px]  md:w-[63px] md:h-[63px]' src={AboutSection1SmallImg} alt="" />
                    <img className='w-[47px] h-[47px]  md:w-[63px] md:h-[63px]' src={AboutSection1SmallImg} alt="" />
                    <img className='w-[47px] h-[47px]  md:w-[63px] md:h-[63px]' src={AboutSection1SmallImg} alt="" />
                </div>

                {/* large image div */}
                <div className='flex items-center justify-center ml-5 py-4'>
                    <img src={AboutSection1LargeImg} alt="" />
                </div>

{/* show only on lagre screen */}
                <div className='hidden lg:flex flex-col px-3 text-justify items-start justify-center '>
                    {/* blue heading div and social visible on tables  */}
                    <div className='md:ml-14 md:flex md:flex-col md:items-start md:justify-center md:w-[541px]'>


                        <div className='flex items-center justify-between md:w-[541px]'>
                            <p className='font-bold text-[24px] text-[#3282AD] py-2'>Sebastian Bennett</p>
                            
                        </div>

                        <p className='font-bold py-2 text-justify'>FOUNDER, LEAD PHOTOGRAPHER, CEO</p>
                        <p className='md:w-[447px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem explicabo obcaecati veritatis. Voluptates culpa obcaecati a esse temporibus ullam? Quos atque quae veritatis minus nihil nisi, porro excepturi blanditiis expedita explicabo corporis, quo repellat? Lorem ipsum dolor sit amet. </p>
                    </div>

                    <div className=' flex items-start justify-center gap-3 py-7 ml-14'>
                        <img src={AboutFacebookImg} alt="AboutFacebookImg" />
                        <img src={AboutFacebookImg} alt="AboutFacebookImg" />
                        <img src={AboutFacebookImg} alt="AboutFacebookImg" />
                    </div>


                </div>



            </div>


            {/* sebastian bennett , founder info div */}
            <div className='lg:hidden flex flex-col px-3 text-justify items-center justify-center '>
                {/* blue heading div and social visible on tables  */}
                <div className='md:ml-14 md:flex md:flex-col md:items-start md:justify-center md:w-[541px]'>


                    <div className='flex items-center justify-between md:w-[541px]'>
                        <p className='font-bold text-[24px] text-[#3282AD] py-2'>Sebastian Bennett</p>
                        <div className='hidden md:flex items-center justify-center gap-3'>
                            <img src={AboutFacebookImg} alt="AboutFacebookImg" />
                            <img src={AboutFacebookImg} alt="AboutFacebookImg" />
                            <img src={AboutFacebookImg} alt="AboutFacebookImg" />
                        </div>
                    </div>

                    <p className='font-bold py-2 text-justify'>FOUNDER, LEAD PHOTOGRAPHER, CEO</p>
                    <p className='md:w-[447px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem explicabo obcaecati veritatis. Voluptates culpa obcaecati a esse temporibus ullam? Quos atque quae veritatis minus nihil nisi, porro excepturi blanditiis expedita explicabo corporis, quo repellat? Lorem ipsum dolor sit amet. </p>
                </div>

                <div className=' flex md:hidden items-center justify-center gap-3 py-7'>
                    <img src={AboutFacebookImg} alt="AboutFacebookImg" />
                    <img src={AboutFacebookImg} alt="AboutFacebookImg" />
                    <img src={AboutFacebookImg} alt="AboutFacebookImg" />
                </div>


            </div>



{/* what customer's are saying */}       
        <div className='relative bg-[#F7FDFF] py-24 px-3 lg:px-80  mt-24'>
        {/* text  div */}
            <div className=' sm:w-[523px] px-3'>
            <p className='font-bold text-[24px] py-2'>What customer's are saying?</p>
            <p className='pb-6'>Take a look at what our customer's are saying. At Nature we not only provide you with services but also we provide you with valuable experiences for your valueable time.</p>
            </div>
        {/* image div */}
           <div className='flex items-center justify-evenly md:h-[300px] '>
               <img className='md:w-[150px] lg:w-[211px] sm:mt-[120px]' src={AboutCustomerImg1} alt="AboutCustomerImg1" />
               <img className='hidden sm:flex md:w-[150px] lg:w-[211px] ' src={AboutCustomerImg1} alt="AboutCustomerImg1" />
               <img className='hidden lg:w-[211px] md:flex md:w-[150px] mt-[-100px]' src={AboutCustomerImg1} alt="AboutCustomerImg1" />
               <img className='hidden lg:w-[211px] md:flex md:w-[150px] mt-[-160px]' src={AboutCustomerImg1} alt="AboutCustomerImg1" />
           </div>
        {/* user comment div */}
           <div className=' rounded-[16px] sm:absolute right-32 bottom-0 bg-white w-[300px] md:w-[352px] lg:w-[512px] pt-5 px-5'>
           {/* image and text */}
              <div className='flex items-center justify-center gap-1 text-center'>
                  <img className='px-1' src={AboutSection1SmallImg} alt="AboutSection1SmallImg" />
                   <p className='px-3'>“ Great place to spend your vacation while exploring different experiences. “</p>
              </div>
              {/* blue line */}

              <div className='mt-1 flex rounded-[10px] bg-[#3282AD] h-[10px]'>
              </div>
           </div>
        </div>



{/* certificate */}
  
   <div className='flex flex-col items-center justify-center mt-16 px-3 text-center'>
    <p className='font-bold text-[24px] py-3'>Certificate</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sed nisi ipsa iste fugit sequi.</p>
   </div>

 {/* images */}

 <div className='flex flex-col items-center justify-center gap-4 md:gap-7 lg:gap-11 md:flex-row flex-wrap px-3 md:px-10 lg:px-20 mt-7'>
    <img className='lg:w-[518px] lg:h-[306px] ' src={AboutCertificate} alt="" />
    <img className='lg:w-[518px] lg:h-[306px]' src={AboutCertificate} alt="" />
    <img className='hidden md:flex lg:w-[518px] lg:h-[306px]' src={AboutCertificate} alt="" />
    <img className='hidden md:flex lg:w-[518px] lg:h-[306px]' src={AboutCertificate} alt="" />
 </div>



        </>
    )
}

export default About