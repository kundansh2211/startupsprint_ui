import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'

function AccountsUserLogin() {

    const {register, handleSubmit} = useForm()

    const navi = useNavigate()

    function saveData(data) {
        axios.post('http://localhost:8000/access/', data).then((response) => {
            sessionStorage.setItem('token', response.data.access )
            console.log(response.data.access)
        }).catch((error)=>{
            console.log(error)
        })
        navi('/accounts')
    }

  return (
    <>
    <form className='mt-3 container border rounded p-3 bg-light shadow' onSubmit={handleSubmit(saveData)} >
        <div className='row'>
            <div className='col-12 mb-3'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' className='form-control' placeholder='Enter Your Email' {...register('email')} />
            </div>
            <div className='col-12 mb-3'>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' placeholder='Enter Your Password' className='form-control' {...register('password')} />
                <NavLink to='/accounts/reset_password' ><span className='fst-italic'>Forgot Password?</span></NavLink> 
            </div>
            <div className='col-md-6 mb-3'>
                <input type='submit' value='login' className='btn btn-outline-info'/>
            </div>
        </div>
    </form>
    </>
  )
}

export default AccountsUserLogin