import React , {useState} from 'react'
import search from './assets/search.svg'
import minus from './assets/minus.svg'
import plus from './assets/plus.svg'
import touchgirl from './assets/touchgirl.png'
import supportLocation from './assets/supportLocation.svg'
import supportMail from './assets/supportMail.svg'
import supportPhone from './assets/supportPhone.svg'
import supportMapImg from './assets/supportMapImg.svg'


const Support = () => {

   const [open1 , setOpen1] = useState(true);
   const [open2 , setOpen2] = useState(false);
   const [open3 , setOpen3] = useState(false);
   const [open4 , setOpen4] = useState(false);
   const [open5 , setOpen5] = useState(false);

 const handelOpen1 = ()=>{
      setOpen1(prev=> !prev)
   }
 const handelOpen2 = ()=>{
    setOpen2(prev=> !prev)
 }
 const handelOpen3 = ()=>{
  setOpen3(prev=> !prev)
}
const handelOpen4 = ()=>{
  setOpen4(prev=> !prev)
}
const handelOpen5 = ()=>{
  setOpen5(prev=> !prev)
}

  return (
    <>
      <div>
        <div className="heading-container">
          <h1>Support</h1>
        </div>



        <div  className='flex-col text-center items-center justify-center'>
          <h1 className='font-bold text-[33px] py-5'>Frequently Asked Questions</h1>
          <p>Have questions? We are here to help</p>

          <div className='flex items-center justify-center py-1'>
            <input type="text" className='support-input-search' placeholder='search a question' />
            <img className='support=search' src={search} alt="search" />
          </div>

        </div>

        {/* open and close divs */}
        <div style={{marginTop: '50px'}} className='flex items-center justify-center py-1'>
          <div className='support-outter-box'>
            <div className='support-inner-p-box'>
              <p className='font-bold py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro.</p>
           { open1 && <p className='py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus similique fugiat doloremque ad?</p>   }  
            </div>
            <div>
           { open1 ?  <img className='mt-16 md:mt-10' onClick={handelOpen1} src={minus} alt="m" /> :  <img className='mt-5 md:mt-2' onClick={handelOpen1} src={plus} alt="p" /> }  
            </div>
          </div>
        </div>



        <div className='flex items-center justify-center py-4 rounded-full'>
          <div className='support-outter-box'>
            <div className='support-inner-p-box'>
              <p className='font-bold py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro.</p>
           { open2 && <p className='py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus similique fugiat doloremque ad?</p>   }  
            </div>
            <div>
           { open2 ?  <img className='mt-16  md:mt-10' onClick={handelOpen2} src={minus} alt="m" /> :  <img className='mt-5  md:mt-2' onClick={handelOpen2} src={plus} alt="p" /> }  
            </div>
          </div>
        </div>


        <div className='flex items-center justify-center py-4'>
          <div className='support-outter-box'>
            <div className='support-inner-p-box'>
              <p className='font-bold py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro.</p>
           { open3 && <p className='py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus similique fugiat doloremque ad?</p>   }  
            </div>
            <div>
           { open3 ?  <img className='mt-16  md:mt-10' onClick={handelOpen3} src={minus} alt="m" /> :  <img className='mt-5  md:mt-2' onClick={handelOpen3} src={plus} alt="p" /> }  
            </div>
          </div>
        </div>


        <div className='flex items-center justify-center py-4'>
          <div className='support-outter-box'>
            <div className='support-inner-p-box'>
              <p className='font-bold py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro.</p>
           { open4 && <p className='py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus similique fugiat doloremque ad?</p>   }  
            </div>
            <div>
           { open4 ?  <img className='mt-16  md:mt-10' onClick={handelOpen4} src={minus} alt="m" /> :  <img className='mt-5 md:mt-2' onClick={handelOpen4} src={plus} alt="p" /> }  
            </div>
          </div>
        </div>


        <div className='flex items-center justify-center py-4'>
          <div className='support-outter-box'>
            <div className='support-inner-p-box'>
              <p className='font-bold py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro.</p>
           { open5 && <p className='py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus similique fugiat doloremque ad?</p>   }  
            </div>
            <div>
           { open5 ?  <img className='mt-16  md:mt-10' onClick={handelOpen5} src={minus} alt="m" /> :  <img className='mt-5  md:mt-2' onClick={handelOpen5} src={plus} alt="p" /> }  
            </div>
          </div>
        </div>



      <div className='support-getintouch-container'>

      <div className="hidden-div h-20 bg-red-300">

      </div>

          <div className='flex-col items-center justify-center text-center'>
            <h1 className='font-bold text-center text-[32px] py-6'>Still have questions?</h1>
            <p className='py-4'>Can't find the answer you're looking for? Please chat to our friendly team</p>
            <button className='get-in-touch-btn font-bold text-white btn-hover-effect-blue-to-white-bg'>Get in touch</button>
          </div>

          <div>
                <img src={touchgirl} alt="gril" />
          </div>
      </div>


        {/* support blue bg svg */}
        <div className='support-blue-bg-img flex-col items-center justify-center gap-5'>
          <div className='py-8 text-center flex-col items-center justify-center'>
            <h1 className='text-white font-bold text-[30px] py-4'>Contact Us</h1>
            <p className='text-white'>Any question or remarks?Just write us a message!</p>
          </div>

          <div className='flex items-center justify-evenly support-mobile-contactus-div'>
            <div className='support-location flex-col text-center items-center py-4 justify-center'>
            <img src={supportLocation} alt="loc" />
            <p className='text-white'>1901 Thornridge Cir. Shiloh Hawaii 81063</p>
            </div>

            <div className='support-location flex-col text-center items-center py-4 justify-center'>
            <img src={supportPhone} alt="loc" />
            <p className='text-white'>+91-4555545454</p>
            </div>

            <div className='support-location flex-col text-center items-center py-4 justify-center'>
            <img src={supportMail} alt="loc" />
            <p className='text-white'>tim.jennings@example.com</p>
            </div>
             
          </div>
        </div>

  {/* map div */}



    <div className='support-map-div-container'>
      <div className='support-map-inner-div'>
        <img src={supportMapImg} alt="map" />
      </div>
      <div className='support-map-inputs-container flex flex-col items-center justify-center'>
      <div className='flex text-justify flex-col items-center justify-center md:items-start md:justify-start'>
      <p className='py-2'>FIRST NAME</p>
      <input className='support-map-inputs py-3 px-5' type="text" />
      <p className='py-2'>LAST NAME</p>
      <input className='support-map-inputs  py-3 px-5' type="text" />
      <p className='py-2'>E-MAIL</p>
      <input className='support-map-inputs px-5 py-3' type="email" />
      <p className='py-2'></p>
      <textarea  rows="6" cols="70"  className='px-5 support-map-inputs my-3' type="text" placeholder='LEAVE A MESSAGE FOR US' />
      </div>
      </div>

      </div>

      <div className='flex text-center items-center justify-center'>
      <button className='support-end-button my-16 btn-hover-effect-blue-to-white-bg'>
       Submit
      </button>
     
      </div>


      </div>
    </>
  )
}

export default Support