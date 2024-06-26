import React from 'react'
import { NavLink } from 'react-router-dom';

function HomepageNavbar() {
    return (
        <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#37517e' }}>
            <div className="container-fluid">
                <NavLink className="navbar-brand text-white" to="/">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" activeClassName="active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" activeClassName="active" aria-current="page" to="/">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" activeClassName="active" aria-current="page" to="/">SignUp</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" activeClassName="active" aria-current="page" to="/login">Login</NavLink>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle text-white" activeClassName="active" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </NavLink>
                            <ul className="dropdown-menu ">
                                <li><NavLink className="dropdown-item" activeClassName="active" to="#">Action</NavLink></li>
                                <li><NavLink className="dropdown-item" activeClassName="active" to="#">Another action</NavLink></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><NavLink className="dropdown-item" activeClassName="active" to="#">Something else here</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link disabled text-white" aria-disabled="true" to="#" >Disabled</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default HomepageNavbar;

