import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/details.css"
import { Link, useNavigate, useParams } from "react-router-dom";
import { couponDelete, couponDetails } from "../services/Apis";
const host = "http://localhost:8000"



function CouponDetails(props) {
	const [coupon, setCoupon] = useState({});

	const { _id } = useParams();
	const navigate = useNavigate();

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

	async function handleDelete() {
		try {
			await axios.delete(`${host}/api/coupons/${_id}`);
			navigate("/coupons");
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div id="mainCoantiner">
<div>
            <div class="starsec"></div>
            <div class="starthird"></div>
            <div class="starfourth"></div>
            <div class="starfifth"></div>
        </div>

		<div className="container">
			<h2>{coupon.companyName}</h2>

			<p>
				<b>CouponCode</b>: <a href={`${coupon.couponCode}`}> {coupon.couponCode} </a>
			</p>

			<p>
				<b>lastdate</b>: {coupon.lastDate}
			</p>
			<p>
				<b>Description</b>: <p align="justify">{coupon.description}</p>
			</p>
			<p>
				<b>Price</b>: <p align="justify">{coupon.price}</p>
			</p>
			<p>
				<small>
					<b>ID</b>: {coupon._id}
				</small>
			</p>
			<div className="btn-group ">
				<Link to={`/couponedit/${coupon._id}/edit`} className="btn btn-primary">
					Edit
				</Link>
				<button onClick={handleDelete} className="btn btn-danger">
					Delete
				</button>
				<Link to="/coupons" className="btn btn-secondary">
					Close
				</Link>
			</div>
			<hr />
		</div>
		</div>
	);
}

export default CouponDetails;
