import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
const host = "http://localhost:8000";

function CouponDelete(props) {
	const [coupon, setCoupon] = useState({});

	const { _id } = useParams();
	const navigate = useNavigate();

	useEffect(
		function deleteCouponById() {
			async function deleteCouponById() {
				try {
					const response = await axios.get(`${host}/api/coupons/${_id}`);
					setCoupon(response.data);
				} catch (error) {
					console.log("error", error);
				}
			}
			deleteCouponById();
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
		<div id="mainCoantiner" >
			<div>
            <div class="starsec"></div>
            <div class="starthird"></div>
            <div class="starfourth"></div>
            <div class="starfifth"></div>
        </div>
		<div className="container">
			<h2>{coupon.companyName}</h2>

			<p>
				<b>couponCode</b>: {coupon.couponCode}
			</p>
			<p>
				<b>lastdate</b>: {coupon.lastDate}
			</p>
			<p>
				<b>Link</b>:<a href={`${coupon.link}`}> {coupon.link} </a>
			</p>
			<p>
				<b>Description</b>: {coupon.description}
			</p>
			<p>
				<small>
					<b>ID</b>: {coupon._id}
				</small>
			</p>
			<div className="btn-group">
				<button onClick={handleDelete} className="btn btn-danger">
					Delete
				</button>
				<Link to="/coupons" className="btn btn-secondary">
					Cancel{" "}
				</Link>
			</div>
			<hr />
		</div>
		</div>
	);
}

export default CouponDelete;
