import React from 'react'
import AccountsHeadNavbar from './AccountsHeadNavbar'
import { Outlet } from 'react-router-dom'

function AccountHeadDashboard() {
  return (
    <>
        <AccountsHeadNavbar/>
        <Outlet/>
    </>
  )
}

export default AccountHeadDashboard