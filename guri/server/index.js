
const connectDB = require("./db");
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
connectDB();
const router = require("./Routes/router");
const paymentRoutes = require("./Routes/paymentRoutes.js")

const couponRoutes = require("./Routes/couponRoutes");
const PORT = 8000;

// middleware
app.use(express.json());
app.use(cors());
app.use(router);


// Routes

app.use("/api/coupons", couponRoutes);
app.use("/api", paymentRoutes);

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);
app.listen(PORT,()=>{
    console.log(`Server start at Port No :${PORT}`)
})
