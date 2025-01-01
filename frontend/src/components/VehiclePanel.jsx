import React from 'react'
import UberCarImg from '../assets/uber-car.png'
import UberBikeImg from '../assets/uber-bike.jpeg'
import UberAutoImg from '../assets/uber-auto.jpeg'

const VehiclePanel = (props) => {
  return (
    <div>
      
      <h5 className='p-1 text-center absolute top-0 w-[93%]' onClick={()=>{
        props.setVehiclePanel(false)
      }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Your ride</h3>
        <div onClick={()=>{
          props.setConfirmRidePanel(true)
          props.selectVehicle('car')
        }} className='border-2 active:border-black  rounded-xl flex p-3 mb-2 w-full items-center justify-between'>
          <img className='h-10' src={UberCarImg} alt="ubercar" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberGo<span><i className="ri-user-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹ {props.fare.car}</h2>
        </div>

        <div onClick={()=>{
          props.setConfirmRidePanel(true)
          props.selectVehicle('auto')
        }} className='border-2 active:border-black  rounded-xl flex p-3 mb-2 w-full items-center justify-between'>
          <img className='h-10' src={UberAutoImg} alt="ubercar" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberAuto<span><i className="ri-user-fill"></i>2</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable Auto rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹ {props.fare.auto}</h2>
        </div>

        <div onClick={()=>{
          props.setConfirmRidePanel(true)
          props.selectVehicle('moto')
        }}
        className='border-2 active:border-black  rounded-xl flex p-3 mb-2 w-full items-center justify-between'>
          <img className='h-10 ' src={UberBikeImg} alt="ubercar" />
          <div className='-ml-2 w-1/2'>
            <h4 className='font-medium text-base'>Moto<span><i className="ri-user-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable motorcycle rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹ {props.fare.moto}</h2>
        </div>
      </div>
      
    
  )
}

export default VehiclePanel
