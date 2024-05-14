import React from 'react'
import AdminNavbar from './AdminNavbar'
import { Outlet } from 'react-router-dom'

function AdminDashboard() {
  return (
    <>
    <AdminNavbar/>
    <Outlet/>
    </>
  )
}  

export default AdminDashboard;