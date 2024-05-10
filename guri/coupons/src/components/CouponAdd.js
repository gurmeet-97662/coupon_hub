import React, { useState } from "react";
import axios  from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { addCoupon } from "../services/Apis";
const host = "http://localhost:8000";

function CouponAdd(props) {
	
	const [coupon,setCoupon] = useState({
		companyName: "",
		couponCode: "",
		lastDate: "",
		description: "",
		price: ""
	  });
	
	  const navigate = useNavigate();
	  
	
	  // setinputvalue
	  const handleChange = (e)=>{
		const {name,value} = e.target;
		setCoupon({...coupon,[name]:value})
	  }
	
	
	  // register data
	  const handleSubmit = async(e)=>{
		e.preventDefault();
		const {companyName,couponCode,lastDate,description,price} = coupon;
	
		if(companyName === ""){
		  toast.error("Enter Your coupon Company")
		}else if(couponCode === ""){
		  toast.error("Enter Your Coupon Code")
		}else if(lastDate === ""){
		  toast.error("Enter lastdate of your coupon")
		}else if(description === ""){
			toast.error("Enter you coupon description")
		}else if(price === ""){
			toast.error("Enter you coupon description")
		}
		
		else{
			const response = await axios.post(`${host}/api/coupons/`, coupon);
		  
		  if(response.status === 200){
			setCoupon({...coupon,companyName:"",couponCode:"",lastDate:"", description:""});
			navigate("/coupons")
		  }else{
			toast.error(response.response.data.error);
		  }
		}
	  }
	  function handleCancel() {
		navigate("/cruds");
	}

	return (
		<div id="mainCoantiner">
    
    {/*dust particel*/}
    <div>
      <div className="starsec" />
      <div className="starthird" />
      <div className="starfourth" />
      <div className="starfifth" />
    </div>
    {/*Dust particle end-*/}
    <div className="container text-center text-dark mt-5">
      <div className="row">
        <div className="col-lg-6 d-block mx-auto mt-5">
          <div className="row">
            <div className="col-xl-12 col-md-12 col-md-12">
              <form onSubmit={handleSubmit}>
                <div className="wow-bg" id="formBg">
                  <h3 className="colorboard">ADD COUPON</h3>
                  <p className="text-muted">
                    Enter Details Of The Coupon You Want To Add
                  </p>
                  <div className="input-group mb-3">
                    <input
                      type="text"
					  name="companyName"
					  onChange={handleChange}
					  value={coupon.companyName}
                      className="form-control textbox-dg"
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="input-group mb-4">
                    <input
                      type="text"
					  name="couponCode"
					  onChange={handleChange}
					  value={coupon.couponCode}
                      className="form-control textbox-dg"
                      placeholder="Coupon Code"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="date"
					  name="lastDate"
					  onChange={handleChange}
					  value={coupon.lastDate}
                      className="form-control textbox-dg"
                      placeholder="Date"
                    />
                  </div>
				  <div className="input-group mb-3">
                    <input
                      type="number"
					  name="price"
					  onChange={handleChange}
					  value={coupon.price}
                      className="form-control textbox-dg"
                      placeholder="Coupon Price"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="text"
					  name="description"
					  onChange={handleChange}
					  value={coupon.description}
                      className="form-control textbox-dg"
                      placeholder="Coupon Description"
                    />
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <button
                        type="submit"
						value="Submit"
                        className="btn btn-primary btn-block logn-btn"

                      >
                        Add Coupon
                      </button>
                    </div>
                    
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
	</div>
		
	);
}

export default CouponAdd;
