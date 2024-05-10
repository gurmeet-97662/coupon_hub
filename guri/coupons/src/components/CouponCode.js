import { React, useEffect, useState } from 'react'
import axios from "axios";
import "../styles/code.css"
import { useParams } from "react-router-dom";
import { Divider } from '@chakra-ui/react';
const host = "http://localhost:8000"

function CouponCode(props) {
	const [coupon, setCoupon] = useState({});

	const { _id } = useParams();
	//const navigate = useNavigate();

	useEffect(
		function () {
			async function getCouponById() {
				try {
					const response = await axios.get(`${host}/api/coupons/${_id}`);
					setCoupon(response.data);
					
				} catch (error) {
					console.log("error", error);
				}
			}
			getCouponById();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props]
		
	);



	return (
		
			<div className="card l-bg-green-dark">
		    <div className="card-statistic-3 p-4">
		      <h1 className="card-title ">Coupon Code: {coupon.couponCode}</h1>
		      <div className="card-icon card-icon-large">
		        <i className="fas fa-ticket-alt" />
		      </div>
		      <div className=" mt-5">
		        <h3 className="card-title ">Coupon Redeemed Successfuly</h3>
		      </div>
		      <div className="progress mt-1 " data-height={8} style={{ height: 8 }}>
		        <div
		          className="progress-bar l-bg-orange"
		          role="progressbar"
		          data-width="25%"
		          aria-valuenow={25}
		          aria-valuemin={0}
		          aria-valuemax={100}
		          style={{ width: "25%" }}
		        />
		      </div>
		    </div>
		  </div>
		
	)
}

export default CouponCode