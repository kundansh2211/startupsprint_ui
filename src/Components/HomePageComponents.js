import React from 'react'
import { Outlet } from 'react-router-dom'
import HomepageNavbar from './HomepageNavbar'

function HomePageComponents() {
  return (
    <>
        <HomepageNavbar/>
        <Outlet/>
    </>
  )
}

export default HomePageComponents