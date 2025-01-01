import React, { useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import UberLogo from '../assets/uber-logo.png'
import UberMapImg from '../assets/uber-map.jpg' 
import FinishRide from '../components/FinishRide'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import LiveTracking from '../components/LiveTracking'

const CaptainRiding = () => {

  const [finishRidePanel, setFinishRidePanel] = useState(false)
  const location = useLocation()
  const rideData = location.state?.ride

  const finishRidePanelRef = useRef(null)

  useGSAP(function (){
    if(finishRidePanel){
      gsap.to(finishRidePanelRef.current,{
        transform: 'translateY(0)'
      })
    }
    else {
      gsap.to(finishRidePanelRef.current, {
        transform:'translateY(100%)'
      })
    }
    
  }, [finishRidePanel])



  return (
    <div className='h-screen relative'>
      
    <div className='fixed p-3 top-0 flex item-center justify-between w-screen'>
       <img className='w-16' src={UberLogo} alt="map" />
      <Link to='/captain-home' className='h-10 w-10  flex items-center justify-center rounded-full'>
    <i className="text-lg font-bold ri-logout-box-r-line"></i>
    </Link>
    </div>
    <div className='h-4/5 '>
       <LiveTracking pickup={rideData.pickup} destination={rideData.destination} />
    </div>
    <div className='h-1/5 p-6 flex items-center justify-between bg-white relative'
    onClick={() => {
      setFinishRidePanel(true)
    }}
    >
    <h5 className="p-1 text-center absolute top-0 w-[93%]">
              <i className="text-3xl text-gray-200 ri-arrow-up-wide-fill"></i>
            </h5>
      <h4 className='text-lg font-semibold'>4 KM away</h4>
      <button className="p-3 px-8  bg-green-600 text-white font-semibold  rounded-lg ">Complete Ride</button>
    </div>

    <div ref={finishRidePanelRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full  px-3 py-10 pt-12 '>
          <FinishRide
          ride={rideData}
           setFinishRidePanel={setFinishRidePanel} />
      </div>
    
  </div>
  )
}

export default CaptainRiding
