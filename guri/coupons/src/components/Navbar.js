import React from 'react'
import {
    Link,
    useLocation,
  } from "react-router-dom";
  //import { useLocation } from "react-router";
  
    
   
  
  
  const Navbar = () => {
      let location = useLocation();
      
  
      const handleLogout=()=>{
        localStorage.removeItem('tokens');
       location.push("/login")
      }


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
          <a className="navbar-brand" href="#">Use Coupons</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <Link className={`nav-link ${location.pathname === "/home" ? "active": ""}`}  to="/home">Home<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/addCoupons">AddCoupon </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/coupons">Coupons </Link>
              </li>
            
            </ul>
            {!localStorage.getItem('tokens')?<form className="d-flex">
             <Link className="btn btn-primary mx-1" to="/" role="button">Login</Link>
             <Link className="btn btn-primary mx-1" to="/register" role="button">Signup</Link>
            </form>: <button className="btn btn-primary" onClick={handleLogout}>Logout</button>}
          </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar
