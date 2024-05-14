import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoanForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/loan_sanctioning/loan-sanction/', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      navigate('/admin/view-users');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="container mt-5">
      <h2 className="mb-4" style={{textAlign:'center'}}>Loan Application Form</h2>
      <form className="mt-3 container border rounded p-3 bg-light shadow" onSubmit={handleSubmit(onSubmit)}>

      <div className="row">
      <div className="col-md-6 mb-3">
            <label htmlFor="application">Application ID</label>
            <input type="number" className="form-control" id="application" name="application" {...register("application", { required: true })} />
            {errors.total_amount_and_processing_fees && <span className="text-danger">{errors.total_amount_and_processing_fees.message}</span>}
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="loan_principal_amount">Loan Principal Amount</label>
            <input type="number" className="form-control" id="loan_principal_amount" name="loan_principal_amount" {...register("loan_principal_amount",{ required: true })} />
            {errors.loan_principal_amount && <span className="text-danger">{errors.loan_principal_amount.message}</span>}
          </div>

          
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="interest_rate">Interest Rate</label>
            <input type="number" className="form-control" id="interest_rate" name="interest_rate" {...register("interest_rate", { required: true })} />
            {errors.interest_rate && <span className="text-danger">{errors.interest_rate.message}</span>}
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="loan_tenure">Loan Tenure</label>
            <input type="number" className="form-control" id="loan_tenure" name="loan_tenure" {...register("loan_tenure", { required: true })} />
            {errors.loan_tenure && <span className="text-danger">{errors.loan_tenure.message}</span>}
          </div>
        </div>

          {/* <div className="col-md-6 mb-3">
            <label htmlFor="total_amount_and_processing_fees">Total Amount and Processing Fees</label>
            <input type="number" className="form-control" id="total_amount_and_processing_fees" name="total_amount_and_processing_fees" {...register("total_amount_and_processing_fees", { required: true })} />
            {errors.total_amount_and_processing_fees && <span className="text-danger">{errors.total_amount_and_processing_fees.message}</span>}
          </div>
        </div> */}

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="installment">Installment</label>
            <input type="number" className="form-control" id="installment" name="installment" {...register("installment", { required: true })} />
            {errors.installment && <span className="text-danger">{errors.installment.message}</span>}
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="naturity_date">Maturity Date</label>
            <input type="date" className="form-control" id="naturity_date" name="naturity_date" {...register("naturity_date", { required: true })} />
            {errors.naturity_date && <span className="text-danger">{errors.naturity_date.message}</span>}
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="sanction_letter">Sanction Letter</label>
            <input type="file" className="form-control-file" id="sanction_letter" name="sanction_letter" {...register("sanction_letter")} />
            {errors.sanction_letter && <span className="text-danger">{errors.sanction_letter.message}</span>}
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="status">Status</label>
            <select className="form-control" id="status" name="status" {...register("status", { required: true })}>
              <option value="">Select Status</option>
              <option value="pending">Pending</option>
              <option value="done">Done</option>
              <option value="rejected">Rejected</option>
            </select>
            {errors.status && <span className="text-danger">{errors.status.message}</span>}
          </div>
        </div>
        <div className="row">
      <div className="col-md-6 mb-3">
        <label htmlFor="response_timestamp">Response Timestamp</label>
        <input type="datetime-local" className="form-control" id="response_timestamp" name="response_timestamp" {...register("response_timestamp")} />
        {errors.response_timestamp && <span className="text-danger">{errors.response_timestamp.message}</span>}
      </div>

      <div className="col-md-6 mb-3">
        <label htmlFor="remark">Remark</label>
        <input type="text" className="form-control" id="remark" name="remark" {...register("remark")} />
        {errors.remark && <span className="text-danger">{errors.remark.message}</span>}
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
    </div>
  );
}

export default LoanForm;
