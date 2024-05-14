import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Enquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('');
  
  async function fetchData() {
    try {
      const result = await axios.get("http://127.0.0.1:8000/customer/enquiry/");
      setEnquiries(result.data);
    } catch (error) {
      console.error('Error fetching enquiries:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleUpdate = async (id) => {
    try {
      await axios.patch(`http://127.0.0.1:8000/customer/enquiry/${id}/`, { status: selectedStatus });
      alert('Enquiry status updated successfully!');
      // Here you can add code to send an email to the user
    } catch (error) {
      console.error('Error updating enquiry status:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Loan Enquiries</h1>
      <div className="row">
        {enquiries.map((enquiry, index) => (
          <div key={enquiry.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Enquiry #{enquiry.id}</h5>
                <p className="card-text"><strong>First Name:</strong> {enquiry.first_name}</p>
                <p className="card-text"><strong>Last Name:</strong> {enquiry.last_name}</p>
                <p className="card-text"><strong>Email:</strong> {enquiry.email}</p>
                <p className="card-text"><strong>Mobile:</strong> {enquiry.mobile}</p>
                <p className="card-text"><strong>Enquiry Date:</strong> {enquiry.enquiry_date}</p>
                <p className="card-text">
                  <strong>Status:</strong> {enquiry.status}
                  <select value={selectedStatus} onChange={handleStatusChange}>
                    <option value="">Select Status</option>
                    <option value="pending">Pending</option>
                    <option value="resolved">Resolved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </p>
                <button className="btn btn-outline-warning" onClick={() => handleUpdate(enquiry.id)}>Update</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Enquiries;


