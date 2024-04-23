import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

function UserUpdatePassword() {
    const {token} = useParams()

    const {register, handleSubmit, formState: {errors}} = useForm()

    function validatePassword(){
        const new_pass = document.getElementById('newPassword').value
        const confirm_pass = document.getElementById('confirmPassword').value

        if (new_pass !== confirm_pass){
            return 'New password and confirm password must be same.'
        }
        return true
    }

    function saveData(data){
        data.token = token
        axios.post('http://localhost:8000/update_password/', data).then((response)=>{
            alert('Your Password has been updated')
        }).catch((error)=>{
            console.log(error)
        })
    }

  return (
    <>
    <form className='container' onSubmit={handleSubmit(saveData)} >
        <div>
            <label htmlFor='newPassword'>New Password</label>
            <input type='password' id='newPassword' className='form-control' {...register('password', {required: true})} />
            {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input type='password' id='confirmPassword' className='form-control' required {...register('confirm_password', {validate: validatePassword})} />
            {errors.confirm_password && <p>{errors.confirm_password.message}</p>}
        </div>
        <input type='submit' className='btn btn-outline-success' />
    </form>
    </>
  )
}

export default UserUpdatePassword