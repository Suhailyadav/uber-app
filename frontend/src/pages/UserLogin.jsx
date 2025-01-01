import React, { useState, useContext } from 'react'
import UberLogo from '../assets/uber-logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { user, setUser } = useContext(UserDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    
    const userData = {
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    if(response.status === 200) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-5 h-screen flex flex-col justify-between' >
     <div>
     <img className='w-16 mb-10' src={UberLogo} alt="uber-logo" />
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
        <p className='text-sm text-center flex gap-[2px] justify-center'>New here? 
          <Link to='/user-signup' className='text-blue-500 font-semibold'>Create new Account</Link>
        </p>
        
      </form>
     </div>
     <div>
      <Link to='/captain-login' className='flex items-center justify-center bg-[#d8d5d5] text-black font-semibold mb-7 px-4 py-2 w-full rounded text-lg'>Sign in as Captain</Link>
     </div>
      
    </div>
  )
}

export default UserLogin
