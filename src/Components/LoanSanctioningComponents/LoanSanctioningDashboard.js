import React from 'react'
import LoanSanctioningNavbar from './LoanSanctioningNavbar'
import { Outlet } from 'react-router-dom'

function LoanSanctioningDashboard() {
  return (
    <>
    <LoanSanctioningNavbar />
    <Outlet/>
    </>
  )
}

export default LoanSanctioningDashboard