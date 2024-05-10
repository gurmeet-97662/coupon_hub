import React, { useState, useEffect } from "react";
import { get, patch } from "axios";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const host = "http://localhost:8000"


function CouponEdit(props) {
	const initialState = {
		companyName: "",
		couponCode: "",
		lastrDate: "",
		price: "",
		description: "",
	};
	const [coupon, setCoupon] = useState(initialState);

	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function updateCoupon() {
				try {
					const response = await axios.get(`${host}/api/coupons/${_id}`);
					setCoupon(response.data);
				} catch (error) {
					console.log(error);
				}
			}
			updateCoupon();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props]
	);

	function handleSubmit(event) {
		event.preventDefault();
		async function updateCoupon() {
			try {
				await axios.patch(`${host}/api/coupons/${coupon._id}`, coupon);
				navigate(`/coupondetails/${coupon._id}`);
			} catch (error) {
				console.log(error);
			}
		}
		updateCoupon();
	}

	function handleChange(event) {
		setCoupon ({ ...coupon, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate(`/coupon/${coupon._id}`);
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
			<h1>Edit {coupon.companyName}</h1>
			<hr />
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Company Name</label>
					<input
						name="companyName"
						type="text"
						value={coupon.companyName}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Coupon Code</label>
					<input
						name="couponCode"
						type="text"
						
						required
						value={coupon.couponCode}
						onChange={handleChange}
						className="form-control"
					/>
					
				</div>
				<div className="form-group">
					<label>Last Date</label>
					<input
						name="lastDate"
						type="date"
						required
						value={coupon.lastDate}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Price</label>
					<input
						name="price"
						type="text"
						
						required
						value={coupon.price}
						onChange={handleChange}
						className="form-control"
					/>
					
				</div>

				<div className="form-group">
					<label>Description</label>
					<textarea
						name="description"
						row="5"
						value={coupon.description}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				<div className="btn-group">
					<button type="submit" className="btn btn-primary">
						Update
					</button>
					<button
						type="button"
						onClick={handleCancel}
						className="btn btn-secondary"
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
		</div>
	);
}

export default CouponEdit;
