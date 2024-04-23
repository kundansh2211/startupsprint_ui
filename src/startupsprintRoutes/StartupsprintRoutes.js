import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { ApplicationGeneration, CustomerDashboard, CustomerHomePage, CustomerRegistration } from '../Components/CustomerComponents'
import LoginComponents from '../Components/LoginComponents'
import HomePageComponents from '../Components/HomePageComponents'
import { AccountsDashboard, AccountsHomePage, AccountsUser, AccountsUserLogin, UserChangePassword, UserResetPassword, UserUpdatePassword } from '../Components/AccountsComponents'
import { LoanRegistration, LoanSanctioningDashboard, LoanSanctioningHomePage, TestPayment, TransactionList } from '../Components/LoanSanctioningComponents'

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
            <Route path='/accounts' element={<AccountsDashboard />}>
                <Route path='' element={<AccountsHomePage />} />
                <Route path='user' element={<AccountsUser />} />
                <Route path='login' element={<AccountsUserLogin />} />
                <Route path='change_password' element={<UserChangePassword />} />
                <Route path='reset_password' element={<UserResetPassword />} />
                <Route path='update_password/:token' element={<UserUpdatePassword />} />
            </Route>
            <Route path='/loan_sanctioning' element={<LoanSanctioningDashboard />}>
                <Route path='' element={<LoanSanctioningHomePage />} />
                <Route path='registration/:pk' element={<LoanRegistration />} />
                <Route path='test' element={<TestPayment />} />
                <Route path='transaction' element={<TransactionList />} />
            </Route>
        </Routes>
    </>
  )
}

export default StartupsprintRoutes