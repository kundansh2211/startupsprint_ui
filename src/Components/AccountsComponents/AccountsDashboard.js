import React from 'react'
import AccountsNavbar from './AccountsNavbar'
import {Outlet} from 'react-router-dom'

function AccountsDashboard() {
  return (
    <>
        <AccountsNavbar />
        <Outlet />
    </>
  )
}

export default AccountsDashboard