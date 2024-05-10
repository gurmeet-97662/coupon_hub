const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
	companyName: {
		type: String,
		required: [true, "Company Name is required"],
		unique: [true, "Company Name Already Exists"],
	},
	couponCode: {
		type: String,
        required: [true, "coupon code is Required"],
		unique: [true, "Enter a valid Coupon"]
	},
	lastDate: {
		type: Date,
		required: [true, "Date is Required"]
	},
	
	description: {
		type: String,
		required: [true, "description can't be blank"],
	},
	price: {
		type: Number,
		required: [true, "Price can't be blank"],
	},
});

module.exports = mongoose.model("coupon", couponSchema, "Coupons");