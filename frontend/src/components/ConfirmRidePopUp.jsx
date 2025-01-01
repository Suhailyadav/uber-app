import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState('')

  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()

    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
      params:{
      rideId: props.ride._id,
      otp: otp
    }, 
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    if (response.status === 200) {
      props.setConfirmRidePopUpPanel(false)
      props.setRidePopUpPanel(false)
      navigate('/captain-riding',{ state: { ride: props.ride } })
    }

   
  }
  return (
    <div>
       <h5
              className="p-1 text-center absolute top-0 w-[93%]"
              onClick={() => {
                // props.setRidePopUpPanel(false)
                props.setConfirmRidePopUpPanel(false)
              }}
            >
              <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
            </h5>
            <h3 className="text-2xl font-semibold mb-5">Confirm Ride</h3>
            <div className='flex items-center justify-between p-3 bg-gray-200 rounded-lg mt-3'>
              <div className='flex items-center gap-3 '>
                <img className='h-10 w-10 rounded-full object-cover' src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="profile-photo" />
                <h2 className='text-lg font-medium capitalize'>{props.ride?.user.fullname.firstname}</h2>
              </div>
              <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>
      
            <div className="flex gap-2 flex-col justify-between items-center">
      
              <div className="w-full mt-5">
      
                <div className="flex items-center gap-4 p-3 border-b-2">
                  <i className=" text-lg ri-map-pin-fill"></i>
                  <div>
                    <h3 className="text-lg font-medium">562/11-A</h3>
                    <p className="text-sm -mt-1 text-gray-600">
                      {props.ride?.pickup}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 border-b-2">
                  <i className=" text-lg ri-map-pin-fill"></i>
                  <div>
                    <h3 className="text-lg font-medium">562/11-A</h3>
                    <p className="text-sm -mt-1 text-gray-600">
                    {props.ride?.destination}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 ">
                <i className="text-lg ri-bank-card-2-fill"></i>
                  <div>
                    <h3 className="text-lg font-medium">₹ {props.ride?.fare}</h3>
                    <p className="text-sm -mt-1 text-gray-600">
                      Cash
                    </p>
                  </div>
                </div>
              </div>
              
              <div className='mt-6 w-full'>
               <form action="" onSubmit={submitHandler}>
                <input
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value)
                }}
                 className='bg-[#eeeeee] px-6 py-4 text-sm font-mono rounded-lg w-full mt-3' type="text" placeholder='Enter OTP' />

               <button className="flex justify-center w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">
                Confirm
              </button>

              <button onClick={()=>{
                props.setConfirmRidePopUpPanel(false)
                props.setRidePopUpPanel(false)
              }} className="w-full mt-2 bg-gray-300 text-gray-700 font-semibold p-2 rounded-lg">
                Cancel
              </button>
               </form>
              </div>
            </div>
    </div>
  )
}

export default ConfirmRidePopUp
