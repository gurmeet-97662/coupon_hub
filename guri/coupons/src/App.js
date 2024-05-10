import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Otp from "./pages/Otp";
import Login from './pages/Login';
import Register from './pages/Register';

import CouponAdd from "./components/CouponAdd";
import Coupon from "./components/Coupon";
import CouponDetails from "./components/CouponDetails";
import CouponEdit from "./components/CouponEdit";
import CouponDelete from "./components/CouponDelete";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import "./styles/mix.css"
import "./styles/card.css"
import Home from "./components/Home";
import PaymentSuccess from "./components/PaymentSuccess";
import CouponCode from "./components/CouponCode";


function App() {
  
  return (
<div className="App">
    <Router>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/user/otp' element={<Otp />} />
        <Route exact path="/coupons" element={<Coupon />} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/addCoupons" element={<CouponAdd />} />
        <Route exact path="/coupondetails/:_id" element={<CouponDetails />} />
        <Route exact path="/couponedit/:_id/edit" element={<CouponEdit />} />
        <Route exact path="/coupondelete/:_id/delete" element={<CouponDelete />} />
        <Route exact path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route exact path="/couponcode/:_id" element={<CouponCode />} />
      </Routes>
    </Router>
</div>

  );
}

export default App;




