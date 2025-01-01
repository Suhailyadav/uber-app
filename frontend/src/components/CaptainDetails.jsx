import React, { useContext } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
const CaptainDetails = () => {

  const { captain } = useContext(CaptainDataContext)

  return (
    <div>
      
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-start gap-2'>
          <img className='h-10 w-10 rounded-full object-cover' src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="user" />
          <h4 className='text-lg font-medium capitalize'>{captain.fullname.firstname + " " + captain.fullname.lastname}</h4>
          </div>
            <div>
              <h4 className='text-xl font-semibold'>₹2054.20</h4>
              <p className='text-sm text-gray-600'>Earned</p>
            </div>
         
        
      </div>
      <div className='flex p-3 mt-6 bg-gray-100 rounded-xl justify-center items-start gap-6'>
        <div className='text-center'>
        <i className="text-3xl mb-2 font-thin ri-timer-flash-line"></i>
        <h5 className='text-lg font-medium'>10.2</h5>
        <p className='text-sm text-gray-600'>Hours Online</p>
        </div>
        <div className='text-center'>
        <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
        <h5 className='text-lg font-medium'>10.2</h5>
        <p className='text-sm text-gray-600'>Hours Online</p>
        </div>
        <div className='text-center'>
        <i className="text-3xl mb-2 font-thin ri-sticky-note-2-fill"></i>
        <h5 className='text-lg font-medium'>10.2</h5>
        <p className='text-sm text-gray-600' >Hours Online</p>
        </div>
      </div>
    </div>
  
  )
}

export default CaptainDetails
