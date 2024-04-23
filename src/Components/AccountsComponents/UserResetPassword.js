import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

function UserResetPassword() {

    const {register, handleSubmit, formState: {errors}} = useForm()

    function saveData(data) {
        axios.post('http://localhost:8000/reset_password/', data).then((response)=>{
            alert('A Email for verification has been sent to you. Check your Email')
        }).catch((error)=>{
            console.log(error)
            alert('Your email is invalid. Please try again', error)
        })
    }

  return (
    <>
    <form className='container' onSubmit={handleSubmit(saveData)}>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className='form-control' placeholder='Enter Your Registered Email' {...register('email', {required: true})} />
            {errors.email && <p>{errors.email.message}</p>}
        </div>
        <input type='submit' className='btn btn-outline-info' />
    </form>
    </>
  )
}

export default UserResetPassword