import React from 'react'
import UberLogo from '../assets/uber-logo.png'
import RideWithUber from '../assets/Ride-with-Uber.webp'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className=' bg-cover bg-center  h-screen pt-5 w-full flex justify-between flex-col'
      style={{ backgroundImage: `url(${RideWithUber})`}}>
        <img className='w-16 ml-5' src={UberLogo} alt="uber-logo" />
        <div className='bg-white pb-4 py-4 px-5'>
          <h2 className='text-2xl font-bold'>Get started with Uber</h2>
          <Link to='/user-login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start
