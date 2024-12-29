import React, { useState } from "react";
import UberCaptainLogo from '../assets/uber-captain-logo.svg'
import { Link } from "react-router-dom";

const CaptainSignup = () => {
   const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [captainData, setCaptainData] = useState('')
    
    const submitHandler = (e) => {
      e.preventDefault()
      setCaptainData({
        fullname: {
          firstname: firstname,
          lastname: lastname
        },
        email: email,
        password: password
      })
  
      setEmail('')
      setFirstname('')
      setLastname('')
      setPassword('')

    }

  return (
    <div>
      <div className="p-5 h-screen flex flex-col justify-between">
        <div>
           <img className='w-16 mb-4' src={UberCaptainLogo} alt="uber-logo" />
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="ml-2"
            action=""
          >
            <h3 className="text-base font-medium mb-2">What's Captain Name</h3>
            <div className="flex gap-4 mb-6">
              <input
              required
                className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border text-base placeholder:text-sm"
                type="text"
                placeholder="First name"
                value={firstname}
                onChange={(e) => {
                  setFirstname(e.target.value)
                }}
              />

              <input
                className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm"
                type="text"
                placeholder="Last name"
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value)
                }}
              />
            </div>

            <h3 className="text-base font-medium mb-2">What's Captain Email</h3>
            <input
              className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
              type="email"
              placeholder="email@mail.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />

            <h3 className="text-base font-medium mb-2">Enter Password</h3>
            <input
              required
              className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />

            <button className="bg-[#111] text-white font-semibold mb-5 px-4 py-2 w-full text-lg">
              Login
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
          <p className="px-4 py-2  text-[7px] font-light ">This site is protected by reCAPTCHA and the Google Pivacy Policy and <span className=" font-light ">Terms of Service apply</span>.By proceeding, you consent to get Email, WhatsApp or SMS messages, including automated means, from Uber and its affiliates to the number provided</p>
        </div>
      </div>
    </div>
  )
}

export default CaptainSignup
