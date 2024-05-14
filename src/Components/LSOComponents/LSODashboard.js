import React from 'react'
import LSONavbar from './LSONavbar'
import { Outlet } from 'react-router-dom'

function LSODashboard() {
  return (
    <>
        <LSONavbar/>
        <Outlet/>
    </>
  )
}

export default LSODashboard