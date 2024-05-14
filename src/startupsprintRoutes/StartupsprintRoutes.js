import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ApplicationGeneration, CustomerDashboard, CustomerHomePage, CustomerRegistration } from '../Components/CustomerComponents'
import LoginComponents from '../Components/LoginComponents'
import HomePageComponents from '../Components/HomePageComponents'
import { AdminHomePage, AdminUsers, CreateUser } from '../Components/AdminComponents'
import AdminDashboard from '../Components/AdminComponents/AdminDashboard'
import { Chart } from 'chart.js'
import { LSODashboard, LoanForm } from '../Components/LSOComponents'
import { LoanRepresentativeDashboard } from '../Components/LRComponents'
import { AccountHeadDashboard } from '../Components/AccountHeadComponents'


function StartupsprintRoutes() {
  return (

      <>
        <Routes>
          <Route path='' element={<HomePageComponents/>}>
            <Route path='login' element={<LoginComponents/>}/>
            <Route path='chart' element={<Chart/>}/>
          </Route>
          <Route path='/admin-dashboard' element={<AdminDashboard/>}>
            <Route path='create-user' element={<CreateUser/>}/>
            <Route path='view-users' element={<AdminUsers/>}/>
            <Route path='home' element={<AdminHomePage/>}/>
          </Route>
          <Route path='/customer-dashboard' element={<CustomerDashboard/>}>
            <Route path='' element={<CustomerHomePage/>}/>
            <Route path='application' element={<ApplicationGeneration/>}/>
            <Route path='register' element={<CustomerRegistration/>}/>
          </Route>
          <Route path='/LSO-dashboard' element={<LSODashboard/>}>
            <Route path='loan-form' element={<LoanForm/>}/>
          </Route>
          <Route path='/LR-dashboard' element={<LoanRepresentativeDashboard/>}/>
          <Route path='/accounts-head-dashboard' element={<AccountHeadDashboard/>}/>
        </Routes>

      </>
    
  )
}

export default StartupsprintRoutes;
