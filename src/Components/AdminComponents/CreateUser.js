import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    // const validateDOB = (value) => {
    //     const currentDate = new Date();
    //     const dob = new Date(value);
    //     const age = currentDate.getFullYear() - dob.getFullYear();

    //     if (age < 18 || age > 100) {
    //         return "Age must be between 18 and 100 years";
    //     }

    //     return true;
    // };
    // const maxPhotoSize = 5 * 1024 * 1024; // 5MB
    // const maxSignatureSize = 1 * 1024 * 1024; // 1MB

    // const validatePhoto = (value) => {
    //     if (value && value[0].size > maxPhotoSize) {
    //         return 'Photo size must be less than 5MB';
    //     }

    // };

    // const validateSignature = (value) => {
    //     if (value && value[0].size > maxSignatureSize) {
    //         return 'Signature size must be less than 1MB';
    //     }
    // }


    const saveData = (data) => {
        data.mobile ="+91"+data.mobile
        axios.post('http://127.0.0.1:8000/accounts/user/', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        .then(() => {
            navigate('/admin/view-users');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
  return (
    <>
    <div className="container mt-3">
    <h2  className="mb-4" style={{textAlign:'center'}}>User Registration Form</h2></div>
    <form className="mt-3 container border rounded p-3 bg-light shadow" onSubmit={handleSubmit(saveData)}>
    <div className="row">
        <div className="col-md-6 mb-3">
        <label htmlFor="first_name" className="form-label fw-bold">First Name</label>
        <input type="text" className="form-control" id="first_name" name="first_name" {...register('first_name', { required: true })} />
        </div>
        <div className="col-md-6 mb-3">
        <label htmlFor="last_name" className="form-label fw-bold">Last Name</label>
        <input type="text" className="form-control" id="last_name" name="last_name" {...register('last_name', { required: true })} />
        
        </div>
    </div>
    <div className="row">
        
    <div className="col-md-6 mb-3">
        <label htmlFor="email" className="form-label fw-bold">Email</label>
        <input type="email" className="form-control" id="email" name="email" {...register('email', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} />
        {errors.email && <span className="text-danger">Please enter a valid email address</span>}
    </div>
    <div className="col-md-6 mb-3">
        <label htmlFor="dob" className="form-label fw-bold">Date of Birth</label>
        <input type="date" className="form-control" id="dob" name="dob" {...register('dob', { required: true, validate: validateDOB })} />
        {errors.dob && <span className="text-danger">{errors.dob.message}</span>}
    </div>
    </div>
    <div className="row">
    <div className="col-md-6 mb-3">
        <label htmlFor="password" className="form-label fw-bold">Password</label>
        <input type="password" className="form-control" id="password" name="password" {...register('password', { required: true })} />
        </div>
        
        <div className="col-md-6 mb-3">
        <label htmlFor="role" className="form-label fw-bold">Role</label>
        <select className="form-select" id="role" name="role" {...register('role', { required: true })}>
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="account_head">Account Head</option>
            <option value="loan_representative">Loan Representative</option>
            <option value="operational_head">Operational Head</option>
            <option value="loan_sanctioning_officer">Loan Sanctioning Officer</option>
            
        </select>
        </div>
    </div>
    <div className="row">
        <div className="col-md-6 mb-3">
        <label htmlFor="gender" className="form-label fw-bold">Gender</label>
        <select className="form-select" id="gender" name="gender" {...register('gender', { required: true })}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="transgender">Other</option>
        </select>
        </div>
        <div className="col-md-6 mb-3">
                <label htmlFor="mobile" className="form-label fw-bold">Mobile Number</label>
                <div className="input-group">
                    <span className="input-group-text">+91</span>
                    <input 
                        type="tel" 
                        className="form-control" 
                        id="mobile" 
                        name="mobile" 
                        {...register('mobile', { required: true, pattern: /^[0-9]{10}$/ })}
                    />
                </div>
                {errors.mobile && errors.mobile.type === 'required' && <span className="text-danger">Mobile number is required.</span>}
                {errors.mobile && errors.mobile.type === 'pattern' && <span className="text-danger">Invalid mobile number format (must be 10 digits).</span>}
            </div>
    </div>
    <div className="row">
        
        
    <div className="col-md-6 mb-3">
                <label htmlFor="photo" className="form-label fw-bold">Photo</label>
                <input type="file" className="form-control" id="photo" name="photo" {...register('photo', { required: true, validate: validatePhoto })} />
                {errors.photo && <span className="text-danger">{errors.photo.message}</span>}
            </div>
            <div className="col-md-6 mb-3">
                <label htmlFor="signature" className="form-label fw-bold">Signature</label>
                <input type="file" className="form-control" id="signature" name="signature" {...register('signature', { validate: validateSignature })} />
                {errors.signature && <span className="text-danger">{errors.signature.message}</span>}
            </div>
    </div>
    <div className="row">
    <div className="col-md-6 mb-3">
        <label htmlFor="current_address" className="form-label fw-bold">Current Address</label>
        <textarea className="form-control" id="current_address" name="current_address" rows="3" {...register('current_address', { required: true })} />
        </div>
        <div className="col-md-6 mb-3">
        <label htmlFor="permanent_address" className="form-label fw-bold">Permanent Address</label>
        <textarea className="form-control" id="permanent_address" name="permanent_address" rows="3" {...register('permanent_address', { required: true })} />
        </div>
    </div>
    <div className="row">
        
    <div className="col-md-6 mb-3">
        <label htmlFor="is_active" className="form-label fw-bold">Is Active</label>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" id="is_active" name="is_active" {...register('is_active')} />
            <label className="form-check-label" htmlFor="is_active">
            Active
            </label>
        </div>
        </div> 
        
    </div>
    <div className="row">
        <div className="col-md-6 mb-3">
            <button type="submit" className="btn btn-outline-success form-control">Submit</button>
        </div>
        <div className="col-md-6 mb-3">
            <button type="reset" className="btn btn-outline-warning form-control" onClick={() => reset()}>Reset</button>
        </div>
    </div>
    </form>
    </>
  )
}

export default CreateUser;