import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomerNavbar from './CustomerNavbar'

function CustomerDashboard() {
  return (
<>
   <CustomerNavbar/>
   <Outlet/>
</>
  )
}

export default CustomerDashboard
