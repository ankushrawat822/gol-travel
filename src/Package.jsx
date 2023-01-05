import React, { useState } from 'react'
import packagesearch from './assets/packagesearch.svg'
import packageoverview from './assets/packageoverview.svg'
import umbrella from './assets/umbrella.svg'
import city from './assets/city.svg'
import date from './assets/date.svg'
import user from './assets/user.svg'
import Email from './assets/Email.svg'
import phone from './assets/phone.svg'
import boat from './assets/boat.svg'


const Package = () => {

  const [adultCount, setAdultCount] = useState(2)

  const [ChildCount, setChildCount] = useState(0)


  const AdultInc = () => {
    setAdultCount(prev => prev + 1)
  }

  const AdultDec = () => {
    setAdultCount(prev => prev - 1)
  }


  const ChildInc = () => {
    setChildCount(prev => prev + 1)
  }

  const ChildDec = () => {
    setChildCount(prev => prev - 1)
  }


  return (
    <>
      <div>
        <div className="heading-container">
          <h1>Maldives</h1>
        </div>

       <img className='packageboat' src={boat} alt="boat" />

        <div className='flex items-center justify-center '>
          <input className='package-hero-input' type="text" placeholder='Type a destination' />
          <img className='package-search-icon' src={packagesearch} alt="ps" />
        </div>


        <div className='package-details-main-container'>
          <div className='package-detail-div'>
            <div>
              <ul className='flex gap-4 package-detail-ul py-5'>
                <li className='font-bold'>OVERVIEW</li>
                <li className='font-bold'>ITINERARY</li>
                <li className='font-bold'>ADDITIONAL INFO</li>
              </ul>
            </div>

            <img className='py-3' src={packageoverview} alt="packageoverview" />

            <h1 className='text-[27px] py-3'>Package Overview</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt asperiores ratione alias praesentium dignissimos officia, dolorum eum perferendis magni architecto expedita eveniet ad. Eum sint praesentium, laboriosam officiis commodi rerum Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eius. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis amet, velit odit ipsam accusantium voluptas officiis ab debitis quidem corporis, quas alias. Illo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam beatae enim consectetur quidem! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eligendi praesentium nesciunt reiciendis. Accusantium alias aliquam necessitatibus voluptatem harum similique tempora sunt, quas numquam ipsum molestias dolor neque ratione error maxime fugiat natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, consequuntur repellat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quas fuga, officia, autem quae aspernatur ipsam adipisci tempora recusandae veritatis error consequuntur blanditiis consectetur sint perferendis, quidem inventore modi ullam! Obcaecati, illo maiores.</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa amet accusantium facere sapiente deleniti necessitatibus voluptas possimus dolorem vitae a. Quae, aliquam?</p>
            <br />
            <div className='package-hr'></div>
            <br />
          </div>



          <div className='package-user-details-main-div'>
            <p className='py-4'>Starting From <span className='font-bold text-[#3282AD]'> &#8377;50,999</span></p>

            <div className='py-3 bg-gray-100 px-2'>
              <h2>Want To Go For A Memorable Holiday?</h2>
              <p>Provide Your Details To Know Best Holiday Deals</p>
            </div>

            <p className='py-1'>Package Name</p>
            <div className='package-user-inputs-name-field-div py-2'>
              <img className='umbrella-img' src={umbrella} alt="umbrella" />
              <input className='package-input-tag' type="text" value="Explore Maldives" />
            </div>

            <p className='py-1'>City of Departure</p>
            <div className='package-user-inputs-name-field-div py-2'>
              <img className='umbrella-img' src={city} alt="umbrella" />
              <input className='package-input-tag' type="text" value="Bangalore" />
            </div>

            <p className='py-1'>Date of Departure</p>
            <div className='package-user-inputs-name-field-div py-2'>
              <img className='umbrella-img' src={date} alt="umbrella" />
              <input className='package-input-tag' type="date" placeholder='Date of Dearture' />
            </div>


            <div className='package-input-btn-counters flex gap-5 py-2'>
              <div>
                <p className='py-1'>Adult</p>
                <div className='flex'>
                  <button onClick={AdultDec} className='package-input-btns'>-</button>
                  <button className='package-input-btns'> {adultCount} </button>
                  <button onClick={AdultInc} className='package-input-btns'>+</button>
                </div>
              </div>
              <div>
                <p className='py-1'>Child</p>
                <div className='flex'>
                  <button onClick={ChildDec} className='package-input-btns'>-</button>
                  <button className='package-input-btns'> {ChildCount} </button>
                  <button onClick={ChildInc} className='package-input-btns'>+</button>
                </div>
              </div>

            </div>


            <div className="package-contact-details-user-div-container">
              <div className='flex gap-4 py-1 mt-6'>
                <p className=''>Contact Details</p>
                <div className='contact-details-line'></div>
              </div>

              <div className='package-user-inputs-name-field-div py-4'>
                <img className='umbrella-img' src={user} alt="umbrella" />
                <input className='package-input-tag' type="text" placeholder='Your Name' />
              </div>

              <div className='package-user-inputs-name-field-div py-1'>
                <img className='umbrella-img' src={Email} alt="umbrella" />
                <input className='package-input-tag' type="email" placeholder='Your E-mail Address' />
              </div>

              <div className='package-user-inputs-name-field-div gap-4 py-3'>
                <input className='package-input-tag-phone-small-box' type="text" value="+91" />

                <div className='package-user-inputs-name-field-div py-1'>
                  <img className='umbrella-img' src={phone} alt="umbrella" />
                  <input className='package-input-tag-phone' type="text" placeholder='Mobile No.' />
                </div>
              </div>

              <button className='package-send-querry-btn my-2'>Send Querry</button>

            </div>


            <div className='flex gap-3 py-4'>
              <div className='package-or-div-line'></div>
              <p>OR</p>
              <div className='package-or-div-line'></div>
            </div>


            <button className='package-book-now-btn'>Book Now</button>


          </div>







        </div>



        <div className='package-itineary-main-div'>

        <div style={{marginTop :'60px'}} className='package-itineary-container'>

          <div className='day1-container'>
            <div className='day1-div'>
              <div className='day1'>Day 1</div>
            </div>
            <div className='day1-text-div'>
              <h2>ARRIVAL AT MALDIVES</h2>
              <div className='package-itineary-text-hr my-3'></div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, voluptate dolor quis repellat, deserunt aperiam minus dicta consequatur nulla atque, eligendi fuga amet eius possimus neque debitis at numquam autem sit perferendis itaque exercitationem.</p>
            </div>
          </div>

        </div>




  

  
        <div className='package-itineary-container'>

          <div className='day1-container'>
            <div className='day1-div'>
              <div className='day1'>Day 2</div>
            </div>
            <div className='day1-text-div'>
              <h2>ARRIVAL AT MALDIVES</h2>
              <div className='package-itineary-text-hr my-3'></div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, voluptate dolor quis repellat, deserunt aperiam minus dicta consequatur nulla atque, eligendi fuga amet eius possimus neque debitis at numquam autem sit perferendis itaque exercitationem.</p>
            </div>
          </div>

        </div>


        <div className='package-itineary-container'>

          <div className='day1-container'>
            <div className='day1-div'>
              <div className='day1'>Day 3</div>
            </div>
            <div className='day1-text-div'>
              <h2>ARRIVAL AT MALDIVES</h2>
              <div className='package-itineary-text-hr my-3'></div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, voluptate dolor quis repellat, deserunt aperiam minus dicta consequatur nulla atque, eligendi fuga amet eius possimus neque debitis at numquam autem sit perferendis itaque exercitationem.</p>
            </div>
          </div>
          <br />
          <div className='package-second-hr'></div>
        </div>
       
        </div>
   
      <div className='package-additional-info-main'>
        <h1 className='font-bold py-9 text-[27px]'>Additional information</h1>


        <div>
          <div>
            <p className='font-bold py-5'>INCLUSIONS</p>
            <ul className='list-disc inclutions-ul mx-8 px-3'>
              <li className='py-2'>4 Nights accommodation in selected room category</li>
              <li className='py-2'>Meal Plan: Full Board (breakfast,Lunch & Dinner)</li>
              <li className='py-2'>Dolphin Watching Tour with Lunch, Water & Soft Drinks</li>
              <li className='py-2'>Snorkelling Gear & Photography</li>
              <li className='py-2'>In-Room 500ml Bottled Mineral Water Per Day</li>
            </ul>
          </div>


          <div>
            <p className='font-bold py-5'>EXCLUSIONS</p>
            <ul className='list-disc inclutions-ul mx-8 px-3'>
              <li className='py-2'>4 Nights accommodation in selected room category</li>
              <li className='py-2'>Meal Plan: Full Board (breakfast,Lunch & Dinner)</li>
              <li className='py-2'>Dolphin Watching Tour with Lunch, Water & Soft Drinks</li>
              <li className='py-2'>Snorkelling Gear & Photography</li>
              <li className='py-2'>In-Room 500ml Bottled Mineral Water Per Day</li>
            </ul>
          </div>


      



        </div>


      </div>




      </div>
    </>
  )
}

export default Package