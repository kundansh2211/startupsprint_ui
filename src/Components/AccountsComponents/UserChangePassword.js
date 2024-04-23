import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

function UserChangePassword() {

    const {register, handleSubmit, formState: {errors}} = useForm()

    function saveData(data) {
        axios.post('http://localhost:8000/change_password/', data, {
            'headers': {
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')
            } 
        }).then((response)=>{
            alert('Password changed successfully')
        }).catch((error)=>{
            alert('Error: ' + error.message)
        })
    }

    function validatePassword(){
        const new_pass = document.getElementById('newPassword').value
        const confirm_pass = document.getElementById('confirmPassword').value

        if (new_pass !== confirm_pass){
            return 'New password and confirm password must be same.'
        }
        return true
    }

  return (
    <>
    <form className='container' onSubmit={handleSubmit(saveData)}>
        <div>
            <label htmlFor='oldPassword'>Old Password</label>
            <input type='password' id='oldPassword' className='form-control' placeholder='Enter Your old Password' {...register('old_password', {
                required: {
                    value: true,
                    message: 'Enter your password'
                }
            })} />
            {errors.old_password && <p>{errors.old_password.message}</p>}
        </div>
        <div>
            <label htmlFor='newPassword'>New Password</label>
            <input type='password' id='newPassword' className='form-control' placeholder='Enter Your new Password' {...register('new_password', {
                required: {
                    value: true,
                    message: 'Enter your password'
                }
            })} />
            {errors.new_password && <p>{errors.new_password.message}</p>} 
        </div>
        <div>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input type='password' id='confirmPassword' className='form-control' placeholder='Enter the Password again' required {...register('confirm_password', {validate: validatePassword})} />
            {errors.confirm_password && <p>{errors.confirm_password.message}</p>}
        </div>
        <input type='submit' className='btn btn-outline-success' />
    </form>
    </>
  )
}

export default UserChangePassword