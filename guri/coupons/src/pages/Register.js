import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { registerfunction } from "../services/Apis";
import { NavLink, useNavigate } from "react-router-dom"



const Register = () => {

  const [passhow, setPassShow] = useState(false);

  const [inputdata, setInputdata] = useState({
    fname: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();


  // setinputvalue
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputdata({ ...inputdata, [name]: value })
  }


  // register data
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fname, email, password } = inputdata;

    if (fname === "") {
      toast.error("Enter Your Name")
    } else if (email === "") {
      toast.error("Enter Your Email")
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email")
    } else if (password === "") {
      toast.error("Enter Your Password")
    } else if (password.length < 6) {
      toast.error("password length minimum 6 character")
    } else {
      const response = await registerfunction(inputdata);
      //const json = await response.json();

      if (response.status === 200) {
        setInputdata({ ...inputdata, fname: "", email: "", password: "" });
        navigate("/")
      
      } else {
        toast.error(response.response.data.error);
      }
    }
  }


  return (
    <>
      
        
        <div id="mainCoantiner">
          
          <div>
            <div className="starsec" />
            <div className="starthird" />
            <div className="starfourth" />
            <div className="starfifth" />
          </div>
          <div className="container text-center text-dark mt-5">
            <div className="row">
              <div className="col-lg-6 d-block mx-auto mt-5">
                <div className="row">
                  <div className="col-xl- col-md-12 col-md-12">
                    <div className="wow-bg" id="formBg">
                      <h3 className="colorboard">Signup</h3>
                      <p className="text-muted">Create your UseCoupon account</p>
                      <form>
                        <div className="input-group mb-3">
                          <input type="text" name="fname" id="" className="form-control textbox-dg" onChange={handleChange} placeholder='Enter Your Name' />
                        </div>
                        <div className="input-group mb-3">
                          <input type="email" name="email" onChange={handleChange} className="form-control textbox-dg" placeholder="Email" />
                        </div>
                        <div className="input-group mb-4">
                          <input type={!passhow ? "password" : "text"} name="password" id="" className="form-control textbox-dg" onChange={handleChange} placeholder='Enter Your password' />
                          <div className='showpass' onClick={() => setPassShow(!passhow)} >
                            {!passhow ? "Show" : "Hide"}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <button type="submit" className="btn btn-primary btn-block logn-btn" onClick={handleSubmit}>Signup</button>
                            <p>You have Already Account? <NavLink to="/">Login</NavLink> </p>
                          </div>
                        </div>
                      </form>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p style={{textAlign:"center"}}>We are glad that you will be using Project Cloud to manage
              your tasks! We hope that you will get like it.</p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="fname">Name</label>
              <input type="text" name="fname" id="" onChange={handleChange} placeholder='Enter Your Name' />
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id=""  onChange={handleChange}  placeholder='Enter Your Email Address' />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className='two'>
              <input type={!passhow ? "password" : "text"} name="password" id=""  onChange={handleChange}  placeholder='Enter Your password' />
              <div className='showpass' onClick={()=>setPassShow(!passhow)} >
              {!passhow ? "Show" : "Hide"}
              </div>
              </div>
            </div>
            <button className='btn' onClick={handleSubmit}>Sign Up</button>
            <p>Don't have and account <NavLink to="/login">Login</NavLink> </p>
          </form>
        </div> */}
        <ToastContainer />
     
    </>
  )
}

export default Register