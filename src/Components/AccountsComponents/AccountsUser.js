import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'

function AccountsUser() {
    const [sameAddress, setSameAddress] = useState(); // State for checkbox

    const {register, handleSubmit, formState: {errors}} = useForm()

    async function saveData(data) {
        console.log(data)
        data.photo = data.photo[0]
        data.signature = data.signature[0]
        await axios.post('http://localhost:8000/user/', data, {
            'headers':{ 'Content-Type': 'multipart/form-data'}
        })
    }

      const validateDOB = (value) => {
        const today = new Date();
        const dob = new Date(value)
        let age= today.getFullYear() - dob.getFullYear()
        const month_diff = today.getMonth() - dob.getMonth()
        // console.log(today)
        // console.log(dob)
        // console.log(age)
        // console.log(month_diff)
        if(month_diff < 0){
            age -= 1
        }

        if (age < 18 || age > 65) {
            return "you are not eligible for this program"
        }
        }

      const validatePhoto = (value) => {
        if (!value || !value[0]) {
          return "Photo is required";
        }
    
        // Check if the file type is supported (e.g., jpeg, png)
        const supportedTypes = ["image/jpeg", "image/png", "image/jpg"];
        if (!supportedTypes.includes(value[0].type)) {
          return "Unsupported file type for photo";
        }
    
        // Check if the file size is within the allowed limit (e.g., 5MB)
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (value[0].size > maxSize) {
          return "Photo file size exceeds the limit (5MB)";
        }
    
        return true; // Validation passed
      };

      const validateSignature = (value) => {
        if (!value || !value[0]) {
          return "Signature is required";
        }
    
        // Check if the file type is supported (e.g., jpeg, png)
        const supportedTypes = ["image/jpeg", "image/png", "image/jpg"];
        if (!supportedTypes.includes(value[0].type)) {
          return "Unsupported file type for Signature";
        }
    
        // Check if the file size is within the allowed limit (e.g., 5MB)
        const maxSize = 2 * 1024 * 1024; // 2MB
        if (value[0].size > maxSize) {
          return "Photo file size exceeds the limit (2MB)";
        }
    
        return true; // Validation passed
      };

  return (
    <>
    <form className='mt-3 container border rounded p-3 bg-light shadow' onSubmit={handleSubmit(saveData)} >
        <div className="row">
            <div className="col-md-6 mb-3">
                <label htmlhtmlFor="first_name" className="form-label fw-bold">First Name</label>
                <input type="text" className="form-control" placeholder="First name" id='first_name' aria-label="First name"  {...register('first_name', {
                    required: {
                        value: true,
                        message: "First name is required"
                    },pattern:{
                        value: /^[A-Za-z]{2,20}$/,
                        message: "First name must contain only alphabetic characters"
                    }
                })} />
                {errors.first_name && <p>{errors.first_name.message}</p>}
            </div>
            <div className="col-md-6 mb-3">
                <label htmlFor="last_name" className="form-label fw-bold">Last Name</label>
                <input type="text" className="form-control" placeholder="Last name" id='last_name' aria-label="Last name"  {...register('last_name', {
                    required: {
                        required: true,
                        message: 'Last name is required'
                    }, pattern: {
                        value: /^[A-Za-z]{2,20}$/,
                        message: "Last name must contain only alphabetic characters"
                    }
                })} />
                {errors.last_name && <p>{errors.last_name.message}</p>}
            </div>
            <div className="col-md-6 mb-3">
                <label htmlFor="inputEmail4" className="form-label fw-bold">Email</label>
                <input type="email" className="form-control float-end" id="inputEmail4" {...register('email', {
                    required: {
                        value: true,
                        message: 'Please enter your email'
                    }
                }) }  />
            </div>
            <div className="col-md-6 mb-3">
                <label htmlFor="mobile" className="form-label fw-bold">Mobile</label>
                <input type="tel" className="form-control" id="mobile" required {...register('mobile', {
                    required:{
                        value:true,
                        message: "Mobile number is required"
                    }, pattern:{
                        value: /^\+91[7-9]{1}[\d]{9}$/,
                        message: "Mobile number must be 10 digits"
                    }   
                 })} />
                {errors.mobile && <p>{errors.mobile.message}</p>}
            </div>
            <div className="col-md-6 mb-3">
                <label htmlFor='gender' className='form-label fw-bold' >Gender</label>
                <select className="form-select" id='gender' aria-label="Default select example" {...register('gender', {
                    required: {
                        value: true,
                        message: "Gender is required"
                    }
                })} >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="transgender">Transgender</option>
                </select>
            </div>
            <div className="col-md-6 mb-3">
                <label htmlFor="date" className="form-label fw-bold">Dob</label>
                <input type="date" className="form-control" id="date" required {...register('dob', {validate: validateDOB})} />
                {errors.dob && <p>{errors.dob.message}</p>}
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress" className="form-label fw-bold">Permanent Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" {...register('permanent_address', {
                    required:{
                        value:true,
                        message: "Permanent address is required"
                    }, minLength:{
                        value: 20,
                        message: "Permanent address must contain at least 20 characters"
                    }, maxLength:{
                        value: 100,
                        message: "Permanent address must contain at most 100 characters"
                    }
                })} />
                {errors.inputAddress && <p>{errors.inputAddress.message}</p>}
            </div>
            <label>
                <input type="checkbox" onChange={() => setSameAddress(document.getElementById('inputAddress').value)} className='mt-3 mb-2' /> Same as Current Address
            </label>
            <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label fw-bold">Current Address </label>
                <input type="text" className="form-control" id="inputAddress2" value={sameAddress} placeholder="Apartment, studio, or floor" {...register('current_address', {
                    required:{
                        value:true,
                        message: "Current address is required"
                    }, minLength:{
                        value: 20,
                        message: "Permanent address must contain at least 20 characters"
                    }, maxLength:{
                        value: 100,
                        message: "Permanent address must contain at most 100 characters"
                    }
                })} />
                {errors.inputAddress2 && <p>{errors.inputAddress2.message}</p>}
            </div>
            <div className="col-md-6 mb-3">
                <label className="form-label fw-bold mt-2" htmlFor="photo">Upload Your Photo</label>
                <input type="file" className="form-control" id="photo" {...register('photo', {validate: validatePhoto})} />
                {errors.photo && <p>{errors.photo.message}</p>}
            </div>
            <div className="col-md-6 mb-3">
                <label className="form-label fw-bold mt-2" htmlFor="signature">Upload Your Signature </label>
                <input type="file" className="form-control" id="signature" {...register('signature', {validate: validateSignature})} />
                {errors.signature && <p>{errors.signature.message}</p>} 
            </div>
            <input type='submit' className='btn btn-outline-success mt-3 col-6 ' />
            <input type='reset' className='btn btn-outline-danger mt-3 col-6' />
        </div>
    </form>
    </>
  )
}

export default AccountsUser