import React, { useState , useEffect} from 'react'
import AboutSection1SmallImg from './assets/About-section-1-small-img-1.svg'
import AboutFacebookImg from './assets/About-facebook-img.svg'
import AboutCustomerImg1 from './assets/About-coustomer-img-1.svg'
import AboutCustomerImg2 from './assets/AboutCustomerImg2.svg'
import AboutCustomerImg3 from './assets/AboutCustomerImg3.svg'
import AboutCustomerImg4 from './assets/AboutCustomerImg4.svg'
import AboutCertificate from './assets/About-certificate-img.svg'
import AboutTeamsImg1 from './assets/AboutTeams-img1.svg'
import AboutTeamsImg2 from './assets/AboutTeams-img2.svg'
import AboutTeamsImg3 from './assets/AboutTeams-img3.svg'
import AboutTeamsImg4 from './assets/AboutTeams-img4.svg'
import AboutTeamsImg5 from './assets/AboutTeams-img5.svg'

const About = () => {

    const Team1 = [
        {
            id: 1,
            name: "Sebastian Bennett",
            img: './TeamImg1.svg',
            role: "FOUNDER, LEAD PHOTOGRAPHER, CEO",
            disc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem explicabo obcaecati veritatis. Voluptates culpa obcaecati a esse temporibus ullam? Quos atque quae veritatis minus nihil nisi, porro excepturi blanditiis expedita explicabo corporis, quo repellat? Lorem ipsum dolor sit amet.",

        }
    ]

    const Team2 = [
        {
            name: "Deborah D. Estes",
            img: './TeamImg2.svg',
            role: "CO-FOUNDER, LEAD DANCER, COO",
            disc: "consectetur adipisicing elit. Dolorem explicabo Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi eveniet reprehenderit. obcaecati veritatis. Voluptates culpa obcaecati a esse temporibus ullam? Quos atque quae veritatis minus nihil nisi, porro excepturi blanditiis expedita explicabo corporis, quo repellat? Lorem ipsum dolor sit amet.",

        }
    ]

    const Team3 = [
        {
            name: "Aida J. Mathis",
            img: './TeamImg3.svg',
            role: "Member 1",
            disc: "dolor sit amet consectetur adipisicing elit. Id nisi eveniet reprehenderit. obcaecati veritatis. Voluptates culpa obcaecati a esse temporibus ullam? Quos atque quae veritatis minus nihil nisi, porro excepturi blanditiis expedita explicabo corporis, quo repellat? Lorem ipsum dolor sit amet. consectetur adipisicing elit. Dolorem explicabo Lorem ipsum ",

        }
    ]

    const Team4 = [
        {
            name: "Diane T. Hall",
            img: './TeamImg4.svg',
            role: "Member 2",
            disc: " obcaecati veritatis. Voluptates culpa obcaecati a esse temporibus ullam? Quos atque quae veritatis minus nihil nisi, porro excepturi blanditiis expedita explicabo corporis, quo repellat? Lorem ipsum dolor sit amet. consectetur adipisicing elit. Dolorem explicabo Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi eveniet reprehenderit.",

        }
    ]

    const Team5 = [
        {
            name: "George P. Hart",
            img: './TeamImg5.svg',
            role: "Member 3",
            disc: " e temporibus ullam? Quos atque quae veritatis minus nihil nisi, porro excepturi blanditiis expedita explicabo corporis, quo repellat? Lorem ipsum dolor sit amet. consectetur adipisicing elit. Dolorem explicabo Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nisi eveniet reprehenderit.",

        }
    ]

    const [TeamData, setTeamData] = useState(Team1)

   const [Teambtn1 , setTeambtn1] = useState(true)
   const [Teambtn2 , setTeambtn2] = useState(false)
   const [Teambtn3 , setTeambtn3] = useState(false)
   const [Teambtn4 , setTeambtn4] = useState(false)
   const [Teambtn5 , setTeambtn5] = useState(false)


  const handleImg1 = () =>{
    setTeamData(Team1)
    setTeambtn1(true)
    setTeambtn2(false)
    setTeambtn3(false)
    setTeambtn4(false)
    setTeambtn5(false)
   }

  const handleImg2 = () =>{
    setTeamData(Team2)
    setTeambtn1(false)
    setTeambtn2(true)
    setTeambtn3(false)
    setTeambtn4(false)
    setTeambtn5(false)
  }

  const handleImg3 = () =>{
    setTeamData(Team3)
    setTeambtn1(false)
    setTeambtn2(false)
    setTeambtn3(true)
    setTeambtn4(false)
    setTeambtn5(false)
  }

  const handleImg4 = () =>{
    setTeamData(Team4)
    setTeambtn1(false)
    setTeambtn2(false)
    setTeambtn3(false)
    setTeambtn4(true)
    setTeambtn5(false)
  }

  const handleImg5 = () =>{
    setTeamData(Team5)
    setTeambtn1(false)
    setTeambtn2(false)
    setTeambtn3(false)
    setTeambtn4(false)
    setTeambtn5(true)
  }


  //  set interval 

  const comment1 = [
    {
        id: 1,
        img : './TeamImg4.svg',
        disc : '1 obcaecati veritatis. Voluptates culpa obcaecati a esse temporibus ullam? Quos atque quae veritatis minus nihil'
  },


]

const comment2 = [
    {
        id: 1,
        img : './TeamImg2.svg',
        disc : ' 2 culpa obcaecati a esse temporibus ullam? Quos atque quae veritatis minus nihil atque quae veritatis minus nih'
  }
]

const comment3 = [
    {
        id: 1,
        img : './TeamImg3.svg',
        disc : ' 3 culpa obcaecati a esse temporibus ullam? Quos atque quae veritatis minus nihil mporibus ullam? '
  }
]

const comment4 = [
    {
        id: 1,
        img : './TeamImg5.svg',
        disc : ' 4 culpa obcaecati a esse temporibus ullam? Quos atque quaatque quae veritatis minus nihnihil'
  }
]

  const [comment , setComment] = useState(comment1)
 

  const [test , setTest] = useState(0)

useEffect(() => {
    const interval = setInterval(() => {
    
        if(test === 0){
            setComment(comment1)
            console.log("1")
            setTest(1)
        } else if(test === 1){
           setComment(comment2)
           console.log("2")
           setTest(2)
        }
        else if(test === 2){
            setComment(comment3)
            console.log("3")
            setTest(3)
         }
         else if(test === 3){
            setComment(comment4)
            console.log("4")
            setTest(0)
         }

    }, 6000);
  
   
    return () => clearInterval(interval);
  }, [test]);

 

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
          {  TeamData.map((data) => (  <>  <div key={data.id} className=' flex flex-col-reverse items-center justify-center md:flex-row md:items-center md:justify-evenly md:gap-1 p-3'>
                {/* small pictures of all team members */}
                     <div className='flex flex-row md:flex-col items-center justify-center gap-3 '>
                    <img onClick={handleImg1} className={`${Teambtn1 ? ' cursor-pointer w-[47px] h-[47px] md:w-[63px] md:h-[63px] rounded-full about-page-small-image-border' : 'cursor-pointer w-[47px] h-[47px] md:w-[63px] md:h-[63px] rounded-full' }`} src={AboutTeamsImg1} alt="" />
                    <img onClick={handleImg2} className={`${Teambtn2 ? 'cursor-pointer w-[47px] h-[47px] md:w-[63px] md:h-[63px] rounded-full about-page-small-image-border' : 'cursor-pointer w-[47px] h-[47px] md:w-[63px] md:h-[63px] rounded-full' }`} src={AboutTeamsImg2} alt="" />
                    <img onClick={handleImg3} className={`${Teambtn3 ? 'cursor-pointer w-[47px] h-[47px] md:w-[63px] md:h-[63px] rounded-full about-page-small-image-border' : 'cursor-pointer w-[47px] h-[47px] md:w-[63px] md:h-[63px] rounded-full' }`} src={AboutTeamsImg3} alt="" />
                    <img onClick={handleImg4} className={`${Teambtn4 ? 'cursor-pointer w-[47px] h-[47px] md:w-[63px] md:h-[63px] rounded-full about-page-small-image-border' : 'cursor-pointer w-[47px] h-[47px] md:w-[63px] md:h-[63px] rounded-full' }`} src={AboutTeamsImg4} alt="" />
                    <img onClick={handleImg5} className={`${Teambtn5 ? 'cursor-pointer w-[47px] h-[47px] md:w-[63px] md:h-[63px] rounded-full about-page-small-image-border' : 'cursor-pointer w-[47px] h-[47px] md:w-[63px] md:h-[63px] rounded-full' }`} src={AboutTeamsImg5} alt="" />
                </div> 

                {/* large image div */}
                <div className='flex items-center justify-center ml-5 py-4 rounded-[7px]'>
                    <img  className='object-cover w-[410px] h-[236px] md:w-[543px] md:h-[352px] pr-[20px] rounded-[7px] sm:pr-[0px]  ' src={data.img} alt="" />
                </div>

                {/* show only on lagre screen */}
                <div className='hidden lg:flex flex-col px-3 text-justify items-start justify-center '>
                    {/* blue heading div and social visible on tables  */}
                    <div className='md:ml-14 md:flex md:flex-col md:items-start md:justify-center md:w-[541px]'>


                        <div className='flex items-center justify-between md:w-[541px]'>
                            <p className='font-bold text-[24px] text-[#3282AD] py-2'> {data.name} </p>

                        </div>

                        <p className='font-bold py-2 text-justify'> {data.role} </p>
                        <p className='md:w-[447px]'> {data.disc} </p>
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
                        <p className='font-bold text-[24px] text-[#3282AD] py-2'> {data.name} </p>
                        <div className='hidden md:flex items-center justify-center gap-3'>
                            <img src={AboutFacebookImg} alt="AboutFacebookImg" />
                            <img src={AboutFacebookImg} alt="AboutFacebookImg" />
                            <img src={AboutFacebookImg} alt="AboutFacebookImg" />
                        </div>
                    </div>

                    <p className='font-bold py-2 text-justify'>  {data.role} </p>
                    <p className='md:w-[447px]'> {data.disc} </p>
                </div>

                <div className=' flex md:hidden items-center justify-center gap-3 py-7'>
                    <img src={AboutFacebookImg} alt="AboutFacebookImg" />
                    <img src={AboutFacebookImg} alt="AboutFacebookImg" />
                    <img src={AboutFacebookImg} alt="AboutFacebookImg" />
                </div>


            </div> </> ))}



            {/* what customer's are saying */}
            <div className='relative bg-[#F7FDFF] pt-8  pb-40 lg:px-80  mt-24'>
                {/* text  div */}
                <div className=' sm:w-[523px] mb-[100px] px-3'>
                    <p className='font-bold text-[24px] py-2'>What customer's are saying?</p>
                    <p className='pb-6'>Take a look at what our customer's are saying. At Nature we not only provide you with services but also we provide you with valuable experiences for your valueable time.</p>
                </div>
                {/* image div */}
                <div className='flex  justify-evenly md:h-[320px] lg:gap-8 '>
                    <img className=' sm:mt-[120px] w-[193px] h-[295px] sm:w-[150px] sm:h-[231px] md:w-[211px] md:h-[323px] lg:w-[219px] lg:h-[323px] ' src={AboutCustomerImg4} alt="AboutCustomerImg1" />
                    <img className='hidden sm:block  w-[193px] h-[295px] sm:w-[150px] sm:h-[231px] md:w-[211px] md:h-[323px] lg:w-[219px] lg:h-[323px] ' src={AboutCustomerImg2} alt="AboutCustomerImg1" />
                    <img className='hidden md:block  mt-[-100px] w-[193px] h-[295px] sm:w-[150px] sm:h-[231px] md:w-[211px] md:h-[323px] lg:w-[219px] lg:h-[323px]' src={AboutCustomerImg3} alt="AboutCustomerImg1" />
                    <img className='hidden md:block  mt-[-160px] w-[193px] h-[295px] sm:w-[150px] sm:h-[231px] md:w-[211px] md:h-[323px] lg:w-[219px] lg:h-[323px]' src={AboutCustomerImg4} alt="AboutCustomerImg1" />
                </div>
                {/* user comment div */}
              {  comment.map((data , i)=>( <div key={data.id} className='rounded-[16px] sm:absolute right-32 bottom-0 bg-white w-[300px] md:w-[352px] lg:w-[512px] pt-5 px-5'>
                    {/* image and text */}
                    <div className='flex items-center justify-center gap-1 text-center'>
                        <img className='px-1  ' src={data.img} alt="AboutSection1SmallImg" />
                        <p className='px-3'>“ {data.disc} “</p>
                    </div>
                    {/* blue line */}

                    <div className=' progress-animation mt-1 flex rounded-[10px] bg-[#3282AD] h-[10px]'>
                    </div>
                </div>  ))}
            </div>



            {/* certificate */}

            <div className='flex flex-col items-center justify-center mt-32 py-6 px-3 text-center'>
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