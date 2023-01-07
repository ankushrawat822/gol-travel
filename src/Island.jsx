import React from 'react'
import boat from './assets/boat.svg'
import packagesearch from './assets/packagesearch.svg'

const Island = () => {
  return (
    <>
          <div className="heading-container">
          <h1>Island</h1>
        </div>

       <img className='packageboat' src={boat} alt="boat" />

        <div className='flex items-center justify-center '>
          <input className='package-hero-input' type="text" placeholder='Type a destination' />
          <img className='package-search-icon' src={packagesearch} alt="ps" />
        </div>
    </>
  )
}

export default Island