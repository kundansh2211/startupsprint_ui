import React from 'react'
import LRNavbar from './LRNavbar'
import { Outlet } from 'react-router-dom'

function LoanRepresentativeDashboard() {
  return (
    <>
      <LRNavbar/>
      <Outlet/>
    </>
  )
}

export default LoanRepresentativeDashboard