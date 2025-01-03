import React from "react";
import UberMapImg from "../assets/uber-map.jpg";
import UberCarImg from "../assets/uber-car.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";
import LiveTracking from "../components/LiveTracking";

const Riding = () => {
  const location = useLocation();
  const { ride } = location.state || {};
  const { socket } = useContext(SocketContext)
  const navigate = useNavigate()

  socket.on('ride-ended', () => {
    navigate('/home')
  })
  return (
    <div className="h-screen">
      <Link
        to="/home"
        className="right-2 top-2 fixed h-10 w-10  flex items-center justify-center rounded-full"
      >
        <i className="text-lg font-bold ri-home-9-fill"></i>
      </Link>
      <div className="h-1/2 ">
        <LiveTracking pickup={ride.pickup} destination={ride.destination} />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img className="h-12" src={UberCarImg} alt="" />
          <div className="text-right">
            <h2 className="text-lg font-medium capitalize">{ride?.captain.fullname.firstname}</h2>
            <h4 className="text-lg font-semibold -mt-1 -mb-1">{ride?.captain.vehicle.plate}</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
          </div>
        </div>

        <div className="flex gap-2 flex-col justify-between items-center">
          <div className="w-full mt-5">
            <div className="flex items-center gap-4 p-3 border-b-2">
              <i className=" text-lg ri-map-pin-fill"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm -mt-1 text-gray-600">
                  {ride?.destination}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 ">
              <i className="text-lg ri-bank-card-2-fill"></i>
              <div>
                <h3 className="text-lg font-medium">₹ {ride?.fare}</h3>
                <p className="text-sm -mt-1 text-gray-600">Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
