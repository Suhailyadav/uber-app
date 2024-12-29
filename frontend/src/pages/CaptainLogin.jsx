import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UberCaptainLogo from '../assets/uber-captain-logo.svg'


const CaptainLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captainData, setCaptainData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    setCaptainData({
      email: email,
      password: password
    })
    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-5 h-screen flex flex-col justify-between' >
     <div>
     <img className='w-16 mb-4' src={UberCaptainLogo} alt="uber-logo" />
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='ml-2' action="">
        <h3 className='text-lg font-medium mb-2'>What's your Email</h3>
        <input 
        required 
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-sm'
        type="email"
        placeholder='email@mail.com' />

        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        <input 
        required
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
         className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-sm'
        type="password"
        placeholder='password' />

        <button className='bg-[#111] text-white font-semibold mb-5 px-4 py-2 w-full text-lg'>
          Login
        </button>
        <p className='text-sm text-center flex gap-[2px] justify-center'>Be a Captain here? 
          <Link to='/captain-signup' className='text-blue-500 font-semibold'>Create Captain Account</Link>
        </p>
        
      </form>
     </div>
     <div>
      <Link to='/user-login' className='flex items-center justify-center bg-[#d8d5d5] text-black font-semibold mb-7 px-4 py-2 w-full rounded text-lg'>Sign in as User</Link>
     </div>
      
    </div>
  )
}

export default CaptainLogin
