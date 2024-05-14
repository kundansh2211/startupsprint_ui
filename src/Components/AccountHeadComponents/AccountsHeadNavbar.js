import React from 'react'
import { NavLink } from 'react-router-dom';

function AccountsHeadNavbar() {
  return(<nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#37517e' }}>
  <div className="container">
    <NavLink className="navbar-brand" to="/">Accounts Head Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin-dashboard/create-user">Create User</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">View Users</NavLink>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </div>
  </div>
</nav>
);
}

export default AccountsHeadNavbar