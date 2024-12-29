import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UserSignup from './pages/UserSignup'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'

const App = () => { 
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/user-signup' element={ <UserSignup /> } />
        <Route path='/user-login' element={ <UserLogin /> } />
        <Route path='/captain-signup' element={ <CaptainSignup /> } />
        <Route path='/captain-login' element={ <CaptainLogin /> } />
      </Routes>
    </div>
  )
}

export default App
