import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'
const Header = () => {
    return (
        <>
             <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3" style={{backgroundColor:"black"}}>
        <div className="container">
          <Link to="/" className="navbar-brand" >Haider Tech</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="mx-auto" />
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link text-white" >About</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link text-white" >Servies</Link>
              </li>
              <li className="nav-item">
                <Link  to="/" className="nav-link text-white" >Courses</Link>
              </li>
            </ul>
            <div className="d-flex">
            <button type="button" className="btn header-btn">
              
              <Link to="/" className='header-btn-link'>
                Contact
              </Link>
            </button>

      </div>
          </div>
        </div>
      </nav>
        </>
    )
}

export default Header
