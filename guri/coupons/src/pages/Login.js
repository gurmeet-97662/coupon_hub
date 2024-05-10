import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import { sendOtpFunction } from '../services/Apis';
import Spinner from 'react-bootstrap/Spinner';
import "../styles/mixx.css"

const Login = () => {

    const [email, setEmail] = useState("");
    const [spiner,setSpiner] = useState(false);

    const navigate = useNavigate();



    // sendotp
    const sendOtp = async (e) => {
        e.preventDefault();

        if (email === "") {
            toast.error("Enter Your Email !")
        } else if (!email.includes("@")) {
            toast.error("Enter Valid Email !")
        } else {
            setSpiner(true)
            const data = {
                email: email
            }

            const response = await sendOtpFunction(data);
            
            if (response.status === 200) {
                setSpiner(false)
                navigate("/user/otp",{state:email})
               // localStorage.setItem('token', json.authtoken)
            } else {
                toast.error(response.response.data.error);
            }
        }
    }

    return (
        <>
            {/* <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Welcome Back, Log In</h1>
                        <p>Hi, we are you glad you are back. Please login.</p>
                    </div>
                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email Address' />
                        </div>
                        <button className='btn' onClick={sendOtp}>Login
                        {
                            spiner ? <span><Spinner animation="border" /></span>:""
                        }
                        </button>
                        <p>Don't have and account <NavLink to="/register">Sign Up</NavLink> </p>
                    </form>
                </div>
                <ToastContainer />
            </section> */}

<>
  {/* Hello world */}
  
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
                  <h3 className="colorboard">Login</h3>
                  <p className="text-muted">Sign In to your account</p>
                  <form>
                       
                        <div className="input-group mb-3">
                          <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} className="form-control textbox-dg" placeholder="Email" />
                        </div>
                        
                       
                      </form>
                
                  <div className="row">
                    <div className="col-12">
                      {" "}
                      <button
                        type="button"
                        className="btn btn-primary btn-block logn-btn"
                        onClick={sendOtp}>Login
                        {
                            spiner ? <span><Spinner animation="border" /></span>:""
                        }
                      
                     
                      </button>{" "}
                      <p>You have not any Account? <NavLink to="/register">Register</NavLink> </p>
                    </div>
                   
                  </div>
                  <div className="mt-6 btn-list">
                    <button
                      type="button"
                      className="socila-btn btn btn-icon btn-facebook fb-color"
                    >
                      <i className="fab fa-facebook-f faa-ring animated" />
                    </button>{" "}
                    <button
                      type="button"
                      className="socila-btn btn btn-icon btn-google incolor"
                    >
                      <i className="fab fa-linkedin-in faa-flash animated" />
                    </button>{" "}
                    <button
                      type="button"
                      className="socila-btn btn btn-icon btn-twitter tweetcolor"
                    >
                      <i className="fab fa-twitter faa-shake animated" />
                    </button>{" "}
                    <button
                      type="button"
                      className="socila-btn btn btn-icon btn-dribbble driblecolor"
                    >
                      <i className="fab fa-dribbble faa-pulse animated" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p />
  
</>

            
        </>
    )
}

export default Login