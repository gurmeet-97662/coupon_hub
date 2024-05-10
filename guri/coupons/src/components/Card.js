import { Button, Image, Text, VStack } from '@chakra-ui/react'
import { React, useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"
import "../styles/card.css"
import axios from "axios";
const host = "http://localhost:8000";



const Card = ({ amount, checkoutHandler }) => {
    const [coupons, setCoupons] = useState([]);
    const navigate = useNavigate();

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

    function handleCoupon(){
     
    }
    return (
        <section className='body'>
        
            <h2>
                Coupons
                
            </h2>
            <hr />
            <div>
        <div class="starsec"></div>
        <div class="starthird"></div>
        <div class="starfourth"></div>
        <div class="starfifth"></div>
    </div>

                <div className="d-flex flex-wrap">
                    {coupons.map((coupon) => {
                        return (
                            <div className="card ml-5 mt-7 col-md-3 " id='card'>
                                <div className="card-body">
                                    <h5 className="card-title">{coupon.companyName}</h5>
                                    <p className="card-text">{coupon.lastDate}</p>
                                    <p className="card-text">₹{coupon.price}</p>
                                    <p className="card-text">{coupon.description}</p>
                                    
                                    <button className='btn btn-danger'onClick={() => checkoutHandler(coupon.price)}>Buy Now</button><br/>
                                    <p><Link to={`/couponcode/${coupon._id}`} >
											Redeem coupon
										</Link></p>
                                    
                                </div>
                                
                            </div>
                        );
                    })}
                </div>
            
        
        </section>
    )
}

export default Card