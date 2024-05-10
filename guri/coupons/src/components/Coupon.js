import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { yourCoupons } from "../services/Apis";
import axios from "axios";
const host = "http://localhost:8000";

function CouponTable() {
	const [coupons,setCoupons] = useState([]);

	useEffect(function () {
		async function getCoupons() {
			try {
				const response = await axios.get(`${host}/api/coupons`);
				setCoupons(response.data);
			} catch (error) {
				console.log("error", error);
			}
		}
		getCoupons();
	}, []);

	return (
		<div id="mainCoantiner">
			 <div>
            <div class="starsec"></div>
            <div class="starthird"></div>
            <div class="starfourth"></div>
            <div class="starfifth"></div>
        </div>
		<div className="container">
			<div>
				<h2>
					Your Coupons
					<p>
						<Link to="/cruds/new" className="btn btn-primary float-right">
							Create Coupon
						</Link>
					</p>
				</h2>
				<hr />
			</div>
		
                        <div className="table-responsive">
			<table className="table riped  table-hover table-bordered container">
				<thead>
					<tr style={{color: "white"}} >
						<th >Company-Name</th>
						<th>CouponCode</th>
						<th>Lastdate</th>
						<th>Price</th>
						<th>Description</th>
						<th>View</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody style={{color: "white"}}>
					{coupons &&
						coupons.map((coupon) => {
							return (
								<tr key={coupon._id}>
									<td>
										<Link to={`/coupon/${coupon._id}`} className="link-line">
											{coupon.companyName}
										</Link>
									</td>
									<td>{coupon.couponCode}</td>
									<td>{coupon.lastDate}</td>
									<td>{coupon.price}</td>
									<td>{coupon.description}</td>
									<td>
										<Link to={`/coupondetails/${coupon._id}`} className="btn btn-warning">
											View
										</Link>
									</td>
									<td>
										<Link
											to={`/couponedit/${coupon._id}/edit`}
											className="btn btn-success"
										>
											Edit
										</Link>
									</td>
									<td>
										<Link
											to={`/coupondelete/${coupon._id}/delete`}
											className="btn btn-danger"
										>
											Delete
										</Link>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
			</div>
		</div>
		</div>
	);
}

export default CouponTable;
