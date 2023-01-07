
//  AT A GLANCE PAGE
import React from 'react'
import AboutLakshadweepImg from './assets/AtAGlance-about-lakshadweep.svg'
import Scuba from './assets/AtAGlance-Scuba.svg'
import boating from './assets/AtAGlance-boating.svg'
import fishing from './assets/AtAGlance-fishing.svg'
import turtle from './assets/AtAGlance-turtle.svg'
import RouteImg from './assets/AtAGlance-route-img.svg'

const AboutLakshadweep = () => {
    return (
        <>

            <div className="heading-container">
                <h1>At A Glance</h1>
            </div>




            {/*  explore div for above md*/}
            <div className='hidden md:block w-screen px-20 '>
                <h1 className='font-bold md:text-[32px] my-5'>Explore Top Destination</h1>

                {/* image divs */}
                <div className='flex gap-5 items-center justify-between'>

                    {/* div 1 */}
                    <div className=" relative flex items-center justify-center bg-[url('./assets/AtAGlance-explore-img1.svg')] md:w-[196px] md:h-[153px] bg-cover  lg:w-[247px] lg:h-[192px]">
                        <p className='text-white absolute bottom-5'>Agatti</p>
                    </div>

                    {/* div 2 */}
                    <div className=" relative flex items-center justify-center bg-[url('./assets/AtAGlance-explore-img1.svg')] md:w-[196px] md:h-[153px] bg-cover lg:w-[247px] lg:h-[192px]">
                        <p className='text-white absolute bottom-5'>Kavaratti</p>
                    </div>



                    {/* div 3 */}
                    <div className="hidden lg:flex relative items-center justify-center bg-[url('./assets/AtAGlance-explore-img1.svg')] md:w-[196px] md:h-[153px] bg-cover lg:w-[247px] lg:h-[192px]">
                        <p className='text-white absolute bottom-5'>Kadmat</p>
                    </div>



                    {/* div 4 */}
                    <div className=" relative flex items-center justify-center bg-[url('./assets/AtAGlance-explore-img1.svg')] md:w-[196px] md:h-[153px] bg-cover lg:w-[247px] lg:h-[192px]">
                        <p className='text-white absolute bottom-5'>Bangaram</p>
                    </div>

                </div>
            </div>










            {/* about lakshadweep */}
            <div className=' flex flex-col md:flex-row-reverse w-screen px-10 lg:px-10 gap-4 mt-10'>

                {/* text */}
                <div className='md:w-2/4 '>
                    <h1 className='font-bold text-[24px] my-5'>About Lakshadweep</h1>
                    <p className='text-justify '>Lakshadweep Islands commonly known as coral paradise of India, a group of islands which is scattered in the Arabian Sea. This is one of the world's most spectacular tropical island systems, Lakshadweep is tucked away at 220-440Kms off cost of Kerala State of the Indian Peninsula. This archipelago consists of 36 sun-kissed islands comprises of 12 atolls, three reefs, five submerged banks and ten inhabited islands fringed by beautiful coral reefs and exotic marine life. The islands offer a precious heritage of ecology and culture. The unique feature of the Islands is its coral reef, making it a pristine leisure spot to come back. 4200 sq. kms of lagoon, rich in marine wealth, is spread over 36 islands in an area of 32 sq. kms.
                    </p>
                    <br />
                    <p className='hidden sm:flex'>The underwater view at Lakshadweep is kaleidoscopic and breathtaking. Each island is fringed by snow white coral sands. The crystal clear water and the abundant marine life enhance the beauty of these islands. Against the vast expanse of the blue sea, the island looks like emeralds. The huge shallow calm lagoon on one side with wall like reef made of marine live coral boulders blocks the incoming swells of the outer sea.</p>
                </div>

                {/* image */}
                <div className='flex items-center justify-center md:w-2/4 '>
                    <img className='w-[300px] sm:w-[417px]  lg:w-[518px]' src={AboutLakshadweepImg} alt="alt" />
                </div>
            </div>



            {/* explore island button */}
            <div className='at-a-glance-explore-btn-div flex items-center justify-center mt-8 py-6  mx-10 
          '>
                <button className='at-a-glance-exploreIsland-btn'>Explore Island</button>
            </div>

            {/* text div  main */}
            <div className='text-justify w-screen p-9 md:px-20'>
                <p>The pristine beauty, white sandy beaches, crystal clear water, shallow lagoon, rich marine wealth, pollution free environment, variety of coral eco system, flora & fauna and water sports activities like, scuba diving, snorkeling, wind surfing, water skiing, para sailing, sailing boats, speed boats makes Lakshadweep as one of the most popular holiday destination for tourists both domestic as well as foreign.
                    <br />
                    <br />
                    Lakshadweep is the tiniest Union Territory of India and is its only coral island chain. The islands have a total area of 32 sq.kms and the lagoons enclosed by the atolls cover an area of 4200 sq.kms. Its territorial waters extend to 20,000 sq.kms and Exclusive Economic Zone (EEZ) to 4,00,000 sq.kms. Only 10 of these islands namely, Agatti, Amini, Andrott, Bitra, Chetlat, Kadmat, Kalpeni, Kavaratti, Kiltan and Minicoy are inhabited. Kavaratti is the Administrative Headquarters of the Union Territory. It is culturally very close to the nearest mainland Indian state of Kerala and Malayalam is a widely spoken language apart from local dialects. Minocy Island has a different language by the name Mahl.
                    <br />
                    <br />
                    Early history of Lakshadweep is unwritten. Local traditions attribute the first settlement on these islands to the period of Cheraman Perumal, the legendary king of Kerala. Though it is commonly believed that the first settlers in these islands were the ship-wrecked sailor who had set out to Mecca in search of Cheraman Perumal, the legendary king of Kerala, studies are being continued about the settlement.
                    <br />
                    <br />
                    Earlier, life in these Islands was hard and challenging. Foreign traders and travellers held sway in these islands to explore it’s natural beauty. Quite often the islanders were subject to their savage cruelties. The events in these geographically isolated islands were never known to the outside world.

                </p>
            </div>



            {/* Activities */}
            <div className='flex items-center justify-center mt-10'>
                <h1 className='font-bold text-[24px]'>Activities</h1>
            </div>

            {/* main div  */}
            <div className=' flex items-center justify-center md:justify-evenly flex-wrap md:flex-row  my-10'>



                    {/* div 1 */}
                    <div className='at-a-glance-activity-div-bg-style flex flex-col items-center justify-center gap-2 p-6 w-[193px] h-[172px]'>
                        <img src={Scuba} alt="" />
                        <div className='at-a-glance-activity-small-div1'></div>
                        <p className='font-bold'>Scuba diving</p>
                    </div>


                    {/* div 2 */}
                    <div className='at-a-glance-activity-div-bg-style flex flex-col items-center justify-center gap-2 p-6 w-[193px] h-[172px]'>
                        <img src={fishing} alt="" />
                        <div className='at-a-glance-activity-small-div2'></div>
                        <p className='font-bold'>Fishing</p>
                    </div>
            

          


                    {/* div 3 */}
                    <div className='at-a-glance-activity-div-bg-style flex flex-col items-center justify-center gap-2 p-6 w-[193px] h-[172px]'>
                        <img src={boating} alt="" />
                        <div className='at-a-glance-activity-small-div3'></div>
                        <p className='font-bold'>Boating</p>
                    </div>



                    {/* div 4*/}
                    <div className='at-a-glance-activity-div-bg-style flex flex-col items-center justify-center gap-2 p-6 w-[193px] h-[172px]'>
                        <img src={turtle} alt="" />
                        <div className='at-a-glance-activity-small-div4'></div>
                        <p className='font-bold'>Turtle watch</p>
                    </div>

               

            </div>


            {/* roadtrip map div main */}

            <div className='flex flex-col items-center justify-center text-center mt-10'>
                <h3 className='font-bold py-2 text-[24px]'>Roadtrip map</h3>
                <p className='mb-5'>See clearly how the route will take place</p>
            </div>



 <div className='flex items-center justify-center px-10 mt-10'>
    <div className=" flex items-center justify-center bg-[url('./assets/AtAGlance-route-img.svg')] bg-cover w-[300px] h-[181px] sm:w-[411px] md:w-[629px] md:h-[277px] lg:w-[1060px] lg:h-[467px]   ">

</div>
 </div>
            

        </>
    )
}

export default AboutLakshadweep