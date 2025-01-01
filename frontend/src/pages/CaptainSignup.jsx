import React, { useState } from "react";
import UberCaptainLogo from "../assets/uber-captain-logo.svg";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainSignup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`, captainData
    );

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setFirstname("");
    setLastname("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  }

  return (
    <div>
      <div className="p-5 h-screen flex flex-col justify-between">
        <div>
          <img className="w-16 mb-4" src={UberCaptainLogo} alt="uber-logo" />
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="ml-2"
            action=""
          >
            <h3 className="text-base font-medium mb-2">What's Captain Name</h3>
            <div className="flex gap-4 mb-4">
              <input
                required
                className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border text-base placeholder:text-sm"
                type="text"
                placeholder="First name"
                value={firstname}
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
              />

              <input
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm"
                type="text"
                placeholder="Last name"
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
              />
            </div>

            <h3 className="text-base font-medium mb-2">What's Captain Email</h3>
            <input
              className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
              type="email"
              placeholder="email@mail.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <h3 className="text-base font-medium mb-2">Enter Password</h3>
            <input
              required
              className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <h3 className="text-base font-medium mb-2">Vehicle Information</h3>
            <div className="flex gap-4 mb-4">
              <input
                required
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-base placeholder:text-sm"
                type="text"
                placeholder="Vehicle Color"
                value={vehicleColor}
                onChange={(e) => {
                  setVehicleColor(e.target.value);
                }}
              />
              <input
                required
                className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
                type="text"
                placeholder="Vehicle Plate"
                value={vehiclePlate}
                onChange={(e) => {
                  setVehiclePlate(e.target.value);
                }}
              />
            </div>
            <div className="flex gap-4 mb-7">
              <input
                required
                className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
                type="number"
                placeholder="Vehicle Capacity"
                value={vehicleCapacity}
                onChange={(e) => {
                  setVehicleCapacity(e.target.value);
                }}
              />
              <select
                required
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-base placeholder:text-sm"
                value={vehicleType}
                onChange={(e) => {
                  setVehicleType(e.target.value);
                }}
              >
                <option value="" disabled>
                  Select Vehicle Type
                </option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="moto">Moto</option>
              </select>
            </div>

            <button className="bg-[#111] text-white font-semibold mb-2 px-4 py-2 w-full text-lg">
              Create Captain account
            </button>
            <p className="text-sm text-center flex gap-[2px] justify-center">
              Already have an account?
              <Link to="/captain-login" className="text-blue-500 font-semibold">
                Login here
              </Link>
            </p>
          </form>
        </div>
        <div>
          <p className="px-4 py-2  text-[7px] font-light ">
            This site is protected by reCAPTCHA and the Google Pivacy Policy and{" "}
            <span className=" font-light ">Terms of Service apply</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;
