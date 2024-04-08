import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { ApplicationGeneration, CustomerDashboard, CustomerHomePage, CustomerRegistration } from '../Components/CustomerComponents'
import LoginComponents from '../Components/LoginComponents'
import HomePageComponents from '../Components/HomePageComponents'

function StartupsprintRoutes() {
  return (
    <>
        <Routes>
            <Route path='' element={<HomePageComponents/>}/>
            <Route path='/login' element={<LoginComponents/>}/>
            <Route path='/customer' element={<CustomerDashboard/>}>
            <Route path='' element={<CustomerHomePage/>}/>
            <Route path='application' element={<ApplicationGeneration/>}/>
            <Route path='register' element={<CustomerRegistration/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default StartupsprintRoutes