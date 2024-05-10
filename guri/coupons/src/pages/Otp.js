import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { userVerify } from "../services/Apis"
import "../styles/otp.css"


const Otp = () => {
  const [otp, setOtp] = useState("");

  const location = useLocation();

  const navigate = useNavigate();

  const LoginUser = async (e) => {
    e.preventDefault();

    if (otp === "") {
      toast.error("Enter Your Otp")
    } else if (!/[^a-zA-Z]/.test(otp)) {
      toast.error("Enter Valid Otp")
    } else if (otp.length < 6) {
      toast.error("Otp Length minimum 6 digit")
    } else {
      const data = {
        otp, email: location.state
      }

      const response = await userVerify(data);
      if (response.status === 200) {
        localStorage.setItem("userdbtoken", response.data.userToken);
        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/home")
        }, 5000)
      } else {
        toast.error(response.response.data.error)
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
                    <h3 className="colorboard">Enter OTP</h3>
                    <p className="text-muted">Enter OTP you should have recieved on your mail-id</p>
                    <form>

                      <div className="input-group mb-3">
                        <input type="text" name="otp" id="" onChange={(e) => setOtp(e.target.value)} className="form-control textbox-dg" placeholder='Enter Your OTP' />
                      </div>


                    </form>

                    <div className="row">
                      <div className="col-12">
                        {" "}
                        <button
                          type="button"
                          className="btn btn-primary btn-block logn-btn"
                          onClick={LoginUser}>Submit

                        </button>{" "}
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

      {/* <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Please Enter Your OTP Here</h1>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="otp">OTP</label>
              <input type="text" name="otp" id="" onChange={(e) => setOtp(e.target.value)} placeholder='Enter Your OTP' />
            </div>
            <button className='btn' onClick={LoginUser}>Submit</button>
          </form>
        </div>
        <ToastContainer />
      </section> */}
    </>
  )
}

export default Otp