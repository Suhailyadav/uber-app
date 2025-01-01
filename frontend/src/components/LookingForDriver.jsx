import React from 'react'
import UberCarImg from '../assets/uber-car.png'

const LookingForDriver = (props) => {
  return (
    <div>
          <h5
            className="p-1 text-center absolute top-0 w-[93%]"
            onClick={() => {
              props.setVehicleFound(false);
            }}
          >
            <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
          </h5>
          <h3 className="text-2xl font-semibold mb-5">Looking for a Driver</h3>
    
          <div className="flex gap-2 flex-col justify-between items-center">
            <img className="h-20" src={UberCarImg} alt="" />
            <div className="w-full mt-5">
    
              <div className="flex items-center gap-4 p-3 border-b-2">
                <i className=" text-lg ri-map-pin-fill"></i>
                <div>
                  <h3 className="text-lg font-medium">562/11-A</h3>
                  <p className="text-sm -mt-1 text-gray-600">
                    {props.pickup}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 border-b-2">
                <i className=" text-lg ri-map-pin-fill"></i>
                <div>
                  <h3 className="text-lg font-medium">562/11-A</h3>
                  <p className="text-sm -mt-1 text-gray-600">
                    {props.destination}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 ">
              <i className="text-lg ri-bank-card-2-fill"></i>
                <div>
                  <h3 className="text-lg font-medium">₹ {props.fare[props.vehicleType]}</h3>
                  <p className="text-sm -mt-1 text-gray-600">
                    Cash
                  </p>
                </div>
              </div>
            </div>
           
          </div>
        </div>
  )
}

export default LookingForDriver
