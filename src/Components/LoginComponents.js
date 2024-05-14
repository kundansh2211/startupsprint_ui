import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginComponent() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const saveData = (data) => {
    console.log(data);
    axios.post('http://127.0.0.1:8000/accounts/login/', data)
    .then(response => {
      const { access_token, refresh_token, role } = response.data;
      sessionStorage.setItem('token', access_token);
      sessionStorage.setItem('refresh_token', refresh_token);
      if (role === 'admin') {
        navigate('/admin-dashboard');
      } else if (role === 'account_head') {
        navigate('/account-head-dashboard');
      } else if (role === 'loan_representative') {
        navigate('/LR-dashboard');
      } else if (role === 'loan sanctioning officer') {
        navigate('/LSO-dashboard');
      } else {
        // Handle other roles if necessary(customer)
      }
    })
      .catch(error => {
        setError('Invalid email or password');
        console.error('Login failed:', error);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-2">Login</h2>
              {error && <div className="alert alert-danger" role="alert">{error}</div>}
              <form className="mt-3 container border rounded p-3 bg-light shadow" onSubmit={handleSubmit(saveData)}>
                <div className="mb-3">
                  <label htmlFor="email_or_mobile" className="form-label">Email or Mobile :</label>
                  <input type="text" id="email_or_mobile" name="email_or_mobile" className="form-control" {...register('email_or_mobile')} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password:</label>
                  <input type="password" id="password" name="password" className="form-control" {...register('password')} />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
